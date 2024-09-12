import React, {useState} from 'react';
import '../styles/StatisticsPage.css'
import {extractTeamName, getTeamColor} from "../components/TeamSelect";
import {useQuery} from "react-query";
import {getStatisticsByFieldNameDate} from "../service/StatisticsService";
import useSelectedField from "../hooks/useSelectedField";
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import Loading from "../components/Loading";
import {getTeamsByFieldAndDate} from "../service/TeamsService";
import {showNotification} from "../App";
import {formatDate} from "./EntryFormPage";
import useFields from "../hooks/useFields";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

const TeamStatsCard = (team) => {


    const newTeam = team.team;
    return <div className="team-stats-card">
            <span className="stats-header">{newTeam.team.includes("white") ? <OutlineShirtSvg height={60}/> :
                <ShirtSvg fill={getTeamColor(newTeam.team)} width={60}/>}
                <h3>{extractTeamName(newTeam.team)}</h3>
            </span>

        <div>Success rate: <span className="fw-bold">{newTeam.successRate}</span></div>
        <div>Goals per game average: <span className="fw-bold">{newTeam.goalsPerGame}</span></div>
        <div>Goals per game against average: <span className="fw-bold">{newTeam.goalsAgainstPerGame}</span></div>
    </div>

};

const Statistics = () => {

    const [teams, setTeams] = useState([])
    const [teamsStats, setTeamsStats] = useState([]);
    const [games, setGames] = useState([])
    const {selectedField} = useSelectedField();
    const {date} = useFields()
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    const teamsQuery = useQuery(['teams', teams, selectedField, date], () => getTeamsByFieldAndDate({
        field: selectedField,
        date: formatDate(date)
    }), {
        onSuccess: setTeams,
        onError: (err) => {
            showNotification('error', err)
        },
        onSettled: () => setIsLoading(false),
        refetchOnWindowFocus: false
    });


    const gamesQuery = useQuery({
        queryFn: () => getStatisticsByFieldNameDate({field: selectedField, date: date}),
        queryKey: ['statistics', games, selectedField, date],
        onSuccess: (date) => {
            setGames(date)
            calculatePoints()
        },
        onError: (err) => {
            showNotification('error', err)
        }
    });


    const TableInfo = <div id='table-info'>
        <h6>MP - Matches Played</h6>
        <h6>W - Wins</h6>
        <h6>D - Draws</h6>
        <h6>L - Losses</h6>
        <h6>GS - Goals Scored</h6>
        <h6>GA - Goals Against</h6>
        <h6>GD - Goal Difference</h6>
    </div>

    const StatisticsTable = ({stats}) => (
        <div className="statistics">
            <table className="statistics-table">
                <thead>
                <tr>
                    <th className="fw-bold mt-4">#</th>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GS</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Pts</th>
                </tr>
                </thead>
                <tbody>
                {stats && stats.map((item, index) => (
                    <tr key={index}>
                        <td className="fw-bold">{index + 1}</td>
                        <td>{extractTeamName(item.team)}</td>
                        <td>{item.MP}</td>
                        <td>{item.W}</td>
                        <td>{item.D}</td>
                        <td>{item.L}</td>
                        <td>{item.GS}</td>
                        <td>{item.GA}</td>
                        <td>{item.GD}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <FontAwesomeIcon className="info-icon" icon={faInfoCircle} onClick={() => setIsOpen(!isOpen)}/>
            {isOpen ? TableInfo : null}
        </div>
    );

    const calculatePoints = () => {
        let tempStats = {};

        teams?.forEach(team => {
            tempStats[team.team] = {
                MP: 0,
                W: 0,
                D: 0,
                L: 0,
                GS: 0,
                GA: 0,
                GD: 0,
                points: 0
            };
        });

        tempStats && games?.forEach(game => {
            const {team_a, team_b, score_a, score_b} = game;

            if (tempStats[team_a] && tempStats[team_b]) {

                tempStats[team_a].MP += 1;
                tempStats[team_b].MP += 1;

                tempStats[team_a].GS += score_a;
                tempStats[team_b].GS += score_b;
                tempStats[team_a].GA += score_b;
                tempStats[team_b].GA += score_a;

                if (score_a > score_b) {
                    tempStats[team_a].W += 1;
                    tempStats[team_b].L += 1;
                    tempStats[team_a].points += 3;
                } else if (score_b > score_a) {
                    tempStats[team_b].W += 1;
                    tempStats[team_a].L += 1;
                    tempStats[team_b].points += 3;
                } else {
                    tempStats[team_a].D += 1;
                    tempStats[team_b].D += 1;
                    tempStats[team_a].points += 1;
                    tempStats[team_b].points += 1;
                }

                tempStats[team_a].GD = tempStats[team_a].GS - tempStats[team_a].GA;
                tempStats[team_b].GD = tempStats[team_b].GS - tempStats[team_b].GA;
            }


        });

        const statsArray = Object.keys(tempStats).map(teamName => ({
            team: teamName,
            ...tempStats[teamName],
        })).sort((a, b) => b.W !== a.W ? b.W - a.W : b.points - a.points);

        setTeamsStats(statsArray);
    };

    const allStatsAreZero = teamsStats.every(team => {
        return team.MP === 0 && team.W === 0 && team.D === 0 && team.L === 0 && team.GS === 0 && team.GA === 0 && team.GD === 0 && team.points === 0;
    });

    const enrichedTeams = teamsStats.map(team => {
            const stats = team
            const averageGoals = stats.MP > 0 ? (stats.GS / stats.MP).toFixed(2) : 0;
            return {
                ...team,
                successRate: stats.MP > 0 ? ((stats.W / stats.MP) * 100).toFixed(2) + '%' : '0%',
                goalsPerGame: parseInt(averageGoals),
                goalsAgainstPerGame: stats.MP > 0 ? (stats.GA / stats.MP).toFixed(1) : 0
            }
        }
    );

    if (isLoading && teamsQuery.isFetching && teamsQuery.isLoading && gamesQuery.isLoading) {
        return <div className="message">
            <Loading style={{height: '100dvh'}} height={50}/></div>
    }

    return (
        <div className="statistics-container">
            {(teamsStats.length === 0 || allStatsAreZero) ?
                <div className='message-container'>
                    <h5 className="statistics-message">Statistics for this field
                        are empty for now... <br/> <span>Play first to see team's Statistics</span>
                    </h5>
                </div> :
                <>
                    {(games && teamsStats) && <StatisticsTable stats={teamsStats || []}/>}
                    <div>
                        {enrichedTeams.map((team, i) => (
                            <TeamStatsCard key={i} team={team}/>
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default Statistics;

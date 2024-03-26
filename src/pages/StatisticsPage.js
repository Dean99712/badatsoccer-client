import '../styles/StatisticsPage.css'
import React, {useEffect, useState} from 'react';
import {useQuery, useQueryClient} from "react-query";
import {getStatisticsByFieldNameDate} from "../service/StatisticsService";
import useSelectedField from "../hooks/useSelectedField";
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import {extractTeamName, getTeamColor} from "../components/TeamSelect";
import Loading from "../components/Loading";

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

const StatisticsPage = () => {

    const [teams, setTeams] = useState([])
    const [teamsStats, setTeamsStats] = useState([]);
    const {selectedField} = useSelectedField();
    const date = localStorage.getItem("selectedDate");


    const [isLoading, setIsLoading] = useState(false)
    const queryClient = useQueryClient();

    useQuery({
        queryFn: () => getStatisticsByFieldNameDate({selectedField, date}),
        queryKey: ["statistics", selectedField],
        onSuccess: (data) => {
            setTeams(data);
            calculatePoints(data);
        }
    })

    useEffect(() => {
        async function validateTeams() {
            setIsLoading(true);
            await queryClient.invalidateQueries("statistics")
            setIsLoading(false);
        }
        validateTeams();

    }, [selectedField, teams, queryClient]);

    const StatisticsTable = ({stats}) => (
        <div className="statistics">
            <table className="statistics-table">
                <thead>
                <tr>
                    <th className="fw-bold mt-4">#</th>
                    <th>Team</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                </tr>
                </thead>
                <tbody>
                {stats && stats?.map((item, index) => {

                    const stats = item.stats;
                    return <tr key={index}>
                        <td className="fw-bold">{index + 1}</td>
                        <td>{extractTeamName(item.team)}</td>
                        <td>{stats.wins}</td>
                        <td>{stats.draws}</td>
                        <td>{stats.losses}</td>
                        <td>{stats.points}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
    const calculatePoints = () => {

        let tempStats = {};

        teams.forEach((game) => {

            Object.keys(game).forEach((key) => {
                if (key.includes('_score')) {
                    const teamId = key.replace('_score', '');
                    const teamName = game[teamId];
                    const score = game[key];

                    if (!tempStats[teamName]) {
                        tempStats[teamName] = {draws: 0, losses: 0, points: 0, wins: 0, games: 0, totalGoals: 0};
                    }

                    if (score !== null) {
                        tempStats[teamName].totalGoals += score;
                        tempStats[teamName].games += 1;
                    }

                    Object.keys(game).forEach((compareKey) => {
                        if (compareKey.includes('_score') && compareKey !== key) {
                            const compareScore = game[compareKey];
                            if (score !== null && compareScore !== null) {
                                if (score > compareScore) {
                                    tempStats[teamName].wins += 1;
                                    tempStats[teamName].points += 2;
                                } else if (score < compareScore) {
                                    tempStats[teamName].losses += 1;
                                } else {
                                    tempStats[teamName].draws += 1;
                                    tempStats[teamName].points += 1;
                                }
                            }
                        }
                    });
                }
            });
        });

        const statsArray = Object.keys(tempStats).map(teamName => ({
            team: teamName,
            stats: tempStats[teamName],
        })).sort((a, b) => {
            if (a.stats.wins > b.stats.wins) {
                return b.stats.wins - a.stats.wins;
            }
            return b.stats.points - a.stats.points;
        });
        setTeamsStats(statsArray);
    };

    const enrichedTeams = teamsStats.map(team => {

            const stats = team.stats;
            const averageGoals = stats.games > 0 ? (stats.totalGoals / stats.games).toFixed(2) : 0;
            return {
                ...team,
                successRate: stats.games > 0 ? ((stats.wins / stats.games) * 100).toFixed(2) + '%' : '0%',
                goalsPerGame: parseInt(averageGoals),
                goalsAgainstPerGame: ""
            }
        }
    );

    return (
        <>
            {isLoading ? <Loading height={50}/> :
                teamsStats.length === 0 ?
                    <div className="statistics-container"><h5 className="statistics-message">Statistics for this field are empty for now... <br/> <span>Play first to see team's Statistics</span>
                    </h5></div> : <div className="statistics-container">
                    <StatisticsTable stats={teamsStats || []}/>
                    <div>
                        {enrichedTeams.map((team, i) => (
                            <TeamStatsCard key={i} team={team}/>
                        ))}
                    </div>
                </div>
            }
        </>
    );
};

export default StatisticsPage;
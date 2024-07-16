import ImageViewer from "./ImageViewer";
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import {extractTeamName} from "./TeamSelect";

const Players = ({team = Array}) => {

    return (
        <>
            {team.map((player) => {
                return (
                    <div className="player" key={player.id}>
                        {player.team_to_pick.includes('White') ? <OutlineShirtSvg/> : <ShirtSvg fill={extractTeamName(player.team_to_pick)}/>}
                        <ImageViewer name={player.player_name} results={team}/>
                        <h5 className="player-name">{player.player_name}</h5>
                    </div>
                )
            })
            }
        </>
    );
}
export default Players
import React, {useState} from 'react';
import {getImagesFromAzure} from "../service/ImagesService";
import {useQuery} from "react-query";


const ImageViewer = ({name, results}) => {
    const [imageUrl, setImageUrl] = useState([]);

    useQuery({
        queryKey: ['image'],
        queryFn: getImagesFromAzure,
        onSuccess: setImageUrl
    });

    const updatedPlayers = results.map(player => {
        const imageEntry = imageUrl.find(image => {
            return image.player_name.split('.')[0].toLowerCase() === player.player_name.toLowerCase()
        });
        return {
            ...player,
            player_url: imageEntry ? imageEntry.player_url : ''
        };
    });

    console.log(imageUrl)

    return (
        <>
            {updatedPlayers.filter((item) => item.player_name === name).map(player =>
                player.player_url ?
                <img src={player.player_url} alt="player"/> :
                <img src="https://q-reviews.com/wp-content/uploads/2022/08/Profile_avatar_placeholder_large.png"
                     alt="player"/>)}
        </>
    );
};

export default ImageViewer;
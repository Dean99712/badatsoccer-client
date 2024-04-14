import axios from "../api/axios";

const GET_IMAGES_FROM_AZURE = '/get_images_from_azure'

export const getImagesFromAzure = async () => {
    const response  = await axios.get(GET_IMAGES_FROM_AZURE)
    return response.data;
}
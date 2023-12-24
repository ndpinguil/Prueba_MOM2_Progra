// En Api.ts
import axios from 'axios';
// API PAUL PORTILLA
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

// Interfaz para la api de marvel
interface MarvelCharacter {
    name: string;
    description: string;
    powers: string[];
}
// Interfaz para la respuesta de la API de gatos pero no se sabe con certeza la estructura de la respuesta así que no se define 
// igual funciona pero pídele al chatgpt que si te puede ayudar y si haces alguna modificación en este archivo, luego le pides que si se debe hacer algún 
//  cambio en el de de HeroCard.tsx de ahpí ya todo funciona, y cuando vayas a grabar el video no muestres el apptsx a menos que le hagas de otra forma porque 
// el app.tsx de la forma que está hecho ahorita, necesita que esté así <CardApi term=''/> pero no debería, entonces eso peque, te amo y ahí veále c:
// esta e smi ayudita
// RECUERDA: SI TE SALE UN ERROR EN UNA PALABRA, PONES ENCIMA EL MOUSE Y LEES LO QUE DTE DICE Y COPIAS Y PEGAS Y BUSCAS O LE PREGUNTAS AL CHAT
export interface CatApiResponse {
    id: string;
    url: string;
    width: number;
    height: number;
    // Otros campos que puedan retornar
}

// Funciones a mostrar la promesa
export interface MarvelApiResponse extends Array<MarvelCharacter> {}

export const fetchMarvelCharacterData = async (characterName: string): Promise<MarvelApiResponse> => {
    const headers = {
        'X-RapidAPI-Key': '2d46d63b4bmshcd8575c8b874ceap1bd115jsn892cf66b3433',
        'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
    };

    const url = `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=${characterName}`;
    const response = await axios.get(url, { headers });
    return response.data;
};


// CONSUMO DE API PAUL PORTILLA
export const fetchCatImage = async (): Promise<CatApiResponse> => {
    try {
      // Realiza la lógica para obtener la imagen de gato
        const response = await axios.get(CAT_API_URL);
    return response.data;
      // Retorna la respuesta como tipo CatApiResponse
        //return data;
    } catch (error) {
      // Maneja errores si es necesario
        console.error('Error fetching cat image:', error);
        throw new Error('Error fetching cat image');
    }
};
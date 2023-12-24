// En HeroCard.tsx
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
// import { fetchUrbanDictionaryDefinition } from './Api';
import { MarvelApiResponse, fetchMarvelCharacterData, fetchCatImage } from './Api';

interface HeroCardProps {
    term: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ term }) => {
    const [marvelCharacterData, setMarvelCharacterData] = useState<MarvelApiResponse | null>(null);
    const [catImage, setCatImage] = useState<string | undefined>(undefined); // Aquí estaba string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const urbanDictionaryData = await fetchUrbanDictionaryDefinition(term);
                // setDefinition(urbanDictionaryData.list[0].definition);

                // TUS APIS
                const marvelCharacterData = await fetchMarvelCharacterData(term);
                setMarvelCharacterData(marvelCharacterData);
                // Llamada a la API de The Cat API
                const catImageData = await fetchCatImage();
                // Asumiendo que catImageData es un array de CatApiResponse
                if (Array.isArray(catImageData) && catImageData.length > 0) {
                    setCatImage(catImageData[0].url);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [term]);

    return (
        <div className='api-content'>
            <Card className='herocard' title='Hero Card Marvel and Cat'>
                <h4>API de Marvel:</h4>
            {marvelCharacterData && marvelCharacterData.length > 0 ? (
                    <>
                        <p>Nombre: {marvelCharacterData[1].name}</p>
                        <p>Descripción: {marvelCharacterData[1].description}</p>
                        <p>Poderes: {marvelCharacterData[1].powers.join(', ')}</p>
                    </>
                ) : (
                    <p>Cargando información del personaje de Marvel...</p>
                )}
                <hr />
                <div className='cardheader'>
                    <h4>Api de gatos</h4>
                    <img src={catImage} alt="Cat" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }} />
                </div>
            </Card>
        </div>
    );
};

export default HeroCard;

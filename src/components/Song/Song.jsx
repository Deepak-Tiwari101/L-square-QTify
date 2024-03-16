import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GenreTab from './GenreTab'
import { config } from '../../App'
import styles from './Song.module.css'
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'


export default function Song() {
    const [selectedGenre, setSelectedGenre] = useState(config.genre.ALL_GENRE.index);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchSongsApiCall = async () => {
            try {
                const res = await axios.get(`${config.endpoint}/songs`, {
                    signal: signal
                });
                const songsArr = res.data;
                if (selectedGenre !== 0) {
                    setSongs(() =>
                        songsArr.filter((song) =>
                            song.genre.key.toLowerCase() === config.getGenreKeyByIndex(selectedGenre).toLowerCase()
                        )
                    );
                }
                else setSongs(() => songsArr);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchSongsApiCall()

        //Clean-up callback function
        return () => {
            abortController.abort();
        }
    }, [selectedGenre]);


    const handleChange = (e, newVal) => setSelectedGenre(() => newVal);

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.songHeader}>Songs</h3>
            {
                loading ? (
                    <>
                        <div className={styles.loadState}>
                            <div className={styles.circularLoader}></div>
                            <h3>Loading...</h3>
                        </div>
                    </>
                ) : (
                    <>
                        <GenreTab value={selectedGenre} handleGenreChange={handleChange} />
                        <Carousel data={songs} renderComponent={(ele) => <Card data={ele} type={config.songType} />} />
                    </>
                )
            }
        </div>
    );
}

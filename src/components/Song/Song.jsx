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

    const handleChange = (e, newVal) => setSelectedGenre(() => newVal);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchAlbumsApiCall = async () => {
            try {
                const res = await axios.get(`${config.endpoint}/songs`, {
                    signal: signal
                });
                setSongs(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchAlbumsApiCall();

        //Clean-up callback function
        return () => {
            abortController.abort();
        }
    }, []);

    // TODO: FUNCTIONALITY TO CHANGE GENRE
    useEffect(() => {
        if (selectedGenre === 0) return;
        // console.log(songs.length)
        // const genreKey = config.getGenreKeyByIndex(selectedGenre);
        // setSongs((prev) => {
        //     return prev.filter((ele) => ele.genre.key.localeCompare(genreKey))
        // })

    }, [selectedGenre])

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
    )
}


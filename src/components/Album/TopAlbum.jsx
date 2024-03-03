import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { config } from '../../App'
import styles from './Album.module.css'
import Card from '../Card/Card';

export default function TopAlbum() {
    const [topAlbums, setTopAlbums] = useState([]);

    const sortedTopAlbums = useMemo(() => {
        return [...topAlbums].sort((a, b) => {
            return b.follows - a.follows;
        })
    }, [topAlbums]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetchTopAlbumsApiCall(signal);

        //Clean-up callback function
        return () => {
            abortController.abort();
        }
    }, []);

    const fetchTopAlbumsApiCall = async (signal) => {
        try {
            const res = await axios.get(config.endpoint + '/albums/top', {
                signal: signal
            });
            setTopAlbums(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <h3>Top Albums</h3>
            <div className={styles.albumContainer}>
                {topAlbums && sortedTopAlbums.map((album) => {
                    return (
                        <div key={album.id}>
                            <Card data={{
                                image: album.image,
                                follows: album.follows,
                                title: album.title,
                                songs: album.songs,
                                slug: album.slug,
                            }} type={config.albumType} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

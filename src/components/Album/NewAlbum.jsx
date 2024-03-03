import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../App'
import styles from './Album.module.css'
import Card from '../Card/Card';

export default function NewAlbum() {
    const [newAlbums, setNewAlbums] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetchNewAlbumsApiCall(signal);

        //Clean-up callback function
        return () => {
            abortController.abort();
        }
    }, []);

    const fetchNewAlbumsApiCall = async (signal) => {
        try {
            const res = await axios.get(config.endpoint + '/albums/new', {
                signal: signal
            });
            setNewAlbums(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <h3>New Albums</h3>
            <div className={styles.albumContainer}>
                {newAlbums && newAlbums.map((album) => {
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

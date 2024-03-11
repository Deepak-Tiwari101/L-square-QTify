import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../App'
import styles from './Album.module.css'
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';


export default function Section({ title, url }) {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchAlbumsApiCall = async () => {
            try {
                const res = await axios.get(url, {
                    signal: signal
                });
                setAlbums(res.data);
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
    }, [url]);


    return (
        <>
            <div className={styles.albumHeader}>
                <h3>{title}</h3>
                <h3 className={styles.expandCollapse} onClick={() => setCollapse(!collapse)}>
                    {collapse ? `Show all` : `Collapse`}
                </h3>
            </div>

            {/* Show circular loading logo when api fetch is in progress and once it completes, show the content. */}
            {loading ? (
                <div className={styles.loadState}>
                    <div className={styles.circularLoader}></div>
                    <h3>Loading...</h3>
                </div>
            ) : (
                <>
                    {/* if collapse is false, this means we have to show all the album cards */}
                    {collapse ? (
                        <Carousel data={albums} renderComponent={(ele) => <Card data={ele} type={config.albumType} />} />
                    ) : (
                        <div className={styles.albumContainer}>
                            {albums && albums.map((album) => (
                                <Card
                                    key={album.id}
                                    data={{
                                        image: album.image,
                                        follows: album.follows,
                                        title: album.title,
                                        songs: album.songs,
                                        slug: album.slug,
                                    }}
                                    type={config.albumType}
                                />
                            )
                            )}
                        </div>

                    )}

                </>
            )}
        </>
    )
}

import React from 'react'
// import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import styles from './Card.module.css'

export default function Card({ data, type }) {
    const getCard = (type) => {
        switch (type) {
            case 'album': {
                const { image, follows, title, songs, slug } = data;

                return (
                    <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                        <div className={styles.wrapper}>
                            <a href={`/album/${slug}`} style={{ textDecoration: 'none' }}>
                                <>
                                    <div className={styles.card}>
                                        <img src={image} alt='album' loading='lazy' />
                                        <div className={styles.banner}>
                                            {/* <Chip label={`${follows} Follows`} className={styles.chip} /> */}
                                            <div className={styles.pill}>
                                                <p>{follows} Follows</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.titleWrapper}>
                                        {title}
                                    </div>
                                </>
                            </a>
                        </div>
                    </Tooltip>
                )
            }
            case 'song': {
                const { image, likes, title } = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt='songs' loading='lazy' />
                            <div className={styles.banner}>
                                {/* <Chip label={`${likes} Likes`} className={styles.chip} /> */}
                                <div className={styles.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            {title}
                        </div>
                    </div>
                )
            }
            default: return <></>
        }
    }
    return getCard(type);
}

import React from 'react'
import styles from './Album.module.css'
import TopAlbum from './TopAlbum'
import NewAlbum from './NewAlbum'

export default function Album() {
    return (
        <div className={styles.wrapper}>
            <TopAlbum />
            <NewAlbum />
        </div>
    )
}

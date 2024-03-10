import React from 'react'
import styles from './Album.module.css'
import Section from './Section'
import { config } from '../../App'

export default function Album() {
    return (
        <div className={styles.wrapper}>
            <Section title="Top Albums" url={config.endpoint + `/albums/top`} />
            <Section title="New Albums" url={config.endpoint + `/albums/new`} />
        </div>
    )
}

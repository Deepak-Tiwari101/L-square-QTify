import React from 'react';
import styles from './Hero.module.css';
import HeadphoneImage from '../../assets/VibratingHeadphone.svg';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={HeadphoneImage} alt='Headphone' width={212}></img>
            </div>
        </div >
    )
}

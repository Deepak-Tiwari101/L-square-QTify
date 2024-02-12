import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FeedbackBtn from '../FeedbackBtn/FeedbackBtn';
import styles from './Navbar.module.css';
import { ReactComponent as QtifyLogo } from '../../assets/QTifyLogo.svg';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <a href="/">
            <QtifyLogo />
        </a>
        <SearchBar />
        <FeedbackBtn />
    </div>
  )
}

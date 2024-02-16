import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FeedbackBtn from '../FeedbackBtn/FeedbackBtn';
import styles from './Navbar.module.css';
// import { ReactComponent as QtifyLogo } from '../../assets/QTifyLogo.svg';
import Logo from '../Logo/Logo';

export default function Navbar({searchData}) {
  return (
    <>
      <nav className={styles.navbar}>
          <a href="/">
              <Logo />
          </a>
          <SearchBar placeholder={'Search an album of your choice'} searchData={searchData}/>
          <FeedbackBtn>Give Feedback</FeedbackBtn>
      </nav>
    </>
  )
}

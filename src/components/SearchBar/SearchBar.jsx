import React from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

export default function SearchBar({ placeholder, searchData }) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={onSubmit} className={styles.wrapper}>
                <input required className={styles.searchInput} placeholder={placeholder}></input>
                <button type='submit' className={styles.searchButton}>
                    <SearchIcon className={styles.seachIcon} />
                </button>
            </form>
        </>
    )
}

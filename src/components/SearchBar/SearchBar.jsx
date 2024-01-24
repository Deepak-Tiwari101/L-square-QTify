import React from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

export default function SearchBar() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={onSubmit} className={styles.wrapper}>
                <input required className={styles.searchInput} placeholder='Search an album of your choice'></input>
                <button type='submit' className={styles.searchButton}>
                    <SearchIcon className={styles.seachIcon} />
                </button>
            </form>
        </>
    )
}

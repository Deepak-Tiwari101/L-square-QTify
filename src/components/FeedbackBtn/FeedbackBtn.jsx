import React from 'react'
import styles from './FeedbackBtn.module.css';

export default function FeedbackBtn({ children }) {
    return (
        <button className={styles.feedbackBtn}>
            {children}
        </button>
    );
}
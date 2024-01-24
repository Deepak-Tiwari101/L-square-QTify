import React from 'react'
import styles from './FeedbackBtn.module.css';

export default function FeedbackBtn() {
    return (
        <div>
            <button className={styles.feedbackBtn}>
                Give Feedback
            </button>
        </div >
    );
}
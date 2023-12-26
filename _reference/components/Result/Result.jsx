"use client";


import styles from './Result.module.css'

function Result (props) {

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                Your score
            </div>
            <div className={styles.score}>
                {props.score}
            </div>
        </div>
    )
}

export default Result;
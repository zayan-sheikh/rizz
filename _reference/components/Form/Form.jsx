"use client";

import { useState } from "react";
import styles from './Form.module.css'

function Form(props) {
    const [name, setName] = useState("");
    const [year, setYear] = useState(0);
    const [major, setMajor] = useState("");

    return (
        <div className={styles.container}>
            Name
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />

            Major
            <input type="text" value={major} onChange={e=>setMajor(e.target.value)} />

            <button onClick={() => props.handleCalculate(name, major)}>
                Calculate
            </button>
        </div>
    )

}

export default Form;
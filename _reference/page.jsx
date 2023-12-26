"use client"

import { useState } from 'react'
import Form from "@/components/Form/Form";
import Result from "@/components/Result/Result";

function startsWithLetter(word, letter) {
  return word.toLowerCase().substring(0, 1) == letter.toLowerCase();
}

export default function Home() {
  const [score, setScore] = useState(null);

  function calculate(name, major) {
    let score = 0;

    if (startsWithLetter(name, 'j')) {
      score -= 10;
    } if (startsWithLetter(name, 'a')) {
      score += 10;
    }

    if (major.toLowerCase().includes('computer')) {
      score -= 1000;
    }

    setScore(score);
  } 

  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Rizzulator</h1>
      <p>
        Calculate your rizz
      </p>
      
      {score == null 
        ? <Form handleCalculate={calculate} />
        : <Result score={score} />}
    </main>
  )
}

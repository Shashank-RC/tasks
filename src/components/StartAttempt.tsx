import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizProgress, setQuizProgress] = useState<boolean>(false);
    const [numOfAttempts, setNumOfAttempts] = useState<number>(4);

    function pressStart(): void {
        setQuizProgress(true);
        setNumOfAttempts(numOfAttempts - 1);
    }

    function addAttempt(): void {
        setNumOfAttempts(numOfAttempts + 1);
    }

    function pressStop(): void {
        setQuizProgress(false);
    }

    return (
        <div>
            <Button
                onClick={pressStart}
                disabled={quizProgress || numOfAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={pressStop} disabled={!quizProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={quizProgress}>
                Mulligan
            </Button>
            <div>Attemps Left = {numOfAttempts}</div>
        </div>
    );
}

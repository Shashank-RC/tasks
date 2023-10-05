import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const revealAnswer = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <h2>Quiz Application</h2>
            <button onClick={revealAnswer}>Reveal Answer</button>
            {isAnswerVisible && <p>The answer is 42</p>}
        </div>
    );
}

export default RevealAnswer;

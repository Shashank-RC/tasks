import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group className="mb-3" controlId="CheckAnswer">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control
                    type="text"
                    onChange={updateAnswer}
                    placeholder="Enter Answer"
                />
            </Form.Group>
            <div> {givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

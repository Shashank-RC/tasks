import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [Attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setrequestedAttempts] = useState<string>("0");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setrequestedAttempts(event.target.value);
    }

    function updateAttempts() {
        if (requestedAttempts === "") {
            setAttempts(Attempts + 0);
        } else {
            setAttempts(Attempts + parseInt(requestedAttempts));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts: {Attempts} </div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Gain Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(Attempts - 1)}
                disabled={Attempts === 0}
            >
                use
            </Button>
            <Button onClick={() => updateAttempts()}>gain</Button>
        </div>
    );
}

/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(2);
    const [rightDie, setRightDie] = useState<number>(1);

    function rollLeftDie(): void {
        setLeftDie(d6);
    }
    function rollRightDie(): void {
        setRightDie(d6);
    }

    return (
        <div>
            <div>
                Left Die = <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                Right Die = <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {leftDie === rightDie ? (
                leftDie === 1 ? (
                    <div>You Lose</div>
                ) : (
                    <div>You Win</div>
                )
            ) : (
                <div></div>
            )}
        </div>
    );
}

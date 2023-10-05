import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = { name: string; emoji: string };

export function CycleHoliday(): JSX.Element {
    const holidays: Holiday[] = [
        { name: "Christmas", emoji: "🎅" },
        { name: "Easter", emoji: "🐰" },
        { name: "New Year's Day", emoji: "🎉" },
        { name: "Valentine's Day", emoji: "❤️" },
        { name: "Independence Day", emoji: "🇺🇸" }
    ];

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const advanceByAlphabet = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    };

    const advanceByYear = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    };

    return (
        <div>
            <h2>Cycle Holidays</h2>
            <p>
                Holiday: {holidays[currentHolidayIndex].name}{" "}
                {holidays[currentHolidayIndex].emoji}
            </p>
            <button onClick={advanceByAlphabet}>Advance by Alphabet</button>
            <button onClick={advanceByYear}>Advance by Year</button>
        </div>
    );
}

export default CycleHoliday;

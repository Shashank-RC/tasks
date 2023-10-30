import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "black",
    "magenta"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="Color"
                    onChange={updateColor}
                    id={color}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    key={color}
                    style={{ backgroundColor: color }}
                />
            ))}
            The Color is{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                {selectedColor}
            </span>
            .
        </div>
    );
}

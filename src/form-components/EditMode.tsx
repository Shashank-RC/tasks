import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [EditMode, setEditMode] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {student === true
                    ? name + " is a student"
                    : name + " is not a student"}
            </div>
            <Form.Check
                type="switch"
                id="EditMode"
                label="EditMode"
                checked={EditMode}
                onChange={updateEditMode}
            />
            {EditMode && (
                <Form.Group controlId="name">
                    <Form.Label>Change Name:</Form.Label>
                    <Form.Control
                        type="textbox"
                        id="nameBox"
                        placeholder="Change Name"
                        onChange={updateName}
                    />
                </Form.Group>
            )}
            {EditMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Is Student?"
                    checked={student}
                    onChange={updateIsStudent}
                />
            )}
        </div>
    );
}

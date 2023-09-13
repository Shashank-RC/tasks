import React from "react";
import "./App.css";
import img from "./images/image.jpg";

import { Row, Col, Button, Container } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                yUM COS420 with React Hooks and TypeScript HELLO WORLD
            </header>
            <span style={{ color: "red" }}>
                <h1>This is header text</h1>;
            </span>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50",
                                width: "30",
                                backgroundColor: "red"
                            }}
                        >
                            First column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50",
                                width: "30",
                                backgroundColor: "red"
                            }}
                        >
                            Second Column
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={img} alt="screenshot of assignment1" />
            Unordered List:
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. shashank chintakuntla
            </p>
        </div>
    );
}

export default App;

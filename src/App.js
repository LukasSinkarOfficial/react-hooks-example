import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [spin, setSpin] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <div onClick={() => setSpin(!spin)}>
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                        style={{ animation: spin ? "none" : "App-logo-spin infinite 20s linear" }}
                    />
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

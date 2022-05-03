import React from "react"
import Die from "./components/Die"
import "./style.css"

export default function App() {
    function allNewDice() {
        let arr = []
        
    }
    return (
        <div>
            <main>
                <div className="dice-container">
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                    <Die value="1"/>
                </div>
            </main>

        </div>
    )
}
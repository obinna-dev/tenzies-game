import React from "react"
import Die from "./components/Die"
import "./style.css"

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */


export default function App() {

const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newdiceArr = []
            for (let i = 0; i < 10; i++) {
                newdiceArr.push(Math.ceil(Math.random() * 6))
            }
            return newdiceArr
    }

    const dieNumber = dice.map(dice => <Die value={dice}/>
    )

    return (
        <div>
            <main>
                <div className="dice-container">
                {dieNumber}
                </div>
            </main>

        </div>
    )
}
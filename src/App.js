import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import "./style.css"

export default function App() {

    /**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */

const [dice, setDice] = React.useState(allNewDice())

function generateNewDice() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

    function allNewDice() {
        const newdiceArr = []
            for (let i = 0; i < 10; i++) {
                newdiceArr.push( generateNewDice() )
            }
            return newdiceArr
    }

    function rollDice(){
        setDice(prevDice => prevDice.map(dice => {
            return dice.isHeld ? dice
            : generateNewDice()
        }))
    }

    const dieNumber = dice.map(dice => <Die value={dice.value} key={dice.id} isHeld={dice.isHeld} id={dice.id} holdDice={()=>holdDice(dice.id)}/>)

    // function handleClick() {
    //     setDice(allNewDice())
    // }

    function holdDice(id) {
        console.log(id)
        setDice(prevDice => 
            prevDice.map(die => {
                return die.id === id ? 
                {...die, isHeld: !die.isHeld} 
                : die
            })
        )  
    }

    return (
        <div>
            <main>
                <div className="dice-container">
                {dieNumber}
                </div>
                <button onClick={rollDice}>Roll</button>
            </main>
        </div>
    )
}
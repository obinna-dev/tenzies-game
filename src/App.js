import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import "./style.css"

export default function App() {

const [dice, setDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)


/**
 * This useEffect functions as a use effect to chain the two states above
 * It checks the dice array for these winning conditions:
    *  1. All dice are held, and
    *  2. all dice have the same value
 * If both conditions are true, then it sets `tenzies` state to true and logs
 * "You won!" to the console
 */

React.useEffect(()=>{
   const everyDiceHeld = dice.every(dice => dice.isHeld)
   const everyDiceEqual = dice.every(dice => dice.value === dice.value)
   if (everyDiceHeld && everyDiceEqual) {
        setTenzies(true)
   }
    },[dice])

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
        if (!tenzies) {
            setDice(prevDice => prevDice.map(dice => {
            return dice.isHeld ? dice
            : generateNewDice()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
    }

    const dieNumber = dice.map(dice => <Die value={dice.value} key={dice.id} isHeld={dice.isHeld} id={dice.id} holdDice={()=>holdDice(dice.id)}/>)

    function holdDice(id) {
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
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. 
                <br/>Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {dieNumber}
                </div>
                {!tenzies ? <button onClick={rollDice}>Roll</button> 
                : <button className="new-game-btn" onClick={rollDice}>New Game</button>}
            </main>
        </div>
    )
    }
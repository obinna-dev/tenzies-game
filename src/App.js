import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import "./style.css"

export default function App() {

const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newdiceArr = []
            for (let i = 0; i < 10; i++) {
                newdiceArr.push(
                    {
                        value: Math.ceil(Math.random() * 6),
                        isHeld: false,
                        id: nanoid()
                    }
                    
                    )
            }
            return newdiceArr
    }

    const dieNumber = dice.map(dice => <Die value={dice.value} key={dice.id} isHeld={dice.isHeld} id={dice.id} holdDice={()=>holdDice(dice.id)}/>)

    function handleClick() {
        setDice(allNewDice())
    }

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
                <button onClick={handleClick}>Roll</button>
            </main>
        </div>
    )
}
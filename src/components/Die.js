export default function Die(props) {
    return  (
        <div className={!props.isHeld ? "die-face" : "die-face-held"} onClick={props.holdDice}>
            <h2 className={!props.isHeld ? "die-num" : "die-num-held"}>{props.value}</h2>
        </div>
    )
}
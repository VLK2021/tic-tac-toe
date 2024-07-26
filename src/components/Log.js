export default function Log({turns}) {


    return <ol id="log">{turns.length >0 && <span>Information:</span>}
        {turns.map(turn => (
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row}, {turn.square.col}
            </li>
        ))}
    </ol>
}
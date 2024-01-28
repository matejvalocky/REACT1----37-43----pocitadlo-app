import "./ResetButton.css"


const ResetButton = (props) => {
    return <button className="btn" onClick={props.reset}>
        Vynulovanie
    </button>
} 

export default ResetButton
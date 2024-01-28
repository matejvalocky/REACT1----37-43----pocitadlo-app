import "./IncreaseButton.css"

const IncreaseButton = (props) => {
  return <button className="btn" onClick={props.increase}>
        Zvýšiť o 1
    </button>
  
}

export default IncreaseButton
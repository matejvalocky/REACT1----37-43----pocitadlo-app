import "./DecreaseButton.css"


const DecreaseButton = (props) => {
  return <button className="btn" onClick={props.decrease}>
    Znížiť o 1
  </button>
}

export default DecreaseButton
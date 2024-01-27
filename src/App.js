import DecreaseButton from "./components/DecreaseButton"


const App = () => {
  const value = 0


  return <div>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton />
  </div>


}

export default App
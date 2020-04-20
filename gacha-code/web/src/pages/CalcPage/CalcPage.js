import NavbarLayout from "src/layouts/NavbarLayout/NavbarLayout"
import { useState, useEffect } from "react"

const CalcPage = () => {
  const [calcstate, setCalcstate] = useState({desire:0, draws:0, chance:0.00, compoundedChance:''})

  const probability = (100 * (1 - (Math.pow((1-(calcstate.chance/100)) , calcstate.draws / calcstate.desire)))).toFixed(2);

  useEffect(() => {
    const compoundedChance = probability;
    setCalcstate({...calcstate, compoundedChance: compoundedChance})}
    , [])


    const changeHandler = (e) => {
    setCalcstate({...calcstate, [e.target.name]: e.target.value})
  }

  return (
      <NavbarLayout>
        <form>
          <input name="desire" placeholder='Desired # of results' onChange={changeHandler}></input>
          <input name="draws" placeholder='# of total draws' onChange={changeHandler}></input>
          <input name="chance" placeholder='% chance of desired result' onChange={changeHandler}></input>
        </form>
        <h1>{["NaN", "Infinity", "-Infinity"].includes(probability.toString()) ? "Input numbers in all three fields to find out your odds!" : probability + "%"}</h1>      
      </NavbarLayout>
  )
}

export default CalcPage

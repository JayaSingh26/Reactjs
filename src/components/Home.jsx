import {  useState } from 'react'

const Home = () => {
  const [inputValue,setInputValue]= useState(0)
  
const increment= ()=>{
setInputValue(inputValue+1)
}


const decrement =()=>{
setInputValue(inputValue-1)
}

// useEffect(()=>{

//   console.log("Run");
  
// })


  return (
    <>
      <input 
      type="number" 
      placeholder='Enter Something' />
      <hr/>
      {/* onChange = {changeHandler} */}
      value = {inputValue}
      <hr/>

      <button onClick={decrement}>-</button>
      <hr/>
      <button onClick={increment}>+</button>

      
      
    </>
  )
}

export default Home
  // const changeHandler =(e)=>{
  //   inputValue = e.target.value
  //   console.log(inputValue);
  // }

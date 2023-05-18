import { React, useState, useEffect } from "react";
import Heading from "./Subcomponents/Heading";
import axios from "axios";

 function Counter(props) {
  var count = 0;
  const [counter, setCounter] = useState(0);
  // es6
  const increase = () => {
    // counter = counter + 1; we cant assign value like this
    setCounter(counter + 1);
    if(counter>5){
        callApis()
    }
  };
  const decrease = () => {
    // counter = counter - 1; we cant assign value like this
    setCounter(counter - 1);
    
  };
  const reset = () => {
    // counter = counter - 1; we cant assign value like this
    setCounter(0);
  };
  const callApis = () =>{
    axios.get("https://reqres.in/api/users").then((response)=>{
        console.log("response status",response.status)
        console.log("response data",response.data)

    })
  }

  // useEffect(() => {
  //     // axios.get(baseURL).then((response) => {
  //     //   // setPost(response.data);
  //     //   console.log("result",response.data)
  //     // });
  //     console.log("somethings changed")
  //   }, []);
//   useEffect(() => {
//     console.log("intial call");
//         axios.get("https://reqres.in/api/users").then((response)=>{
//             console.log("response status",response.status)
//             console.log("response data",response.data)

//         })
//   }, [counter]);


  // HOOKS
  // props
  // state
  return (
    <div>
      {/* <h1 className='center'>{props.heading}</h1> */}
      <Heading head={props.heading} />
      <span>{counter}</span>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={callApis}>Call Api</button>
      </div>
    </div>
  );
}
export default Counter;
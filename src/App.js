import "./App.css";
import Details from "./Components/Details.js";
import Counter from "./Components/Counter.js";
import Textform from "./Components/Textform.js";
import axios from "axios";
import { React, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
// fetch
function App() {
  // /
  let fullName1 = "Ravi Prakash";
  let fullName2 = "Sunil";
  let fullName3 = "Renu";
  let p1 = "p1";
  let p2 = "p2";
  let p3 = "p3";
  const Users = [
    {
      name: "Deepak",
      rollNo: "123",
    },
    {
      name: "Yash",
      rollNo: "124",
    },
    {
      name: "Raj",
      rollNo: "125",
    },
    {
      name: "Rohan",
      rollNo: "126",
    },
    {
      name: "Puneet",
      rollNo: "127",
    },
    {
      name: "Vivek",
      rollNo: "128",
    },
    {
      name: "Aman",
      rollNo: "129",
    },
  ];
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  // useEffect(() => {
  //   //   axios.get(baseURL).then((response) => {
  //   //     // setPost(response.data);
  //   //     console.log("result",response.data)
  //   //   });
  //   sessionStorage.setItem("Name", "Ravi Prakash");
  //   localStorage.setItem("Position", "Software Developer");
  // }, []);
  // console.log("initial call")
  //
  return (
    // props
    <div className="App">
      {/* <Details fullName = {fullName1} p = {p1}/>
     <Details fullName = {fullName2} p = {p2}/>
     <Details fullName = {fullName3} p = {p3}/> */}
      <Routes>
        <Route path="/" element={<Counter heading={fullName1} />} />
        <Route
          path="/details"
          element={<Details fullName={fullName3} p={p3} />}
        />
        {/* <Route path="/leads" element={<Leads />} /> */}
        {/* <Route path="/mail" element={<Mail />} /> */}
      </Routes>

      {/* <Counter heading = "Counter1"/> */}
      {Users.map((e) => {
        console.log(e.name);
        return (
          // fragment
          <>
            <h1>{e.name}</h1>

            <h1>{e.rollNo}</h1>
          </>
        );
      })}

      {/* {Users.forEach((element) => {
  return (
    <div>{element.na}<div/>
  )
})} */}

      {/* <Textform/> */}
    </div>
    // jsx
    // state
  );
}

export default App;
// typescript

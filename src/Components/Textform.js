import {React, useState} from 'react'

export default function Textform(){
    const [text,setText] = useState("Enter your Text")

    const handleUclick = ()=>{
        console.log("handleclick called")
        var changedValue = text.toUpperCase();
        setText(changedValue)
    }
    const handleLclick = ()=>{
        console.log("handleclick called")
        var changedValue = text.toLowerCase();
        setText(changedValue)
    }
    const handlechange = (event)=>{
        console.log("handlechange called")
        // var changedValue = text.toUpperCase();
        console.log(event.target.value)
        setText(event.target.value)
    }
return(
    <div>
        <h1>Form</h1>
        <textarea rows="8" value={text} onChange={handlechange}></textarea>
        <button onClick={handleUclick}>Convert to Uppercase</button>
        <button onClick={handleLclick}>Convert to Lowecase</button>
    </div>
)
}
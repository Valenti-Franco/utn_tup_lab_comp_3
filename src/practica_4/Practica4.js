import { useState } from "react";
import "./practica4.css";
import LogicGates from "./components/LogicGates";
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";
import Select from "./components/Select";
import Input3 from "./components/Input3";
import Input4 from "./components/Input4";



export default function Practica4 () {
    
    const [resultado, setResultado] = useState(null);
    const [input1, setInput1] = useState(Math.floor(Math.random() * 2));
    const [input2, setInput2] = useState(0)
    const [input3, setInput3] = useState(0)
    const [input4, setInput4] = useState(0)


    const [select, setSelect] = useState("or");
    
    return (
        <div className="App">
           
            <Input1 setInput1={setInput1} input1={input1} />                
            <Input2 setInput2={setInput2} /> 
            <Input3 setInput3={setInput3} input3={input3}  /> 
            <Input4 setInput4={setInput4} /> 
            <Select setSelect={setSelect} />       
            <LogicGates input3={input3} input4={input4}  input1={input1} input2={input2}  select={select} setResultado={setResultado} resultado={resultado} />     

        </div>
    );
}
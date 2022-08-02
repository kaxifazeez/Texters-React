import React,{useState} from "react";
import "../App.css";

export default function TextFrom(props) {
  const [text,changeText] =useState('');
 function changetoUpper()
 {
  let captalText = text.toUpperCase();
  changeText(captalText)
  props.alertChange("Change to Upper Case","success")
  
 }
 function changetoLower()
 {
  let smallText = text.toLowerCase();
  changeText(smallText)
  props.alertChange("Change to Lower Case","success")

 }
 function handleOnchange(event)
 {
  changeText(event.target.value)
 }
  return (<>
    <div className="container" style={{color: props.txtCol}}>
        <div>
            <h3 htmlFor="mybox" >{props.heading}</h3>
            <textarea className="textBox" placeholder="Enter text here" onChange={handleOnchange}
             style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.txtCol,borderWidth: '3px',borderColor: props.txtCol}} value={text} id="mybox" rows="7"></textarea>
        </div>
        <button  type="button" onClick={changetoUpper} className="btn btn-primary mx-2">Make Captal Letters</button>
        <button  type="button" onClick={changetoLower} className="btn btn-primary mx-2">Make Small Letters</button>
    </div>
    <div className="container" style={{color: props.txtCol}}>
     <h4>Text Summary</h4>
        <p>{text.split(" ").length} words , {text.length} characters</p> 
        <p>{0.008 * text.split(" ").length} Min to Read</p> 
     
    </div>
    </>
  );
}

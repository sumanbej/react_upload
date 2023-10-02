
import React , {useState}from 'react'

export default function Textbox(props) {

  const handleUpClick=()=>{

let newtext= text.toUpperCase();

setText(newtext);
  }

  const handleClClick=()=>{
   
    setText("");
      }
     
    
      const handleLowClick=()=>{
    
        let newtexte= text.toLowerCase();
        setText(newtexte);
          }

  const handleOnChange=()=>{
   
    setText(event.target.value);
      }

  const [text , setText]=useState("");
  return (
    <>
    <div className="mb-3" >
  <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#030a14':'white' , color: props.mode==='dark'?'white':'black'}} id="mybox" rows="6"></textarea>
</div>
<div className="button mx-3">
<button type="button" className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-2`} onClick={handleUpClick}>Convert Uppercase</button>
<button type="button" className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-2`} onClick={handleLowClick}>Convert Lowercase</button>
<button type="button" className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-2`} onClick={handleClClick}  >Clear Text</button>

</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
 <p>
 Your text has {text.split(" ").length-1} words and {text.length} characters.</p> 
 <h2>Summary</h2>
<p>{text}</p>
</div>


</>
  

  )
}

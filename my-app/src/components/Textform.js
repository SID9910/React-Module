import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick =() =>{

        // console.log("Handle was Clicked");
        let newtext =text.toUpperCase(); //text main updated state hogi
        setText(newtext);

        props.showalert("Converted to UpperCase" ,"success");
        
    
    }
    const handleLoClick =() =>{

        // console.log("Handle was Clicked");
        let newtext =text.toLowerCase(); //text main updated state hogi
        setText(newtext);
        props.showalert("Converted to LowerCase" ,"success");
        
    
    }
    const handleClearClick =() =>{

        let newtext ='';
        setText(newtext);
        props.showalert("Clear" ,"success");
        
    
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);  //event.target.value is se hum aab ka change ko dala sakte hai

    }

    const handleCopy =() =>{
      var text = document.getElementById("myBox");
      text.select(); //whole text select
      
      navigator.clipboard.writeText(text.value); //navigate kar dea pura copy text eek jagah
      props.showalert("Copied " ,"success");
    }
    
    const handleextraspace =() =>{
      let newtext =text.split(/[ ]+/);
         setText(newtext.join(" "));
         props.showalert("Removed Extra space" ,"success");
    }
    const [text, setText] = useState('');
  
  
  return (
<>
<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
<h1>{props.heading}</h1>
<div className="mb-3" >
 
  <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white',
color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3 " onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-3 " onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-3 " onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary " onClick={handleextraspace}> Remove Extra space</button>
</div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >

    <h2> Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read</p>

   <h3>Preview</h3>
   <p>{text.length>0?text:"Enter something to preview it here"}</p>

</div>
   </>
  )
}

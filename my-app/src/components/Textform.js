import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick =() =>{

        
        let newtext =text.toUpperCase(); //text main updated state hogi
        setText(newtext);

        props.showalert("Converted to UpperCase" ,"success");
        
    
    }
    const handleLoClick =() =>{

      
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
      
        setText(event.target.value);  //event.target.value is se hum aab ka change ko dala sakte hai

    }

    const handleCopy =() =>{
      var text = document.getElementById("myBox");
      
      
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
<h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3" >
 
  <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'rgb(76 100 103)':'white',
color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>

<button  disabled={text.length===0 } className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0 }  className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0 }  className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0 }  className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0 }  className="btn btn-primary " onClick={handleextraspace}> Remove Extra space</button>
</div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >

    <h2> Your Text Summary</h2>
    {/* is filter se hum blank kon count nhi kar rahe */}
    <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} Minutes to Read</p>

   <h3>Preview</h3>
   <p>{text.length>0?text:"Nothing to Preview !!"}</p>

</div>
   </>
  )
}

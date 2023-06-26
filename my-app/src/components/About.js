import React,{useState} from 'react'

export default function About(props) {
 
//  const[myStyles, setMyStyle] =useState({

//     color: 'black',
//     backgroundColor:'white'
    
//  })

let myStyles ={
color: props.mode ==='dark'?'white':'#333333',
backgroundColor: props.mode ==='dark'?'#333333':'white'
}

    return (
    <div className ="container" style={myStyles}>
        <h1 className="my-3">About us</h1>
<div className="accordion" id="accordionExample" style={myStyles}>
  <div className="accordion-item" style={myStyles}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your text</strong>  
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyles}>
        TextUtils gives you a way to Analyze your text quickly and effectively .Be it word count , character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyles}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyles}>
      TextUtils is a free character counter that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and character .Thus it is suitable for writing text with word/character limit.
</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyles}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
 <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyles}>
        This word counter software work in any web browser such as chrome ,firefox ,Internet Explorer ,safari ,Opera .It suits to count character in facebook,blog,books,excel document,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

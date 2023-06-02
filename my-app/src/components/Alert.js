import React from 'react'

export default function Alert(props) {
//first word capital kardegaw
    const capitalize =(word) =>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    // props.alert aaise is ley kara aagar ye null to chalega nhi aage kyuki and hai ye null nhi hua tyaab chalega aage
    props.alert && <>
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
 
</div>
    
    
    </>
  )
}

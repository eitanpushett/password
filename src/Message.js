import { useState } from "react";
import { useEffect } from "react";


function Message(props) {
    
    const {pass,checkPass,setDisabled} = props
    const [message, setMessage] = useState()
    
    useEffect(()=>{
        if(pass.length>6){
            setMessage("Strong")
            setDisabled(false)
        }
        else if(pass.length>2){
            setMessage("Medium")
            setDisabled(false)
        
        }
        else if(pass.length===0){
            setMessage("not detected")

        }
        else {
            setMessage("Weak")
            setDisabled(true)

        }



   },[checkPass,pass,setDisabled])

 

    return (
        <div>
            Password is {message}
        </div>
    )
  }
  
  export default Message;
  
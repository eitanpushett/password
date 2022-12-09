
import './App.css';
import { useState } from 'react';
import Message from './Message';



function App() {

const [pass, setPass] = useState("")
const [disable, setDisable] = useState(true)
function handlePass(event){
  setPass(String(event.target.value))
}




  return (
    <div className="input">
<p>
  
    <input type="password" value={pass} onChange={handlePass}></input>
    <button disabled={disable}>Submit</button>
<Message pass={pass} checkPass={handlePass} setPass={setPass} setDisabled = {setDisable}/>
</p>
</div>
  );
}

export default App;

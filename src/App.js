
import { useEffect, useState } from 'react';
import './App.css';
import Activity from './Activity';
import VideoBg from './mainScreen';


function App() {

  const [advice, setAdvice] = useState("");
  const [showAdvice, setShowAdvice] = useState("")
  

  useEffect(()=>{
    const FindAdvice = async () =>{
      const response = await fetch (`http://www.boredapi.com/api/activity/`);
      const data = await response.json();
      console.log(data.activity);
      setAdvice(data.activity)
    }
    FindAdvice()
  },[showAdvice])


function handleSubmit(e) {
  e.preventDefault();
  setShowAdvice(advice);
}

  return (
                                                                                                                                                                                                                                                                                                                   
    <div className='main'>
      
      <Activity oneProp={showAdvice} twoProp={handleSubmit}/>
      <VideoBg/>
      
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

function Activity(){
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
  return(
    <div className='main'>
            
      <div className='container'>
        <h1>Are you bored?</h1>
        <p>Press the button and get an idea of what to do!</p>
        
        <form onSubmit={handleSubmit}>
          <button>WHAT SHALL I DO TODAY?</button>
          <h2>{showAdvice}</h2>
        </form>
      </div>

    </div>
  )
}
export default Activity;
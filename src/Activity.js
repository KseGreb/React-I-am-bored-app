import { useState } from 'react';

function Activity(){
  const [advice, setAdvice] = useState("");
  // const [showAdvice, setShowAdvice] = useState("")
  
  const FindAdvice = async () =>{
    const response = await fetch (`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity)
  }

  // useEffect(()=>{
  //   FindAdvice()
  // },[])


// function handleSubmit(e) {
//   FindAdvice();
// }
  return(
    <div className='main'>
            
      <div className='container'>
        <h1>Are you bored?</h1>
        <p>Press the button and get an idea of what to do!</p>
        
        <div className='showResult'>
          <button onClick={()=>FindAdvice()}>WHAT SHALL I DO TODAY?</button>
          <h2>{advice}</h2>
        </div>
      </div>

    </div>
  )
}
export default Activity;

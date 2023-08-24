

function Activity({oneProp, twoProp}){
  return(
    <div className='main'>
            
      <div className='container'>
        <h1>Are you bored?</h1>
        <p>Press the button and get an idea of what to do!</p>
        
        <form onSubmit={twoProp}>
          <button>WHAT SHALL I DO TODAY?</button>
          <h2>{oneProp}</h2>
        </form>
      </div>

    </div>
  )
}
export default Activity;
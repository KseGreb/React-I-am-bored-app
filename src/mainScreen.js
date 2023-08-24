import video from "./video.mp4"

function VideoBg(){
  return(
    <div  className='main'>

      <video src={video} autoPlay loop muted  />

    </div>
  )
}
export default VideoBg;
import ReactPlayer from "react-player";
import {useState} from "react";


export default function VideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (<>
    <div className={`fixed top-0 mt-[-100px] left-0 w-full h-[200vh] z-[-1]  ${!isLoaded ? 'bg-main-dark' : ''}`}>
      <ReactPlayer
          url="/videos/first-background-edited.mp4"
          playing={true}
          loop={true}
          muted={true}
          width="100vw"
          height="120vh"
          controls={false}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload'
              }
            }
          }}
      />
    </div>
  </>)
}
import ReactPlayer from "react-player";
import {useState} from "react";


export default function VideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (<>
    <div className={`fixed top-0 left-0 "min-h-full min-w-[177vh] z-[-1] ${!isLoaded ? 'bg-main-dark' : ''}`}>
        <ReactPlayer
            url="/videos/first-background-edited.mp4"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            controls={false}
            onReady={() => setIsLoaded(true)}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload'
                }
              }
            }}
            onError={(error) => {
              console.error("ERROR react player: " + error)
              setIsLoaded(false)
            }}
        />
    </div>
  </>)
}
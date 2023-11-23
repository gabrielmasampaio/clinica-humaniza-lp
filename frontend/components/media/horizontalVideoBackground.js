import ReactPlayer from "react-player";
import {useState} from "react";
import {useResponsive} from "../providers/context";


export default function HorizontalVideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { screenWidth } = useResponsive();

  return (<>
    <div className={`fixed top-0 left-0 z-[-1]  ${!isLoaded ? 'bg-main-dark' : ''}`} style={{ width: screenWidth+"px" }}>
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
import ReactPlayer from "react-player";


export default function VideoBackground() {
  return (
      <div className="fixed top-0 mt-[-100px] left-0 w-full h-full z-[-1]">
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
  )
}
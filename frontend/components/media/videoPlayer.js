import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import {Skeleton} from "@nextui-org/react";

export default function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
      <div>
        <Skeleton isLoaded={isLoaded} className="rounded-lg max-h-[78vh] max-w-[400px]">
          <ReactPlayer
              height="auto"
              width="auto"
              url="/videos/apneia.mp4"
              controls
              loop={true}
              playing={true}
              muted={true}
              onReady={() => setIsLoaded(true)}
          />
        </Skeleton>
      </div>
  );
}
import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import {Skeleton} from "@nextui-org/react";
import {useResponsive} from "../providers/context";

export default function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isVertical, screenHeight } = useResponsive();
  return (
      <div>
        <Skeleton isLoaded={isLoaded} className={`rounded-lg m-auto ${isVertical ? `h-[${screenHeight}px]` : 'w-[50%]'} max-h-[80vh] ${!isLoaded ? ' bg-gray-500' : ''}`}>
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
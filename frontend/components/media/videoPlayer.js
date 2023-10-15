import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  return (
      <div className="pl-[]">
        <ReactPlayer
            height="78vh"
            width="auto"
            url="/videos/niagaraFalls.mp4"
            controls
            loop={true}
            playing={true}
            muted={true}
        />
      </div>
  );
}
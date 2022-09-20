import React, { useState } from "react";
import { FaPauseCircle } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidref = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };
  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidref}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo ? (
            <FaPauseCircle color='#fff' fontSize={30} />
          ) : (
            <AiFillPlayCircle color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

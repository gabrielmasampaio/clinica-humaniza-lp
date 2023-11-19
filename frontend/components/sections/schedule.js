import ScheduleForm from "../forms/scheduleForm";
import dynamic from 'next/dynamic';
import RedirectIcons from "../media/redirectIcons";
import {Image} from "@nextui-org/react";

const DynamicVideoPlayer = dynamic(() => import('../media/videoPlayer'), {
  ssr: false, // Disable server-side rendering for this component
});




export default function Schedule(){

  return (
      <div className="flex flex-col justify-between min-h-[100vh] ">
        <div>
          <Image className="max-w-[10vw]" src='/images/white-text-logo.png' width="auto" height="auto" alt="logo"  />
        </div>
        <div className="flex flex-col h-[75%] w-full justify-center items-center">
          <div className="w-full flex flex-grow flex-row items-center">
            <div className="flex w-1/2 justify-center">
              <DynamicVideoPlayer />
            </div>
            <div className="flex w-1/2 justify-center items-center">
              <ScheduleForm />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RedirectIcons />
        </div>
      </div>
  )
}
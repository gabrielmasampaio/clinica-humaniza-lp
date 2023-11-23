import ScheduleForm from "../forms/scheduleForm";
import dynamic from 'next/dynamic';
import RedirectIcons from "../media/redirectIcons";
import {Image} from "@nextui-org/react";
import {useResponsive} from "../providers/context";

const DynamicVideoPlayer = dynamic(() => import('../media/videoPlayer'), {
  ssr: false, // Disable server-side rendering for this component
});


export default function Schedule(){
  const { isVertical } = useResponsive();

  return (
      <div className="flex flex-col justify-between min-h-[100vh]">
        <div className={"w-full flex flex-grow h-[75%] justify-center " + ((isVertical) ? "flex-col" : "flex-row")}>
          <Image hidden={!isVertical} className={"mt-[-15%] mb-[-30%] "} src='/images/white-text-logo.png' width="auto" height="auto" alt="logo"  />
          <div className={"flex justify-center  " + ((isVertical) ? "pt-12 " : "pt-20 w-1/2 ")}>
            <DynamicVideoPlayer />
          </div>
          <div id="top" className={"flex flex-col min-h-full items-center " + ((isVertical) ? "my-10" : " mt-20  w-1/2 ")}>
            <Image hidden={isVertical} className={"max-w-[20vw]"} src='/images/white-text-logo.png' width="auto" height="auto" alt="logo"  />
            <ScheduleForm />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RedirectIcons />
        </div>
      </div>
  )
}
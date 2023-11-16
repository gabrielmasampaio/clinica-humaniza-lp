import ScheduleForm from "../forms/scheduleForm";
import dynamic from 'next/dynamic';
import RedirectIcons from "../media/redirectIcons";

const DynamicVideoPlayer = dynamic(() => import('../media/videoPlayer'), {
  ssr: false, // Disable server-side rendering for this component
});




export default function Schedule(){

  return (
      <div className="flex flex-col min-h-[80vh] w-full justify-center items-center">
        <div className="w-full flex flex-grow flex-row items-center">
          <div className="flex w-1/2 justify-center">
            <DynamicVideoPlayer />
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <ScheduleForm />
          </div>
        </div>
        <RedirectIcons />
      </div>
  )
}
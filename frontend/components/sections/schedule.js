import {Tooltip} from "@nextui-org/react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import ScheduleForm from "../forms/scheduleForm";
import dynamic from 'next/dynamic';

const DynamicVideoPlayer = dynamic(() => import('../media/videoPlayer'), {
  ssr: false, // Disable server-side rendering for this component
});


export default function Schedule(){

  return (
      <div className="flex flex-col min-h-[80vh] w-full justify-center items-center">
        <div className="w-full flex flex-grow flex-row items-center">
          <div className="flex w-1/2 justify-center">
            <DynamicVideoPlayer/>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <ScheduleForm />
          </div>
        </div>
        <div className="mt-3 flex flex-row justify-center w-1/4 text-2xl">
          <Tooltip color="foreground" placement="top" content="Website" size="sm" delay={100} closeDelay={100}>
            <Link className="hover:no-underline text-white mx-3" href='/'>
              <FontAwesomeIcon icon={faGlobe} bounce />
            </Link>
          </Tooltip>
          <Tooltip color="foreground" placement="top" content="Instagram" size="sm" delay={100} closeDelay={100}>
            <Link className="hover:no-underline text-white mx-3" target="_blank" href='https://www.instagram.com/humaniza_odontologia/'>
              <FontAwesomeIcon icon={faInstagram} bounce />
            </Link>
          </Tooltip>
        </div>
      </div>
  )
}
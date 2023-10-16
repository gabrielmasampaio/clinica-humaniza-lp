import {Tooltip} from "@nextui-org/react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function RedirectIcons(){

  const tooltipContent = (text) => {
    return <span>
        {text} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </span>
  }

  return (
      <>
        <div className="mt-3 flex flex-row justify-center w-1/4 text-2xl">
          <Tooltip color="foreground" placement="top"  content={tooltipContent("Website")} size="sm" delay={100} closeDelay={100}>
            <Link className="hover:no-underline text-white mx-3" href='/'>
              <FontAwesomeIcon icon={faGlobe} bounce />
            </Link>
          </Tooltip>
          <Tooltip color="foreground" placement="top" content={tooltipContent("Instagram")} size="sm" delay={100} closeDelay={100}>
            <Link className="hover:no-underline text-white mx-3" target="_blank" href='https://www.instagram.com/humaniza_odontologia/'>
              <FontAwesomeIcon icon={faInstagram} bounce />
            </Link>
          </Tooltip>
        </div>
      </>
  )
}
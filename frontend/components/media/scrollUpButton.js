import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {Button, Tooltip} from "@nextui-org/react";


export default function ScrollUpButton() {

  return (
      <>
        <Tooltip color="foreground" placement="top"  content={"Faça seu agendamento"} size="sm" delay={100} closeDelay={100} >
          <Button size="sm" onClick={() => window.scrollTo({top: document.getElementById("top").offsetTop, behavior: 'smooth'})}
                  href="#top" className="fixed bottom-4 right-4 cursor-pointer">
            <FontAwesomeIcon icon={faArrowUp}/>
          </Button>
        </Tooltip>
      </>
  )
}
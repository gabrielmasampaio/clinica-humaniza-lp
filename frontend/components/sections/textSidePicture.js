import TextCard from "../media/textCard";
import {Image} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAward} from "@fortawesome/free-solid-svg-icons";
import {useResponsive} from "../providers/context";

export default function TextSidePicture(){
  const { isVertical } = useResponsive();

  const accoladesBodyText = () => {
    const accolades = "  Graduado em Odontologia pela Universidade de Uberaba;         Especialista em Cirurgia e Traumatologia Bucomaxilofacial;          Especialista em Implantodontia;          Pós Graduação em cirurgia ortognática;          Pós Graduação em cirurgia da ATM;          Pós Graduação em Artroscopia da ATM;          Pós Graduação em Cirurgia Plástica periodontal;          Pós graduado em Harmonização oro facial."
    const accoladesArray = accolades.split(';').map(accolade => accolade.trim());

    return(
        <div className="text-xl flex-col justify-between" >
          {accoladesArray.map((accolade, index)  => {
            return <div key={index} className="mb-3 mx-5"> <FontAwesomeIcon icon={faAward} className="mr-2 text-company-yellow" />{accolade}</div>
          })}
        </div>
    )
  }

  const accoladesFooterText = () => {
    return (
        <div className="text-sm px-8">
          <p>Dr. Fabrício Magalhães Guimarães</p>
          <div> Esp.: Cirurgia Buco Maxilo Facial, Esp.: Implantodontia Oral </div>
        </div>
    )
  }

  return (
      <div className="flex flex-col min-h-full min-w-full">
        <div className={"min-w-full min-h-full flex justify-end items-center " + ((isVertical) ? " flex-col p-4" : "")}>
          <div className="flex justify-center items-center min-w-[65%]">
            <TextCard bodyText={accoladesBodyText()} footerText={accoladesFooterText()}/>
          </div>
          <div className={((isVertical) ? "" : "max-w-[35%] ")}>
            <Image src="/images/final-image.jpg" height="auto" />
          </div>
        </div>
      </div>
  )
}
import TextCard from "../media/textCard";
import {comparisonPageText} from "../../lib/texts";

export default function Comparison(){

  const formattedText = comparisonPageText().split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
  ));

   return (
      <div className="flex flex-col min-h-[100vh]">
        <div className="w-full flex flex-grow flex-row items-center">
          <div className="flex w-[55%] justify-center ml-8">
            <TextCard text={formattedText}/>
          </div>
          <div className="flex flex-col  w-[45%] justify-evenly min-h-[100vh] items-center">
            <TextCard text="image 1"/>
            <TextCard text="image 2"/>
          </div>
        </div>
      </div>
  )
}
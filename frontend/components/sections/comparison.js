import TextCard from "../media/textCard";
import {comparisonPageText} from "../../lib/texts";
import ReactCompareImage from "react-compare-image";

export default function Comparison(){

  const formattedText = comparisonPageText().split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
  ));

   return (
      <div className="flex flex-col min-h-[100vh]">
        <div className="w-full flex flex-grow flex-row items-center justify-evenly">
          <div className="flex w-[55%] justify-center ml-8">
            <TextCard text={formattedText}/>
          </div>
          <div className="flex flex-col  w-[30%] justify-evenly min-h-[100vh] items-center">
            <div></div>
            <ReactCompareImage  leftImage="images/teeth-before.jpeg" rightImage="images/teeth-after.jpeg" />
            <ReactCompareImage  leftImage="images/teeth-before.jpeg" rightImage="images/teeth-after.jpeg" />
          </div>
        </div>
      </div>
  )
}
import TextCard from "../media/textCard";
import {comparisonPageText} from "../../lib/texts";
import ReactCompareImage from "react-compare-image";

export default function Comparison(){

  const formattedText = comparisonPageText().split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
  ));

   return (
      <div className="min-h-[100vh]">
        <div className="flex flex-grow flex-row items-center justify-evenly">
          <div className="flex w-3/5 justify-center ml-8">
            <TextCard className="text-[1vw]" bodyText={formattedText}/>
          </div>
          <div className="flex flex-col  justify-center items-center w-2/5 min-h-[100vh]">
            <div className="w-1/2">
              <ReactCompareImage sliderLineColor="black"  leftImage="images/sideView-before.JPG" rightImage="images/sideView-after.JPG" />
            </div>
            <div className="w-1/2">
              <ReactCompareImage leftImage="images/frontView-before.JPG" rightImage="images/frontView-after.JPG" />
            </div>
          </div>
        </div>
      </div>
  )
}
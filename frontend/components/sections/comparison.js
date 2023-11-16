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
          <div className="flex w-[60%] justify-center ml-8">
            <TextCard bodyText={formattedText}/>
          </div>
          <div className="flex flex-col w-[25%] justify-evenly p-10 min-h-[100vh] items-center">
            <div className="flex mt-10 flex-col w-[360px] h-[100vh]">
              <ReactCompareImage sliderLineColor="black"  leftImage="images/sideView-before.JPG" rightImage="images/sideView-after.JPG" />
              <ReactCompareImage leftImage="images/frontView-before.JPG" rightImage="images/frontView-after.JPG" />
            </div>
          </div>
        </div>
      </div>
  )
}
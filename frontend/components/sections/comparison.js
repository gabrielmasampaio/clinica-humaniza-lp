import TextCard from "../media/textCard";
import {comparisonPageText} from "../../lib/texts";
import ReactCompareImage from "react-compare-image";
import {useResponsive} from "../providers/context";

export default function Comparison(){

  const formattedText = comparisonPageText().split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
  ));
  const { isVertical } = useResponsive();

   return (
      <div className="min-h-[100vh]">
        <div className={"flex flex-grow  items-center justify-evenly " + ((isVertical) ? "flex-col" : "flex-row")}>
          <div className={"flex justify-center " + ((isVertical) ? "" : "ml-8 w-3/5")}>
            <TextCard className="text-[1vw]" bodyText={formattedText}/>
          </div>
          <div className={"flex flex-col justify-center items-center min-h-[100vh] " +  ((isVertical) ? " w-[100%]" : " w-2/5")}>
            <div className={((isVertical) ? "mt-4 w-[100%]" : " w-1/2")}>
              <ReactCompareImage sliderLineColor="black"  leftImage="images/sideView-before.JPG" rightImage="images/sideView-after.JPG" />
            </div>
            <div className={((isVertical) ? "w-[100%]" : " w-1/2")}>
              <ReactCompareImage leftImage="images/frontView-before.JPG" rightImage="images/frontView-after.JPG" />
            </div>
          </div>
        </div>
      </div>
  )
}
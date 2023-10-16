import {textsForTextGrid} from "../../lib/texts"
import TextCard from "../media/textCard";
export default function TextGrid(){
  const {titleText} = textsForTextGrid;

  // Array to store the extracted text values
  const extractedTexts = [];

// Iterate through the properties of the object
  for (const key in textsForTextGrid) {
    // Check if the property has a numeric name (excluding "titleText")
    if (!isNaN(key) && key !== "titleText") {
      extractedTexts.push(textsForTextGrid[key]);
    }
  }

  return (
      <div className="flex flex-col min-h-[100vh] mt-5">
        <div className="justify-center items-center text-center min-h-[100px] text-2xl">
          {titleText}
        </div>
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-3">
          {extractedTexts.map((text, index) => (
              <div key={index} className="flex-1">
                <TextCard text={text} />
              </div>
          ))}
        </div>
      </div>
  )
}
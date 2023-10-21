import TextCard from "../media/textCard";
import {Image} from "@nextui-org/react";

export default function TextSidePicture(){

  const comparisonPageText = "This is the text side picture text page which is the last page and is the page where we will have a text on this left side and a image on the right side, also we will have a image as a background of this part where we have the text This is the text side picture text page which is the last page and is the page where we will have a text on this left side and a image on the right side, also we will have a image as a background of this part where we have the text This is the text side picture text page which is the last page and is the page where we will have a text on this left side and a image on the right side, also we will have a image as a background of this part where we have the text"

  return (
      <div className="flex flex-col min-h-[100vh]">
        <div className="w-full flex flex-grow flex-row items-center">
          <div className="flex flex-col min-h-[100vh] w-[65%] justify-start pt-[10%] px-20">
            <div className="mb-[14%] text-center" > Title </div>
            <TextCard text={comparisonPageText}/>
          </div>
          <div className="flex flex-col w-[35%] justify-evenly min-h-[100vh] items-center">
            <Image src="/images/placeholder.png" />
          </div>
        </div>
      </div>
  )
}
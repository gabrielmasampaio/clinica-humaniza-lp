import {answers, questions} from "../../lib/texts"
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function TextGrid(){
  const titleText = "Perguntas Frequentes";

  const extractedQuestions = [];
  const extractedAnswers = [];

  for (const key in questions) {
    if (!isNaN(key)) {
      extractedQuestions.push(questions[key]);
      extractedAnswers.push(answers[key]);
    }
  }

  return (
      <div className="flex flex-col min-h-[100vh] min-w-full py-10">
        <div className="text-center text-2xl">
          {titleText}
        </div>
        <div className="w-full h-full flex flex-grow justify-center items-center">
          <div className="w-[100%] max-w-screen-2xl">
            <Accordion variant="splitted" >
              {extractedQuestions.map((question, index) => (
                <AccordionItem className="bg-main-dark"  key={index} aria-label={`question ${index}`}  title={<div className="text-white">{question}</div>}>
                  {extractedAnswers[index]}
                </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
  )
}
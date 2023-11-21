import {answers, questions} from "../../lib/texts"
import TextCard from "../media/textCard";
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
      <div className="flex flex-col min-h-[100vh] justify-evenly">
        <div className="text-center text-2xl">
          {titleText}
        </div>
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-3 text-sm">
          {extractedQuestions.map((question, index) => (
              <div key={index} className="flex-1">
                <TextCard headerText={question} bodyText={extractedAnswers[index]} />
              </div>
          ))}
        </div>
      </div>
  )
}
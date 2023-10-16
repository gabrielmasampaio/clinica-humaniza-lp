import {Card, CardBody} from "@nextui-org/react";


export default function TextCard({text}){


  return(
      <>
        <Card shadow="sm" className="bg-[#003366] text-gray-200 h-[100%]">
          <CardBody className="text-justify">{text}</CardBody>
        </Card>
      </>
  )
}
import {Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";


export default function TextCard({headerText, bodyText, footerText}){


  return(
      <>
        <Card shadow="sm" className="bg-[#003366] text-gray-200 h-[100%]">
          {headerText &&
              <>
                <CardHeader className="uppercase"> {headerText}</CardHeader>
              </>
          }
          <CardBody className="text-justify">{bodyText}</CardBody>
          {footerText &&
              <>
                <Divider className="bg-[#002851]" />
                <CardFooter>
                  {footerText}
                </CardFooter>
              </>
          }
        </Card>
      </>
  )
}
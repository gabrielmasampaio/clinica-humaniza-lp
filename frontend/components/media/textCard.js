import {Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";


export default function TextCard({headerText, bodyText, footerText, className}){


  return(
      <div className={className}>
        <Card shadow="sm" className="bg-main-dark text-gray-200 text-lg h-[100%]">
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
      </div>
  )
}
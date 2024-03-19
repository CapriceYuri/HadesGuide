import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import { outerResources } from "../Data/Outer_Resources";

export default function MainContent() {
  function authorLabel(arr, arr2) {
    if (arr.length > 0) {
      return arr.map((author, index) => (
        <Tooltip key={index} content={author}>
          <Avatar src={arr2[index]} size="md" />
        </Tooltip>
      ));
    } else {
      return null;
    }
  }

  return (
    <section className="max-w-[1800px] 2xl:mx-auto my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-2">
      {outerResources.map((obj, index) => (
        <Card className="max-w-[400px]" key={index}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-lg"
          >
            <img
              src={`/Cover/${obj.cover}`}
              alt="ui/ux review check"
              className="object-cover"
            />
          </CardHeader>
          <CardBody className="p-3">
            <Typography
              color="blue-gray"
              className="font-customFont font-bold text-center"
            >
              {obj.title}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="mt-3 font-customFont"
            >
              {obj.summary}
            </Typography>
          </CardBody>
          <CardFooter className="py-1 px-2 flex flex-col gap-y-2">
            <span className="my-1">
              <Button>
                <a href={obj.src} target="_blank" alt={`Hades: ${obj.title}`}>
                  Learn More
                </a>
              </Button>
            </span>
            <div className="flex justify-between items-center">
              <div className="flex items-center -space-x-4">
                {authorLabel(obj.author, obj.author_img)}
              </div>
              <Typography variant="small" className="font-customFont text-end">
                {obj.date}
              </Typography>
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

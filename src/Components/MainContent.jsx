import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
  Chip,
} from "@material-tailwind/react";

import { outerResources } from "../Data/Outer_Resources";

export default function MainContent() {
  function authorLabel(arr) {
    if (arr.length > 0) {
      return arr.map((author, index) => (
        <Tooltip key={index} content={author} className="font-customFont">
          <Avatar
            src={`/Author/${arr[index]}.png`}
            size="md"
            className="border-2 border-black"
          />
        </Tooltip>
      ));
    } else {
      return null;
    }
  }

  return (
    <section className="max-w-[1800px] 2xl:mx-auto my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8 lg:px-8">
      {outerResources.map((obj, index) => (
        <Card
          className="max-w-[400px] flex flex-col justify-between bg-[#28282b] shadow-[inset_0_0_50px_black] border-[2px] border-[#28282b]"
          key={index}
          shadow={false}
        >
          <CardHeader floated={false} shadow={false}>
            <img
              src={
                obj.purpose === `Speedrun Guide`
                  ? `/Cover/hermes.png`
                  : obj.format === `video`
                  ? `/Cover/hades-vid.png`
                  : obj.format === `video`
                  ? `/Cover/arms.png`
                  : `/Cover/${obj.cover}`
              }
              alt={`${obj.cover}`}
              className="object-cover object-center h-[240px] min-h-[200px]"
            />
          </CardHeader>
          <CardBody className="p-3">
            <Typography
              color="light-blue"
              className="font-customFont font-bold text-center"
            >
              {obj.title}
            </Typography>
            <Typography
              variant="small"
              color="white"
              className="mt-3 font-customFont"
            >
              {obj.purpose === undefined
                ? obj.summary
                : `The following is a Hades ${obj.purpose} on ${obj.details}.`}
            </Typography>
          </CardBody>
          <CardFooter className="py-1 px-2 flex flex-col gap-y-2">
            <span className="my-1 flex items-center">
              <Button variant="fill" className="border-[1px] border-white">
                <a
                  href={obj.src}
                  target="_blank"
                  alt={`Hades: ${obj.title}`}
                  className="text-[10px]"
                >
                  Learn More
                </a>
              </Button>
              {obj.format === "video" && (
                <Chip
                  value="Video"
                  variant="filled"
                  className="ms-2"
                  color="blue"
                />
              )}
              {obj.heat !== undefined && (
                <Chip
                  value="Heat"
                  variant="filled"
                  className="ms-2 font-[black]"
                  color="red"
                />
              )}
            </span>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center -space-x-4">
                {authorLabel(obj.author)}
              </div>
              <Typography
                variant="small"
                className="font-customFont text-end"
                color="white"
              >
                {obj.date}
              </Typography>
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { FullZipData } from "../Data/ZipData";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export const DownloadZip = () => {
  const handleDownload = (id) => {
    const zipFilePath = `/Files/${id}.zip`;
    const anchor = document.createElement("a");
    anchor.href = zipFilePath;
    anchor.download = `${id}.zip`;
    anchor.click();
  };

  return (
    <section className="max-w-[1800px] mx-auto my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:px-8">
      {FullZipData.map((obj) => (
        <Card
          color="gray"
          variant="gradient"
          className="px-4 py-6 mx-2 my-4 border-[1px] border-[#28282b]"
          key={obj.id}
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-6 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-customFont uppercase"
            >
              {obj.type}
            </Typography>
            <Typography
              variant="h2"
              color="deep-orange"
              className="font-customFont uppercase"
            >
              {obj.title}
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography
                  variant=""
                  className="font-customFont"
                  color="amber"
                >
                  <span className="text-[white]">Location: </span>
                </Typography>
                <Typography
                  variant="h5"
                  className="font-customFont"
                  color="amber"
                >
                  {obj.location}
                </Typography>
              </li>

              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography
                  variant=""
                  className="font-customFont"
                  color="amber"
                >
                  <span className="text-[white]">Health: </span>
                </Typography>
                <Typography
                  variant="h5"
                  className="font-customFont"
                  color="amber"
                >
                  {`${obj.health}`}
                </Typography>
              </li>

              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography
                  variant=""
                  className="font-customFont"
                  color="amber"
                >
                  <span className="text-[white]">Minutes: </span>
                </Typography>
                <Typography
                  variant="h5"
                  className="font-customFont"
                  color="amber"
                >
                  {`+${obj.time}`}
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-4 p-0 text-center">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={false}
              onClick={() => handleDownload(obj.id)}
            >
              Download
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

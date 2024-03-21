import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
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
const speedrunContent = outerResources.filter(
  (obj) => obj.purpose === "Speedrun"
);

const guideContent = outerResources.filter((obj) => obj.purpose === "Guide");

export default function MainContent() {
  function authorLabel(arr) {
    if (arr.length > 0 && arr.length < 3) {
      return arr.map((author, index) => (
        <Tooltip key={index} content={author} className="font-customFont">
          <Avatar
            src={`/Author/${arr[index]}.png`}
            size="sm"
            className="border-2 border-black"
          />
        </Tooltip>
      ));
    } else {
      return arr.map((author, index) => (
        <Tooltip key={index} content={author} className="font-customFont">
          <Avatar
            src={`/Author/${arr[index]}.png`}
            size="sm"
            className="border-2 border-black"
          />
        </Tooltip>
      ));
    }
  }
  const data = [
    {
      label: "All",
      value: "all",
      icon: "all.png",
      object: outerResources,
    },
    {
      label: "Speedrun",
      value: "speedrun",
      icon: "speedrun.png",
      object: speedrunContent,
    },
    {
      label: "Infernal",
      value: "infernal",
      icon: "hammer.png",
      object: guideContent,
    },
  ];

  return (
    <Tabs value="all">
      <TabsHeader
        className="my-8 mx-4 sm:mx-auto max-w-[600px] bg-transparent border-none border-white"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-blue-400 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="text-white font-customFont">
            <div className="flex items-center gap-1">
              <Avatar src={icon} size="sm" variant="rounded" />
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, object }) => (
          <TabPanel key={value} value={value}>
            <section className="max-w-[1800px] 2xl:mx-auto my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-8 lg:px-8">
              {object.map((obj, index) => (
                <Card
                  className="max-w-[400px] flex flex-col justify-between bg-[#2d2d4a] shadow-[inset_0_0_30px_black] border-2 border-[black]"
                  key={index}
                  shadow={false}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="bg-transparent mx-auto"
                  >
                    <Avatar
                      src={
                        obj.purpose === `Speedrun`
                          ? `/Cover/speedrun.png`
                          : obj.weapon !== undefined
                          ? `/Cover/arms.png`
                          : `/Cover/placeholder.png`
                      }
                      variant="rounded"
                      size="xl"
                      alt={`${obj.cover}`}
                      className="object-cover"
                    />
                  </CardHeader>
                  <CardBody className="p-3">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-customFont font-bold text-center"
                    >
                      {obj.purpose}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="amber"
                      className="font-customFont font-bold text-center"
                    >
                      {obj.details}
                    </Typography>
                  </CardBody>
                  <CardFooter className="p-4 flex flex-col gap-y-2">
                    <div>
                      <div className="flex justify-center -space-x-4">
                        {authorLabel(obj.author)}
                      </div>
                    </div>
                    <span className="my-1 flex items-center">
                      <Button
                        variant="fill"
                        className="border-[1px] border-white"
                      >
                        <a
                          href={obj.src}
                          target="_blank"
                          alt={`Hades: ${obj.aspect}`}
                          className="text-[10px]"
                        >
                          Read
                        </a>
                      </Button>
                      <Chip
                        value={obj.format}
                        variant="filled"
                        className="text-[8px] ms-2 rounded-lg"
                        color={obj.format === `video` ? "yellow" : "blue"}
                      />
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </section>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

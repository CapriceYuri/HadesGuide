import {
  Card,
  Typography,
  Button,
  CardBody,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import { FullZipData } from "../Data/ZipData";

const TABLE_HEAD = ["Player", "Type", "Status", "Save File", "Date"];

export function DownloadZip() {
  const handleDownload = (id) => {
    const zipFilePath = `/Files/${id}.zip`;
    const anchor = document.createElement("a");
    anchor.href = zipFilePath;
    anchor.download = `${id}.zip`;
    anchor.click();
  };

  return (
    <Card className="mx-10 my-8 bg-[#2d2d4a] ">
      <CardBody className="overflow-auto px-0 py-0 rounded-xl">
        <table className="w-full min-w-max table-auto text-left rounded-xl">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-blue-gray-100 border-b px-4 py-4"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal leading-none font-customFont"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FullZipData.map((obj, index) => {
              const isLast = index === FullZipData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={obj.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={obj.img}
                        alt={obj.img}
                        size="md"
                        className="object-cover p-1"
                      />
                      <Typography
                        variant="small"
                        color="white"
                        className="font-customFont"
                      >
                        {obj.provider}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-customFont"
                    >
                      {obj.type}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content={obj.location} className="font-customFont">
                      <Avatar src={`/Cover/${obj.location}-icon.png`} />
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Button
                      onClick={() => handleDownload(obj.id)}
                      variant="gradient"
                      className="font-customFont"
                    >
                      Download
                    </Button>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-customFont"
                    >
                      {obj.date}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

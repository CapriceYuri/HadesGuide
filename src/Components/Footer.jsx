import { Typography, Avatar } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Resources",
    links: ["Speedrunning", "Speedrun SRC"],
    src: ["https://discord.gg/sCefJUdbJp", "https://www.speedrun.com/hades"],
    icons: ["icon-discord", "icon-src"],
  },
  {
    title: "Submission",
    links: ["Submit Run", "Sub-6 SS"],
    src: [
      "https://docs.google.com/spreadsheets/d/1rrTgSkRSIOcc20wU56w21DDPlRQO6Tso2av3vdiJd9M/edit?usp=sharing",
      "https://docs.google.com/spreadsheets/d/1d56DvDTE8WvQsMRQFs1pLbNpMBHy2CLYss69EL-8bMU/edit#gid=850231511",
    ],
    icons: ["icon-submit", "icon-data"],
  },
];

export default function PageFooter() {
  return (
    <footer className="relative w-full bg-black">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-2 gap-8 py-4 md:grid-cols-2 text-center">
          {SITEMAP.map(({ title, links, src, icons }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="h6"
                color="orange"
                className="mb-4 font-bold uppercase opacity-80 font-customFont"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="white"
                    className="font-customFont"
                  >
                    <Avatar
                      src={`${icons[key]}.png`}
                      size="xs"
                      className="me-2"
                    ></Avatar>
                    <a
                      href={src[key]}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

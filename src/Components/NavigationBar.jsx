import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 items-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-customFont"
        color="orange"
      >
        <a
          href="https://hades2-heat-run.vercel.app/"
          className="flex items-center hover:text-red-500"
        >
          Heat 2 Leaderboard
        </a>
      </Typography>
      <Typography as="li" variant="h6" className="p-1 font-customFont">
        <a
          href="https://hades-heat-runs.vercel.app/"
          className="flex items-center hover:text-red-500"
        >
          Heat Leaderboard
        </a>
      </Typography>
      <Typography as="li" variant="h6" className="p-1 font-customFont">
        <a
          href="https://hades-sub6-runs.vercel.app/"
          className="flex items-center hover:text-red-500"
        >
          Sub-6 Leaderboard
        </a>
      </Typography>
      <Typography as="li" variant="h6" className="p-1 font-customFont">
        <a
          href="https://hades-guide.vercel.app/"
          className="flex items-center hover:text-red-500"
        >
          Resources
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px]">
      <Navbar className="bg-black h-max max-w-full border-0 px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-center text-white w-full">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </div>
  );
}

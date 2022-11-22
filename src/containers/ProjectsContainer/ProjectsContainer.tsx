import { Tooltip } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { IconFigma, IconGithub, IconWeb } from "../../components/atoms/icons";
import { projects } from "../../projects";

const sitesIcon = [
  {
    Icon: IconFigma,
    site: "figma",
  },
  {
    Icon: IconWeb,
    site: "web",
  },
  {
    Icon: IconGithub,
    site: "github",
  },
];

const ProjectsContainer = () => {
  const { t, i18n } = useTranslation("index");
  return (
    <div className="text-white py-20 lg:py-32 grid gap-10 h-full xl:gap-16">
      <h1 className="text-center lg:text-5xl 2xl:text-6xl">
        {t("projects.title")}
      </h1>
      <div className="w-10/12 m-auto grid gap-10 max-w-md lg:max-w-2xl 2xl:max-w-3xl 2xl:gap-20">
        {projects.map(({ image_url, links, description, title }, index) => {
          return (
            <div key={index} className="grid gap-6 lg:flex lg:gap-12">
              <div className="rounded-md justify-self-center h-fit  w-7/12 overflow-hidden h-full self-center lg:w-6/12">
                <img src={image_url}  alt="" />
              </div>
              <div className="grid gap-6 h-fit xl:gap-8 lg:w-5/12">
                <h2 className="text-center text-xl lg:text-left">{title}</h2>
                <p className="text-center text-sm lg:text-left leading-5 2xl:leading-7 xl:text-sm">
                  {description[i18n.language as "en" | "es"]}
                </p>
                <div className="flex justify-center gap-5 lg:justify-start">
                  {links.map(({ url, site, label }, index) => {
                    const [{ Icon }] = sitesIcon.filter((s) => s.site === site);
                    return (
                      <Tooltip title={label} key={index}>
                        <a href={url} target="_blank" rel="noreferrer">
                          <Icon
                            aria-label={label}
                            className="text-white"
                          ></Icon>
                        </a>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;

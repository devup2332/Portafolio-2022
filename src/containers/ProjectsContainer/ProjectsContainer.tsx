import { useTranslation } from "react-i18next";
import { IconFigma, IconGithub, IconWeb } from "../../components/atoms/icons";
import { projects } from "../../data.json";

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
  const { t } = useTranslation("index");
  return (
    <div className="text-white py-20 grid gap-10 h-full">
      <h1 className="text-center">{t("projects.title")}</h1>
      <div className="w-10/12 m-auto grid gap-10">
        {projects.map(({ image_url, links, description, title }, index) => {
          return (
            <div key={index} className="grid gap-6">
              <img className="rounded-md" src={image_url} alt="" />
              <div className="grid gap-6">
                <h2 className="text-center text-xl">{title}</h2>
                <p className="text-center leading-5">{description}</p>
                <div className="flex justify-center gap-5">
                  {links.map(({ url, site, label }, index) => {
                    const [{ Icon }] = sitesIcon.filter((s) => s.site === site);
                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon aria-label={label} className="text-white"></Icon>
                      </a>
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

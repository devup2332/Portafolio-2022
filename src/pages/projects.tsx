import type { NextPage } from "next";
import ProjectsContainer from "../containers/ProjectsContainer/ProjectsContainer";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";

const Projects: NextPage = () => {
	return (
		<HomeTemplate title="Projects - Diego Rojas">
			<ProjectsContainer />
		</HomeTemplate>
	);
};

export default Projects;

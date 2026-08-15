import ProjectCard2 from "../components/ProjectCard2";
import projectdata from "../data/ProjectData.json"; // Import the static data

const Projects = () => {
  return (
    <section className="text-PrimaryTextLight dark:text-PrimaryTextDark">
      <div className="grid grid-cols-1 py-10 gap-5 w-fit mx-auto">
        {projectdata.map((item) => (
          <ProjectCard2
            key={item.id}
            link={item.link ? item.link : false}
            imgPath={item.imgPath}
            techStack={item.techstack}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
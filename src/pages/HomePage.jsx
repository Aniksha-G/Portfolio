import TypingEffect from "@/components/TypingEffect";
import Contact from "@/pages/Contact";
import SlideIn from "@/components/animations/SlideIn";
import Projects from "@/sections/Projects";
import SocialSidebar from "@/components/SocialSidebar";
import TechStackCard from "@/sections/TechStackCard";
import ProfileCard from "@/sections/ProfileCard";

const HomePage = () => {
  return (
    <div>
      {/* Add Metadata Here */}

      <main className="py-5 sm:py-14 mx-auto px-5 md:px-16 xl:px-5" id="home">
        {/* Header Section */}
        <aside>
          <SocialSidebar />
        </aside>

        <h1 className="text-primary dark:text-PrimaryTextDark my-4">Aniksha G</h1>
        <TypingEffect
          tag="h3"
          className="md:mt-6 text-SecondaryTextLight dark:text-[#3ccf91] h-8"
        >
           BCA Student | Full Stack Developer
        </TypingEffect>

        {/* About Section */}
        <section className="mt-4 md:mt-7 text-lg lg:w-4/5">
      <p className="text-PrimaryTextLight dark:text-SecondaryTextDark">
  I am a passionate BCA student interested in software development,
  web technologies, and artificial intelligence. I enjoy creating
  responsive and user-friendly applications while continuously learning
  and exploring new technologies.
</p>
        
        
        </section>
      </main>
      {/* TechStack Card */}

      <section className="mt-10">
        <TechStackCard />
      </section>

      {/* Profile Card */}

      <section>
        <div className="text-center mt-32 mb-10 animate-pulse">
          <div className="flex items-center justify-center gap-3">
            <h2>About Me</h2>
          </div>
          {/* Bottom Line */}
          <div className="w-1/2 mx-auto mt-4 border-2 dark:border-[#3ccf91]"></div>
        </div>
        <SlideIn>
          <ProfileCard />
        </SlideIn>
      </section>

      {/* Project Card */}
      <section id="projects">
        <div className="text-center mt-32 animate-pulse">
          <div className="flex items-center justify-center gap-3">
            <h2>My Projects</h2>
          </div>
          {/* Bottom Line */}
          <div className="w-1/2 mx-auto mt-4 border-2 dark:border-[#3ccf91]"></div>
        </div>
        <SlideIn>
          <Projects />
        </SlideIn>
      </section>

      {/* Contact Card */}
      <section className="md:px-12 xl:px-16 mt-20" id="contact">
        <SlideIn>
          <Contact />
        </SlideIn>
      </section>

      {/* Footer */}
      <footer className="mt-32 mb-10 mx-5 text-center">
        <TypingEffect tag="h2" className="dark:text-primaryDark">
          Let’s Work Together!
        </TypingEffect>

        <p className="mt-4 text-lg">
          Interested in collaborating? Reach out to me via{" "}
          <a
            href="mailto:anikshaganeshan@gmail.com"
            className="text-accentLight hover:underline dark:text-accentDark"
          >
            email
          </a>{" "}
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/aniksha-g-9867ba370/"
            target="_blank"
            className="text-accentLight hover:underline dark:text-accentDark"
          >
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

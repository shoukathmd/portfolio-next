"use client";
import Certifications from "@/components/Certifications";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PersonalProjects } from "@/components/PersonalProjects.1";

const ProjectsPage = () => {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve Built (Under Construction.....)
      </Heading>
      <h1>My Personal Projects</h1>
      <div>
        <PersonalProjects />
      </div>
    </Container>
  );
};

export default ProjectsPage;

import Certifications from "@/components/Certifications";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import React from "react";

const TechnicalCertification = () => {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10"> What I&apos;ve Achieved</Heading>
      <Certifications />
    </Container>
  );
};

export default TechnicalCertification;

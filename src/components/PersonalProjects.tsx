"use client";
import React from "react";
import { Heading } from "./Heading"; // Ensure the correct path
import { personalProjectsData } from "@/constants/personalprojects"; // Ensure the correct path
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph"; // Ensure the correct path
import { motion } from "framer-motion";
import { PersonalProjectType } from "@/types/personalproject"; // Ensure the correct path

export const PersonalProjects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {personalProjectsData.map(
          (personalProject: PersonalProjectType, idx: number) => (
            <motion.div
              key={personalProject.href}
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              {/* <Link
                href={
                  personalProject.slug
                    ? `/${personalProject.slug}`
                    : personalProject.href
                }
                key={personalProject.href}
                className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              > */}
              <div className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4">
                <Image
                  src={personalProject.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-lg "
                    >
                      {personalProject.title}
                    </Heading>
                    <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                      {personalProject.description}
                    </Paragraph>
                  </div>
                  <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                    {personalProject.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

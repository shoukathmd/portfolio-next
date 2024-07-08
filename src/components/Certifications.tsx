"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { certifications } from "@/constants/certifications";
import { motion } from "framer-motion";
import { Certification } from "@/types/certifications";

const Certifications = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      {certifications.map((certification: Certification, idx: number) => (
        <motion.div
          key={certification.name}
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
          <Card className="hover:bg-gray-50 rounded-2xl transition duration-200 p-4">
            <CardHeader>
              <CardTitle>{certification.name}</CardTitle>
              <CardDescription>{certification.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={certification.image_url}
                alt={`${certification.name} badge`}
                height="220"
                width="220"
                className="rounded-md"
              />
              <p className="mt-6 ml-10">Issued: {certification.issue_date}</p>
              {/* {certification.expiry_date && (
                <p>Expires: {certification.expiry_date}</p>
              )} */}
              {/* {certification.credential_id && (
                <p>Credential ID: {certification.credential_id}</p>
              )} */}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;

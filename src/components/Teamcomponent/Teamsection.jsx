
import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import coordinator from "../../assets/coordinator.jpg";
import chairperson from "../../assets/chairperson.jpg";
import cochair from "../../assets/cochair.jpg";
import secretory from "../../assets/secretory.jpg";
import treasurer from "../../assets/treasurer.jpg";



const TeamHeader = lazy(() => import("./Teamheader"));
const TeamGrid = lazy(() => import("./Teamgrid"));

const Teamsection = () => {
  const teamMembers = [
    { name: "Isaac Quoi", role: "Secretary", image: secretory },
    { name: "Victoria Flomo", role: "Co-ChairPerson", image: cochair },
    { name: "Ramsey Paye Willie", role: "Chair Person", image: chairperson },
    { name: "Alinta Kofanh", role: "Coordinator", image: coordinator },
    { name: "Patience Y. Dolo", role: "Treasurer", image: treasurer },
  ];

  return (
    <section
      id="team"
      className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden"
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-28 h-28 bg-green-100 rounded-full blur-2xl opacity-30"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-36 h-36 bg-green-200 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center text-green-700">Loading team...</div>}>
          <TeamHeader />
          <TeamGrid teamMembers={teamMembers} />
        </Suspense>
      </div>
    </section>
  );
};

export default Teamsection;

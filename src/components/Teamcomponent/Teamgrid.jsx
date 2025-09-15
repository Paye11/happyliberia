import React from "react";
import { motion } from "framer-motion";
import TeamMember from "./Teammember";

const Teamgrid = ({ teamMembers }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } },
      }}
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10"
    >
      {teamMembers.map((member, index) => (
        <TeamMember key={member.name} member={member} index={index} />
      ))}
    </motion.div>
  );
};

export default Teamgrid;

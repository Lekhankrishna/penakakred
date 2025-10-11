"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Akarsh Chandrashekar",
      role: "Founder & CEO",
      image: "/team/akarsh.jpg ",
      bio: "18+ years in banking, collections, and debt management across UAE & India. Visionary behind PenakaKred’s AI-driven compliance model.",
    },
    {
      name: "Lekhankrishna Kulkarni ",
      role: "IT Manager & Software Developer ",
      image: "/team/lekhan.jpg",
      bio: "Software Developer at PenakaKred, skilled in web technologies and passionate about building efficient, user-friendly digital solutions.",
    },
    {
      name: "Sangeetha JP",
      role: "IT Manager & Software Developer",
      image: "/team/Sangeetha.jpg",
      bio: "Full-stack engineer driving AI, automation, and analytics platforms for scalable collection ecosystems.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-brandSlate mb-8 text-center"
      >
        Meet Our <span className="text-brandBlue">Team</span>
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div> */}
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

            

            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-brandSlate">{member.name}</h3>
              <p className="text-sm text-brandBlue">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
            </div>
          </motion.div>
          
        ))}
      </div>
    </section>
  );
}

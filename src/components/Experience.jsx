import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const experiences = [
  {
    title: "Bachelor of Computer Application",
    place: "Cotton University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SGuZTgu0MEFT3karUTMnT4xc4LVKozYLeQ&s",
    time: "2020 – 2023",
    details: [
      "Completed undergraduate studies in Computer Application",
      "Focused on programming fundamentals and software engineering",
    ],
  },
  {
    title: "Masters of Application",
    place: "Cotton University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SGuZTgu0MEFT3karUTMnT4xc4LVKozYLeQ&s",
    time: "2023 – 2025",
    details: [
      "Completed masters studies in Computer Application",
      "Focused on programming fundamentals and software engineering",
    ],
  },
  {
    title: "Internship",
    place: "Assam Electricity Grid Corporation Limited (AEGCL)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek6k_QwtV86RqPdM9w-UD7_vMAgdQ81wwbw&s",
    time: "Feb 2025 - June 2025",
    details: [
      "Worked on MERN stack fundamentals",
      "Built authentication and CRUD-based applications",
    ],
  },
  {
    title: "Developer",
    place: "GeekWorkx",
    logo: "https://geekworkx.com/assets/images/gt-logo.gif",
    time: "2025 – Present",
    details: [
      "Developing full-stack applications",
      "Working with React, Node.js, SQL, REST APIs",
    ],
  },
];

/* ---------------- EXPERIENCE CARD ---------------- */

const ExperienceCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    if (open) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.to(iconRef.current, {
        rotate: 45,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [open]);

  return (
    <div className="bg-[#0c0c0c] rounded-xl p-6 border w-full border-white/5">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-gray-400 font-medium text-sm">{data.place}</p>

            {data.logo && (
              <img
                src={data.logo}
                alt={`${data.place} logo`}
                className="w-6 h-6 rounded-full object-cover border border-white/10"
              />
            )}
          </div>

          <div></div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">{data.time}</span>
          <button
            onClick={() => setOpen(!open)}
            className="text-[#e99b63] text-2xl font-light"
          >
            <span ref={iconRef}>+</span>
          </button>
        </div>
      </div>

      {/* EXPANDABLE CONTENT */}
      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
          {data.details.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ---------------- EXPERIENCE SECTION ---------------- */

const Experience = () => {
  return (
    <section className="pt-28">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4">
        Experience & Education
      </h2>

      <p className="text-gray-400 text-center mb-12">
        My journey through education, internships, and professional growth.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} data={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

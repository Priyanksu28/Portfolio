import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./Experience";

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  const leftRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const paragraphRef = useRef([]);

  useLayoutEffect(() => {
    // prevent GSAP from running before refs exist
    if (!cardsRef.current.length) return;

    const ctx = gsap.context(() => {
      // LEFT TEXT
      gsap.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // IMAGE
      gsap.from(imageRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.3,
          delay: 0.4,
        }
      );

      // CARDS (scroll-based)
      gsap.fromTo(
        cardsRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top bottom",
            once: true, // 🔥 VERY IMPORTANT
          },
        }
      );
    });

    // 🔥 VERY IMPORTANT
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen text-white px-6 md:px-20 pt-16 pb-2 relative overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="background"
      />

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 items-center gap-4 mb-36">
        {/* LEFT CONTENT */}
        <div ref={leftRef} className="space-y-7 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
            From Intern to <br />
            <span className="text-white">Professional Developer</span>
          </h2>

          <p
            ref={(el) => (paragraphRef.current[0] = el)}
            className="text-gray-400 max-w-lg leading-relaxed"
          >
            I am an MCA graduate from Cotton University with a strong passion
            for full-stack web development and software engineering. Skilled in
            the MERN stack (MongoDB, Express.js, React.js, Node.js) and
            proficient in C++ programming, I enjoy building scalable and
            user-friendly applications.
          </p>

          <p
            ref={(el) => (paragraphRef.current[1] = el)}
            className="text-gray-400 max-w-lg leading-relaxed"
          >
            I have hands-on experience developing user authentication systems,
            asset management solutions, and RESTful APIs, which has strengthened
            my ability to design efficient and secure web applications.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end mt-10 mr-8">
          <div
            ref={imageRef}
            className="w-[300px] h-[460px] overflow-hidden rounded-md"
          >
            <img
              data-aos="fade-down-left"
              onLoad={() => ScrollTrigger.refresh()}
              className="w-full h-full object-cover"
              src="/me.jpeg"
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* SKILLS / CARDS */}
      <div data-aos="flip-left" className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Programming Languages",
            text: "JavaScript, C/C++, PHP, SQL",
            icon: "</>",
          },
          {
            title: "Web Technologies",
            text: "HTML5, CSS3, RESTful APIs",
            icon: "🗄",
          },
          {
            title: "Frameworks & Libraries",
            text: "React, Express.js, Redux, Tailwind CSS",
            icon: "</>",
          },
          {
            title: "Database",
            text: "MongoDB, MySQL, Database Design, Normalization, Indexing, Query Optimization",
            icon: "💾",
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-[#0c0c0c] rounded-xl p-6 border border-white/5
                       hover:border-[#e99b63] transition-all duration-300"
          >
            <div className="text-gray-400 text-3xl mb-4">{card.icon}</div>
            <h4 className="font-semibold">{card.title}</h4>
            <p className="text-gray-400 text-lg pt-2">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <Experience />
    </div>
  );
};

export default Details;

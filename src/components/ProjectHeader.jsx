import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const ProjectHeader = () => {
  const leftRef = useRef(null);
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(leftRef.current, {
      x: -80,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      force3D: true,
    });

    gsap.fromTo(
      paragraphRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.9,
        delay: 0.35,
        ease: "power2.out",
        force3D: true,
      }
    );
  }, []);

  return (
    <div className="min-h-screen text-white px-6 md:px-20 pt-16 pb-2 relative overflow-hidden">
      <section ref={leftRef} className="mt-24 max-w-5xl will-change-transform">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold tracking-wider my-8">
          Designing digital <br />
          <span className="text-gray-400">
            experiences that <br /> matter
          </span>
        </h2>

        <p
          ref={paragraphRef}
          className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed will-change-opacity"
        >
          I'm a multidisciplinary designer and developer focused on creating
          functional, clean, and memorable web interfaces.
        </p>
      </section>

      <section className="mt-28">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-5">
          Selected Works (04)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* PROJECT CARD */}
          <a href="https://github.com/Priyanksu28/EMS" target="_blank" className="group cursor-pointer">
            <div className="h-[200px] rounded-md mb-2 overflow-hidden">
              <img
                src="/ams.jpg"
                alt="Asset Management System"
                className="w-full h-full object-cover
                 transition-transform duration-500 ease-out
                 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-medium">Asset Management System</h3>

            <p className="text-sm text-gray-500 mt-1">MERN Stack · 2025</p>
          </a>
          

          <div className="group cursor-pointer">
            <div className="h-[200px] rounded-md mb-2 overflow-hidden">
              <img
                src="/ams.jpg"
                alt="Asset Management System"
                className="w-full h-full object-cover transition-transform duration-500 ease-out
                 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-medium">Authentication Platform</h3>
            <p className="text-sm text-gray-500 mt-1">React · Node · JWT</p>
          </div>

          <div className="group cursor-pointer">
            <div className="h-[200px] rounded-md mb-2 overflow-hidden">
              <img
                src="/ams.jpg"
                alt="Asset Management System"
                className="w-full h-full object-cover transition-transform duration-500 ease-out
                 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-medium">Admin Dashboard</h3>
            <p className="text-sm text-gray-500 mt-1">Analytics · Charts</p>
          </div>

          <div className="group cursor-pointer">
            <div className="h-[200px] rounded-md mb-2 overflow-hidden">
              <img
                src="/ams.jpg"
                alt="Asset Management System"
                className="w-full h-full object-cover transition-transform duration-500 ease-out
                 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-medium">Portfolio Website</h3>
            <p className="text-sm text-gray-500 mt-1">React · Tailwind</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectHeader;

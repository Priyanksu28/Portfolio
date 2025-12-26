import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white px-6 md:px-20 pt-16 pb-2 relative overflow-hidden">
      <div className="max-w-8xl px-0 py-10">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* LEFT */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Priyanksu Borkataky
            </h3>
            <p className="text-sm mt-1">
              Building digital experiences that matter.
            </p>
          </div>

          {/* RIGHT - SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Priyanksu28"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanksu-borkataky-2706a7346/"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-white transition"
            >
                <Instagram size={18} />
            </a>

            <a
              href="mailto:priyanksu28@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8" />

        {/* BOTTOM ROW */}
        <p className="text-sm text-center md:text-left">
          © 2025 Udit Agarwal. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

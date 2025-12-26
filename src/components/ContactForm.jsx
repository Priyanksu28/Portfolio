import React, { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fpskpqg",
        "template_d3ku5kc",
        formRef.current,
        "IAU85yy9LnHFCm35a"
      )

      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };
  return (
    <div className="pt-4 px-6 md:px-20 text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4">
        Get in Touch
      </h2>

      <p className="text-gray-400 text-center mb-12">
        Have a project in mind or just want to say hi? I'd love to hear from
        you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {/* LEFT INFO */}
        <div className="space-y-10">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0c0c0c] text-white">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">priyanksu28@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0c0c0c] text-white">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-400">+91 9395071596</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0c0c0c] text-white">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">Guwahati, Assam, India-781001</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (form can go here later) */}
        <div className="bg-[#0c0c0c] rounded-2xl p-8 border border-white/10 shadow-lg">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1f1e1e] border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1f1e1e] border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1f1e1e] border border-white/10 text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-black py-3 rounded-lg bg-gradient-to-r from-white to-gray-700 font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

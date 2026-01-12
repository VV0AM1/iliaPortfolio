"use client";

import { FC, useState } from "react";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Github,
  Linkedin,
  Dribbble,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

const ContactSection: FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    // Simulating call
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="w-full h-[350px] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/5"
            variants={fadeInUp}
            custom={1}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.211537009879!2d2.114899515418184!3d41.36399117926474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4988fba1c4417%3A0xfbc070f2e92dfb81!2sCarrer%20de%20l'Aprestadora%2C%2023%2C%2008902%20L'Hospitalet%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1690239875220!5m2!1sen!2ses"
              className="border-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Phone", value: "+34 65 86 84 091", icon: <Phone size={20} /> },
              { label: "Email", value: "serleb2000@gmail.com", icon: <Mail size={20} /> },
              { label: "Website", value: "iliaakimov.netlify.app", icon: <Globe size={20} /> },
              {
                label: "Location",
                value: "Barcelona, Spain",
                icon: <MapPin size={20} />,
              },
            ].map(({ label, value, icon }, index) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                custom={1.2 + index * 0.1}
                className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="text-secondary p-3 rounded-lg bg-white/5">{icon}</div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12" variants={fadeInUp} custom={2}>
            <h4 className="text-white text-lg mb-6 font-medium">Connect with me</h4>
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  url: "https://github.com/VV0AM1",
                },
                {
                  icon: Dribbble,
                  url: "https://iliaakimov.netlify.app",
                },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/ilia-akimov-74889133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
              ].map(({ icon: Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-4 glass rounded-full hover:bg-white hover:text-black transition-all text-white"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass p-8 md:p-12 rounded-3xl border border-white/5"
        >
          <motion.p className="text-accent font-medium mb-4" variants={fadeInUp} custom={1}>
            Let's Collaborate
          </motion.p>

          <motion.h2
            className="text-4xl font-bold leading-tight mb-6"
            variants={fadeInUp}
            custom={1.2}
          >
            Have a project in mind? <br />
            <span className="text-gray-400">Let's build it.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 mt-8"
            variants={fadeInUp}
            custom={1.4}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Your Name</label>
                <input type="text" placeholder="John Doe" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Subject</label>
              <input type="text" placeholder="Project Inquiry" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea placeholder="Tell me about your project..." required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all h-32 resize-none placeholder:text-gray-600" ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center font-medium"
              >
                Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

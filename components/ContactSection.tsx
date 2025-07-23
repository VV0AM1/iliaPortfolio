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

    const form = e.currentTarget;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const phone = (form[2] as HTMLInputElement).value;
    const subject = (form[3] as HTMLInputElement).value;
    const message = (form[4] as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, subject, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#1b1d2a] text-white py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="w-full h-[300px] rounded-lg overflow-hidden mb-8"
            variants={fadeInUp}
            custom={1}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.211537009879!2d2.114899515418184!3d41.36399117926474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4988fba1c4417%3A0xfbc070f2e92dfb81!2sCarrer%20de%20l'Aprestadora%2C%2023%2C%2008902%20L'Hospitalet%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1690239875220!5m2!1sen!2ses"
              className="border-0 w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="space-y-4">
            {[
              { label: "Phone", value: "+34 65 86 84 091", icon: <Phone size={16} /> },
              { label: "Email", value: "serleb2000@gmail.com", icon: <Mail size={16} /> },
              { label: "Website", value: "www.iliaakimov.netlify.app", icon: <Globe size={16} /> },
              {
                label: "Address",
                value: "Carrer de l'Aprestadora 23, Barcelona 08902",
                icon: <MapPin size={16} />,
              },
            ].map(({ label, value, icon }, index) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                custom={1.2 + index * 0.2}
                className="bg-[#20222f] p-5 rounded-lg flex items-center gap-4"
              >
                <div className="text-gray-400">{icon}</div>
                <div>
                  <p className="text-sm text-gray-400">{label}:</p>
                  <p className="text-white font-medium text-base">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>

            <motion.div className="mt-10" variants={fadeInUp} custom={2.2}>
            <h4 className="text-white text-xl mb-4 font-semibold">Follow Me</h4>
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
                    whileHover={{ scale: 1.1 }}
                    className="p-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
                >
                    <Icon size={16} />
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
        >
          <motion.p className="text-gray-400 mb-2" variants={fadeInUp} custom={1}>
            || Get In Touch
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            variants={fadeInUp}
            custom={1.2}
          >
            If you have any project or need help. Contact me
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-10 max-w-xl"
            variants={fadeInUp}
            custom={1.4}
          >
            I am always open to discuss product design work or partnership opportunities.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={fadeInUp}
            custom={1.6}
          >
            <input type="text" placeholder="Name" required className="bg-transparent border border-gray-700 p-3 rounded-md text-sm text-white focus:outline-none focus:border-white" />
            <input type="email" placeholder="Email" required className="bg-transparent border border-gray-700 p-3 rounded-md text-sm text-white focus:outline-none focus:border-white" />
            <input type="text" placeholder="Phone" required className="bg-transparent border border-gray-700 p-3 rounded-md text-sm text-white focus:outline-none focus:border-white" />
            <input type="text" placeholder="Subject" required className="bg-transparent border border-gray-700 p-3 rounded-md text-sm text-white focus:outline-none focus:border-white" />
            <textarea placeholder="Comment" required className="bg-transparent border border-gray-700 p-3 rounded-md text-sm text-white focus:outline-none focus:border-white md:col-span-2" rows={5}></textarea>

            <div className="md:col-span-2 flex flex-col items-start">
              <button
                type="submit"
                className="mt-4 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit Message"}
              </button>
              {sent && (
                <p className="text-green-400 text-sm mt-2">
                  ✅ Your message was sent successfully!
                </p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
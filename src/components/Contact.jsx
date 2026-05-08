import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Provide your Web3Forms Access Key here
    formData.append("access_key", "a66f342d-217b-4183-a6b9-93c473b09404");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 5000); // Clear message after 5 seconds
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 w-full relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface/20 border border-white/5 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">Contact</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Let's build something together.</h3>
              
              <p className="text-secondary text-lg font-light leading-relaxed mb-12">
                I'm currently open to new opportunities. Whether you have a project idea, a role, or just want to connect, my inbox is always open.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:akarshang31@gmail.com" className="text-xl text-white hover:text-accent transition-colors font-medium">akarshang31@gmail.com</a>
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+919025676895" className="text-xl text-white hover:text-accent transition-colors font-medium">+91 9025676895</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-secondary uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs text-secondary uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-secondary uppercase tracking-widest">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows="4" 
                    className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    type="submit"
                    disabled={result === "Sending..."}
                    className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
                  >
                    {result === "Sending..." ? "Sending..." : "Send Message"}
                  </button>
                  {result && result !== "Sending..." && (
                    <p className={`text-sm font-medium ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                      {result}
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

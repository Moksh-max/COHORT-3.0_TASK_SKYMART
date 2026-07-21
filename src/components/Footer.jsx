import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-black">
              Sky<span className="text-[#C8F400]">Mart</span>
            </h2>

            <p className="text-zinc-400 mt-5 leading-7">
              Shop smarter with premium quality products, unbeatable prices,
              and lightning-fast delivery.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:bg-[#C8F400] hover:text-black transition"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:bg-[#C8F400] hover:text-black transition"
              >
                <Send size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:bg-[#C8F400] hover:text-black transition"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="mailto:support@skymart.com"
                className="w-10 h-10 rounded-xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:bg-[#C8F400] hover:text-black transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <a href="#" className="hover:text-[#C8F400] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8F400] transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8F400] transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8F400] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8F400] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>

            <div className="space-y-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail className="text-[#C8F400]" size={18} />
                <span>support@skymart.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#C8F400]" size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#C8F400]" size={18} />
                <span>Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Newsletter</h3>

            <p className="text-zinc-400 mb-5">
              Subscribe to receive offers and latest product updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#111] border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-[#C8F400]"
            />

            <button className="w-full mt-4 bg-[#C8F400] text-black font-bold py-3 rounded-xl hover:bg-lime-300 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} SkyMart. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-[#C8F400]">
              Privacy Policy
            </a>

            <a href="#" className="text-zinc-500 hover:text-[#C8F400]">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
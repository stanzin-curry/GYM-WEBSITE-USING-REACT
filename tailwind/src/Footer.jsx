import { Dumbbell, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <Dumbbell size={28} className="text-indigo-500" />
          <h2 className="text-xl font-semibold text-white">
            Steff’s Gym — Train Hard, Stay Strong 💪
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 text-sm mb-6 md:mb-0">
          <li>
            <a
              href="#programs"
              className="hover:text-indigo-400 transition-colors"
            >
              Programs
            </a>
          </li>
          <li>
            <a href="#trainers" className="hover:text-indigo-400 transition-colors">
              Trainers
            </a>
          </li>
          <li>
            <a href="#schedule" className="hover:text-indigo-400 transition-colors">
              Schedule
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">Steff’s Gym</span> — Built with 💪 by Stanzin Paldan
      </div>
    </footer>
  );
}

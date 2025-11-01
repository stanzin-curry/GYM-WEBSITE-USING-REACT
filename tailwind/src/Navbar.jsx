import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Bell,
  User,
  FolderKanban,
  Users,
  Dumbbell,
  Calendar,
  Image,
} from "lucide-react"; // ✅ Added Image icon
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gray-900/60 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 🔹 Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1731222300629-0701d3160e1d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
              alt="Logo"
              className="h-8 w-auto rounded"
            />
            <span className="text-white font-semibold text-lg">
              Steff’s Gym — Let’s Gooooo!
            </span>
          </Link>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              icon={<Users size={16} />}
              label="Team"
              to="/teams"
              active={location.pathname === "/teams"}
            />
            <NavLink
              icon={<Dumbbell size={16} />}
              label="Exercises"
              to="/MyExercises"
              active={location.pathname === "/MyExercises"}
            />
            <NavLink
              icon={<Calendar size={16} />}
              label="Planner"
              to="/workout-planner"
              active={location.pathname === "/workout-planner"}
            />
            <NavLink
              icon={<Image size={16} />}
              label="Gallery"
              to="/gallery"
              active={location.pathname === "/gallery"}
            />
          </div>

          {/* 🔹 Right Section */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8">
              <User size={18} className="text-gray-300" />
            </button>

            {/* 🔹 Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 pt-3 pb-4 space-y-3">
              <NavLink
                icon={<Users size={16} />}
                label="Team"
                to="/teams"
                mobile
                active={location.pathname === "/teams"}
              />
              <NavLink
                icon={<Dumbbell size={16} />}
                label="Exercises"
                to="/MyExercises"
                mobile
                active={location.pathname === "/MyExercises"}
              />
              <NavLink
                icon={<Calendar size={16} />}
                label="Planner"
                to="/workout-planner"
                mobile
                active={location.pathname === "/workout-planner"}
              />
              <NavLink
                icon={<Image size={16} />}
                label="Gallery"
                to="/gallery"
                mobile
                active={location.pathname === "/gallery"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// 🔹 Reusable NavLink Component
function NavLink({ icon, label, mobile, to, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-colors ${
        active ? "text-white font-medium" : "text-gray-300 hover:text-white"
      } ${
        mobile
          ? "block px-3 py-2 rounded-md text-sm bg-gray-800/40 hover:bg-gray-700/50"
          : "text-sm"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

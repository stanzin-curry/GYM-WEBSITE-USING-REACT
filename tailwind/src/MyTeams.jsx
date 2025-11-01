import { motion } from "framer-motion";
import { Users, Code2, Palette, Briefcase, PenTool } from "lucide-react";

export default function MyTeams() {
  const members = [
    {
      name: "Ritesh",
      role: "Header Coder ",
      icon: <Code2 className="text-indigo-600" size={22} />,
      img: "https://applescoop.org/image/wallpapers/iphone/naruto-manga-japanese-ninja-anime-cartoon-blue-28-10-2024-1730151526-hd-wallpaper.webp", // coder
    },
    {
      name: "Steff",
      role: "Head Manager", 
      icon: <Briefcase className="text-indigo-600" size={22} />,
      img: "https://plus.unsplash.com/premium_photo-1722696650716-6ba24ffadce0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900", // manager
    },
    {
      name: "Nakpo",
      role: "Head Designer & Architect",
      icon: <Palette className="text-indigo-600" size={22} />,
      img: "https://plus.unsplash.com/premium_photo-1719986264183-d5efb55f4e01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900", // designer
    },
    {
      name: "Stanzin",
      role: "Frontend Engineer & UI/UX Designer",
      icon: <PenTool className="text-indigo-600" size={22} />,
      img: "https://wallpapers.com/images/featured/sasuke-6w81chcijl6yy0nb.jpg", // ui/ux
    },
  ];

  return (
    <section className="p-10 min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-800 text-white">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <Users className="text-indigo-500" size={32} />
        <h2 className="text-3xl sm:text-4xl font-bold">Our Creative Team</h2>
      </div>

      {/* Team Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 8px 24px rgba(79, 70, 229, 0.4)",
            }}
            className="relative flex flex-col items-center gap-4 rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-lg shadow-lg hover:shadow-indigo-500/20 transition-all"
          >
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                {member.name} {member.icon}
              </h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

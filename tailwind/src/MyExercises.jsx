import { motion } from "framer-motion";
import { Dumbbell, Activity, Bike, StretchVertical, Flame } from "lucide-react";

export default function MyExercises() {
  const exercises = [
    {
      name: "Strength Training",
      icon: <Dumbbell size={28} />,
      color: "from-red-500 to-pink-400",
    },
    {
      name: "Cardio Workout",
      icon: <Activity size={28} />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Cycling",
      icon: <Bike size={28} />,
      color: "from-green-500 to-lime-400",
    },
    {
      name: "Yoga & Stretch",
      icon: <StretchVertical size={28} />,
      color: "from-purple-500 to-indigo-400",
    },
    {
      name: "Fat Burn",
      icon: <Flame size={28} />,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20">
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Exercises 🏋️‍♀️
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Track your daily workouts and stay motivated! Choose your favorite
        exercise routines to build strength, burn fat, and improve flexibility.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${exercise.color} text-white flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ rotate: 2 }}
          >
            <div className="mb-3">{exercise.icon}</div>
            <h3 className="text-lg font-semibold">{exercise.name}</h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-gray-400">💪 Stay consistent. Progress every day.</p>
      </motion.div>
    </div>
  );
}

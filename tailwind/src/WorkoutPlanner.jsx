import { useState } from "react";
import { Calendar as CalendarIcon, Plus, Dumbbell, Flame, Bike, StretchVertical, Activity } from "lucide-react";

export default function WorkoutPlanner() {
  const [plans, setPlans] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [intensity, setIntensity] = useState("Medium");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const exerciseOptions = [
    { name: "Strength Training", icon: <Dumbbell size={18} className="text-red-400" /> },
    { name: "Cardio", icon: <Activity size={18} className="text-blue-400" /> },
    { name: "Cycling", icon: <Bike size={18} className="text-green-400" /> },
    { name: "Yoga & Stretch", icon: <StretchVertical size={18} className="text-purple-400" /> },
    { name: "Fat Burn", icon: <Flame size={18} className="text-orange-400" /> },
  ];

  const addPlan = () => {
    if (!selectedDate || !selectedExercise) return;
    const newPlan = {
      date: selectedDate,
      exercise: selectedExercise,
      intensity,
    };
    setPlans([...plans, newPlan]);
    setSelectedExercise("");
    setIntensity("Medium");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 mt-4">
        <CalendarIcon className="text-amber-400" size={30} />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Workout Planner 🏋️‍♂️
        </h2>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg max-w-3xl w-full">
        <h3 className="text-xl font-semibold text-center mb-4">
          {today.toLocaleString("default", { month: "long" })} {year}
        </h3>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center text-gray-400 mb-2 text-sm">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {[...Array(firstDay)].map((_, i) => (
            <div key={"blank" + i}></div>
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const dateString = `${year}-${month + 1}-${day}`;
            const isToday = day === today.getDate();

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(dateString)}
                className={`py-2 rounded-lg transition-all border ${
                  selectedDate === dateString
                    ? "bg-amber-600 border-amber-500 text-white"
                    : "bg-gray-800/50 border-white/10 hover:bg-gray-700"
                } ${isToday ? "ring-2 ring-amber-400" : ""}`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Add Exercise Form */}
      {selectedDate && (
        <div className="mt-8 max-w-3xl w-full bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-center">
            Plan your workout for <span className="text-amber-400">{selectedDate}</span>
          </h3>

          {/* Exercise Dropdown */}
          <select
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white mb-4"
          >
            <option value="">Select Exercise</option>
            {exerciseOptions.map((opt, i) => (
              <option key={i} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>

          {/* Intensity Selector */}
          <div className="flex gap-4 items-center mb-4">
            <label className="text-sm text-gray-300">Intensity:</label>
            <select
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white p-2 rounded-md"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Add Button */}
          <button
            onClick={addPlan}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-all mx-auto"
          >
            <Plus size={18} />
            Add Workout
          </button>
        </div>
      )}

      {/* Planned Workouts List */}
      <div className="mt-10 max-w-3xl w-full">
        <h3 className="text-2xl font-semibold mb-4 text-center">Your Planned Workouts</h3>
        {plans.length === 0 ? (
          <p className="text-gray-400 text-center text-sm">
            No workouts planned yet. Start by selecting a date above!
          </p>
        ) : (
          <ul className="space-y-3">
            {plans.map((p, i) => (
              <li
                key={i}
                className="bg-white/10 border border-white/10 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <span>
                  <strong className="text-amber-400">{p.exercise}</strong> —{" "}
                  <span className="text-gray-300">{p.date}</span>
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-md ${
                    p.intensity === "High"
                      ? "bg-red-500/30 text-red-300"
                      : p.intensity === "Medium"
                      ? "bg-yellow-500/30 text-yellow-300"
                      : "bg-green-500/30 text-green-300"
                  }`}
                >
                  {p.intensity} Intensity
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

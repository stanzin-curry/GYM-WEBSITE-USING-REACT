// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import MyExercises from "./MyExercises";
import MyTeams from "./MyTeams";
import Footer from "./Footer";
import WorkoutPlanner from "./WorkoutPlanner"; // ✅ Correct import
import Gallery from "./Gallery";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/MyExercises" element={<MyExercises />} />
        <Route path="/teams" element={<MyTeams />} />
        <Route path="/workout-planner" element={<WorkoutPlanner />} /> {/* ✅ Active */}
        <Route path="/Gallery" element={<Gallery />} /> {/* ✅ Active */}
      </Routes>
      <Footer />
    </Router>
  );
}

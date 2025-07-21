//App.jsx
import React from "react";
import NutritionMeter from "./NutritionMeter.jsx";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 min-h-screen"
    >
      <NutritionMeter />
    </motion.div>
  );
}

export default App; 
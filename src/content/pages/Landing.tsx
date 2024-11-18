import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const features = [
  "Advanced AI Writing Assistance",
  "Grammar and Style Correction",
  "Contextual Suggestions",
  "Plagiarism Detection",
];

const useTextAnimation = (texts: string[], interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return texts[currentIndex];
};

export default function WritingBuddyLanding() {
  const navigate = useNavigate();
  const animatedText = useTextAnimation(features);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(to bottom right, var(--color-gradient-from), var(--color-gradient-to))`,
      }}
    >
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: "var(--color-text-primary)" }}
            className="text-4xl md:text-6xl font-bold"
          >
            Elevate Your Writing with AI
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: "var(--color-primary)" }}
            className="text-xl md:text-2xl font-semibold h-8"
          >
            {animatedText}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
              className="px-6 py-2 rounded-md hover:bg-[var(--color-primary-hover)] transition-colors w-full sm:w-auto"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/pricing")}
              style={{
                backgroundColor: "white",
                color: "var(--color-text-primary)",
                borderColor: "var(--color-border)",
              }}
              className="px-6 py-2 rounded-md border hover:bg-[var(--color-hover)] transition-colors w-full sm:w-auto flex items-center justify-center"
            >
              <img
                src="/google.png"
                alt="Google logo"
                className="w-6 h-6 mr-2"
              />
              Continue with Google
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

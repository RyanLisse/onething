"use client";

import CustomForm from "./Components/CustomForm";
import JSConfetti from "js-confetti";
import OneThing from "./Components/OneThing";
import { useState } from "react";

const jsConfetti = new JSConfetti();

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great job!",
    "Don’t ya feel great?!",
    "Up, up, and up!",
    "Um…okay",
    "Did you though?",
    "Don’t feel like you tried your best…",
    "FAget about it!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export default function Home() {
  const [value, setValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!value) {
      setError("Value cannot be empty");
      return;
    }
    setError("");
    setIsCompleted(false);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value === "") {
      setError("Value cannot be empty");
      return;
    }
    setError("");
  };

  const handleCompletedThing = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = e.target as HTMLButtonElement;
    button.disabled = true;
    setValue(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: [
        "🫡",
        "📈",
        "🚀",
        "💻",
        "🍰",
        "🎉",
        "🌈",
        "⚡️",
        "💥",
        "✨",
        "💫",
      ],
    });
    if (button.hasAttribute("disabled")) {
      button.removeAttribute("disabled");
    }
    setValue("");
    setIsCompleted(true);
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b to-slate-100 from-indigo-500 dark:from-indigo-900 dark:to-slate-800">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted ? (
          <CustomForm
            value={value}
            error={error}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            handleCompletedThing={handleCompletedThing}
          />
        ) : (
          <OneThing value={value} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  );
}

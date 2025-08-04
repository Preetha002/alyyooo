import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const topics = ["Artificial Intelligence", "Mathematics", "Web Development", "Data Science", "Machine Learning"];

const quizData = {
  "Artificial Intelligence": [
    {
      question: "What is the main goal of Artificial Intelligence?",
      options: ["Automation", "Human-like intelligence", "Web development", "Data storage"],
      answer: "Human-like intelligence",
    },
    {
      question: "Which algorithm is used for pathfinding?",
      options: ["A* Algorithm", "Linear Regression", "Bubble Sort", "Naive Bayes"],
      answer: "A* Algorithm",
    },
  ],
  Mathematics: [
    {
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x²", "2"],
      answer: "2x",
    },
    {
      question: "Probability is always between?",
      options: ["0 and 1", "1 and 100", "-1 and 1", "0 and 10"],
      answer: "0 and 1",
    },
  ],
  "Web Development": [
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS",
    },
    {
      question: "React is mainly used for?",
      options: ["Database", "Backend", "User Interfaces", "Operating Systems"],
      answer: "User Interfaces",
    },
  ],
};

const Quiz = () => {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();
  const userName = "Preetha";
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleStartQuiz = () => {
    if (selectedTopic && quizData[selectedTopic]) {
      setCurrentQuiz(quizData[selectedTopic]);
      setShowResult(false);
      setAnswers({});
    }
  };

  const handleAnswer = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const calculateResult = () => {
    let score = 0;
    let wrongTopics = [];
    currentQuiz.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
      else wrongTopics.push(q.question);
    });
    setShowResult({ score, total: currentQuiz.length, wrongTopics });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-md">
        <h1 className="text-2xl font-bold">Quiz</h1>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold shadow-md"
          >
            {firstLetter}
          </button>

          {/* Dropdown (white background) */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate("/profile");
                }}
                className="w-full px-4 py-2 hover:bg-gray-200 text-left"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate("/");
                }}
                className="w-full px-4 py-2 hover:bg-gray-200 text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Search & Topic Select */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <div className="flex items-center bg-white/20 rounded-full px-4 py-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Search topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none px-2 text-white placeholder-gray-200"
            />
            <FaSearch className="text-gray-200" />
          </div>

          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-white/20 rounded-lg px-4 py-2 text-white border border-white/30"
          >
            <option value="">Select Topic</option>
            {topics
              .filter((t) => t.toLowerCase().includes(search.toLowerCase()))
              .map((topic, idx) => (
                <option key={idx} value={topic} className="text-black">
                  {topic}
                </option>
              ))}
          </select>

          <button
            onClick={handleStartQuiz}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
          >
            Start Quiz
          </button>
        </div>

        {/* Quiz Section */}
        {currentQuiz.length > 0 && !showResult && (
          <div className="bg-white/20 p-6 rounded-xl max-w-3xl mx-auto">
            {currentQuiz.map((q, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-semibold mb-3">
                  {i + 1}. {q.question}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {q.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(i, option)}
                      className={`p-3 rounded-lg border transition ${
                        answers[i] === option
                          ? "bg-green-500 text-white"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={calculateResult}
              className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold"
            >
              Submit Quiz
            </button>
          </div>
        )}

        {/* Result Section */}
        {showResult && (
          <div className="bg-white/20 p-6 rounded-xl max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Your Result 🎉</h2>
            <p className="text-lg mb-2">
              Score: {showResult.score} / {showResult.total}
            </p>
            <p className="text-gray-200 mb-3">
              {showResult.score < showResult.total / 2
                ? "⚠️ You need to concentrate more on weak areas."
                : "✅ Great work! Keep practicing."}
            </p>
            {showResult.wrongTopics.length > 0 && (
              <div className="text-left mt-4">
                <h3 className="font-semibold mb-2">Weak Topics:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-200">
                  {showResult.wrongTopics.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

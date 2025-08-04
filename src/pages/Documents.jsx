import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DocumentPage = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [summaryType, setSummaryType] = useState("full");
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSummarize = () => {
    if (!file) {
      alert("Please upload a PDF first.");
      return;
    }

    // Dummy summary + quiz generation
    setSummary("📄 This is a dummy AI-generated summary of the uploaded PDF.");

    setQuiz([
      {
        id: 1,
        question: "What is the main topic of this PDF?",
        options: ["AI", "Math", "History", "Biology"],
        correct: "AI",
      },
      {
        id: 2,
        question: "Which concept was highlighted?",
        options: [
          "Neural Networks",
          "Photosynthesis",
          "World War II",
          "Gravity",
        ],
        correct: "Neural Networks",
      },
    ]);

    setAnswers({});
    setSubmitted(false);
  };

  const handleAnswerChange = (qid, option) => {
    setAnswers((prev) => ({ ...prev, [qid]: option }));
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-md relative z-50">
        <h1 className="text-2xl font-bold">Documents 📑</h1>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold shadow-lg"
          >
            P
          </button>

          {/* Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-xl z-50">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
              >
                Profile
              </button>
              <button
                onClick={() => navigate("/")} // ✅ Redirect to login page
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Full Screen Upload Card */}
      <div className="flex-1 p-6">
        <div className="w-full h-full bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg overflow-y-auto">
          {/* Upload Section */}
          <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>
          <label className="flex items-center justify-center w-48 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700">
            Choose File
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
          {file && <p className="mt-2 text-sm">{file.name}</p>}

          {/* Summary Options */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            Choose Summary Type
          </h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="summaryType"
                value="full"
                checked={summaryType === "full"}
                onChange={(e) => setSummaryType(e.target.value)}
              />
              <span className="ml-2">Summarize Full PDF</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="summaryType"
                value="topic"
                checked={summaryType === "topic"}
                onChange={(e) => setSummaryType(e.target.value)}
              />
              <span className="ml-2">Summarize by Topic</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="summaryType"
                value="range"
                checked={summaryType === "range"}
                onChange={(e) => setSummaryType(e.target.value)}
              />
              <span className="ml-2">Summarize by Page Range</span>
            </label>
          </div>

          <button
            onClick={handleSummarize}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Summarize
          </button>

          {/* Summary Result */}
          {summary && (
            <div className="mt-6 bg-white/10 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Summary</h2>
              <p>{summary}</p>
            </div>
          )}

          {/* Quiz Section */}
          {quiz.length > 0 && (
            <div className="mt-6 bg-white/10 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Quiz</h2>
              {quiz.map((q) => (
                <div key={q.id} className="mb-4">
                  <p className="font-semibold">{q.question}</p>
                  <div className="space-y-1">
                    {q.options.map((opt, idx) => (
                      <label key={idx} className="flex items-center">
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={opt}
                          checked={answers[q.id] === opt}
                          onChange={() => handleAnswerChange(q.id, opt)}
                          disabled={submitted}
                        />
                        <span className="ml-2">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {!submitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                >
                  Submit Quiz
                </button>
              ) : (
                <div className="mt-4">
                  <h3 className="font-bold">Results:</h3>
                  {quiz.map((q) => (
                    <p key={q.id}>
                      {answers[q.id] === q.correct
                        ? `✅ Q${q.id}: Correct`
                        : `❌ Q${q.id}: Wrong (Correct: ${q.correct})`}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;

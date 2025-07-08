// components/QuizComponent.tsx
import React, { useState } from "react";
import { useAppState } from "../hooks/useAppState";
import {
  useGenerateQuiz,
  useCreateQuizSession,
  useSubmitAnswer,
  useQuizResults,
} from "../hooks/useQuiz";
import useUserDocuments from "../hooks/useUserDocuments";
import { useSetSelected } from "../hooks/useSelected";
import { DocumentBody, DocumentHeader } from "../components/ui/Document";

const QuizComponent: React.FC = () => {
  const { user, quiz, session } = useAppState();
  const userId = user?.email || "";
  const { data: documents } = useUserDocuments(userId);
  const setSelected = useSetSelected();
  const { data: uploadResponse } = useUserDocuments(user?.email || "");

  // Quiz generation
  const { mutate: generateQuiz, isLoading: isGenerating } = useGenerateQuiz();
  const [selectedDocumentId, setSelectedDocumentId] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // Quiz session
  const { mutate: createSession, isLoading: isCreatingSession } =
    useCreateQuizSession();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  // Answer submission
  const { mutate: submitAnswer, isLoading: isSubmitting } = useSubmitAnswer();

  // Quiz results
  const { data: results } = useQuizResults(session?.id || "");

  const handleGenerateQuiz = () => {
    if (!userId || !selectedDocumentId) {
      alert("Please select a document and ensure you're logged in");
      return;
    }
    generateQuiz(
      {
        document_id: selectedDocumentId,
        user_id: userId,
        selected_topics: selectedTopics,
        difficulty: "medium",
        question_types: ["multiple_choice"],
        question_count: 10,
        hints_enabled: true,
        max_hints_per_question: 4,
      },
      {
        onSuccess: (data) => {
          setSelected("quiz", data);
        },
        onError: (error) => alert(error.message),
      }
    );
  };

  const handleStartSession = () => {
    if (!quiz || !userId) return;
    createSession(
      {
        quizId: quiz._id,
        data: { user_id: userId, hints_enabled: true },
      },
      {
        onSuccess: (data) => {
          setSelected("session", data);
          setCurrentQuestionIndex(0);
        },
        onError: (error) => alert(error.message),
      }
    );
  };

  const handleSubmitAnswer = () => {
    if (!session || !quiz || !userAnswer) return;
    const question = quiz.questions[currentQuestionIndex];
    submitAnswer(
      {
        sessionId: session.id,
        data: {
          question_id: question.id,
          user_answer: userAnswer,
          hints_used: [], // Add hint logic if needed
        },
      },
      {
        onSuccess: () => {
          setUserAnswer("");
          if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
            // Quiz completed, fetch results
          }
        },
        onError: (error) => alert(error.message),
      }
    );
  };

  if (!userId) {
    return <div>Please log in to start a quiz.</div>;
  }
  const selectedDocument = documents?.find(
    (doc) => doc.id === selectedDocumentId
  );
  const matchedUpload = uploadResponse?.find(
    (r) => r.filename == selectedDocument?.filename
  );
  const topics = matchedUpload?.topics || [];

  return (
    <DocumentBody>
      <DocumentHeader
        title="Gnerate Quiz"
        description="Customize your quiz preferences and get started in seconds"
      ></DocumentHeader>
      {!quiz && (
        <div>
          <h3>Generate a Quiz</h3>
          <select
            value={selectedDocumentId}
            onChange={(e) => setSelectedDocumentId(e.target.value)}
            className="border p-2"
          >
            <option value="">Select a document</option>
            {documents?.map((doc, idx) => (
              <option key={idx} value={doc.id}>
                {doc.filename}
              </option>
            ))}
          </select>
          {selectedDocument && (
            <div>
              <h4>Select Topics</h4>
              {topics.map((topic) => (
                <label key={topic} className="block">
                  <input
                    type="checkbox"
                    value={topic}
                    onChange={(e) => {
                      setSelectedTopics((prev) =>
                        e.target.checked
                          ? [...prev, topic]
                          : prev.filter((t) => t !== topic)
                      );
                    }}
                  />
                  {topic}
                </label>
              ))}
          <button
            onClick={handleGenerateQuiz}
            disabled={isGenerating || !selectedDocumentId}
            className="mt-2 bg-blue-500 text-white p-2 rounded"
          >
            {isGenerating ? "Generating..." : "Generate Quiz"}
          </button>
            </div>
          )}
        </div>
      )}

      {quiz && !session && (
        <div>
          <h3>{quiz.title}</h3>
          <p>Questions: {quiz.question_count}</p>
          <button
            onClick={handleStartSession}
            disabled={isCreatingSession}
            className="mt-2 bg-green-500 text-white p-2 rounded"
          >
            {isCreatingSession ? "Starting..." : "Start Quiz"}
          </button>
        </div>
      )}

      {quiz && session && !results && (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{quiz.questions[currentQuestionIndex].question_text}</p>
          <div>
            {quiz.questions[currentQuestionIndex].options.map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={userAnswer === option}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmitAnswer}
            disabled={isSubmitting || !userAnswer}
            className="mt-2 bg-blue-500 text-white p-2 rounded"
          >
            {isSubmitting ? "Submitting..." : "Submit Answer"}
          </button>
        </div>
      )}

      {results && (
        <div>
          <h3>Quiz Results</h3>
          <p>Score: {results.score}</p>
          <p>
            Correct Answers: {results.correct_answers}/{results.total_questions}
          </p>
          <p>Total Hints Used: {results.total_hints_used}</p>
          <p>Completed At: {results.completed_at}</p>
        </div>
      )}
    </DocumentBody>
  );
};

export default QuizComponent;

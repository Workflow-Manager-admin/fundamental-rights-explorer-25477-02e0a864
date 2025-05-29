import React from "react";

// PUBLIC_INTERFACE
/**
 * RightDetail
 * Displays detail view for a selected Fundamental Right.
 * Props:
 *   right: {
 *     title: string,
 *     description: string,
 *     example: string,
 *     quiz: [{ question, options, correctAnswerIndex, feedback }]
 *   }
 *   onBack: function - called when user clicks the 'Back' button
 * Renders:
 *   - Title, Explanation, Real-life Example, Quiz Section, Back button
 */
function RightDetail({ right, onBack }) {
  if (!right) return null;

  return (
    <div
      className="right-detail-container"
      style={{
        maxWidth: 600,
        margin: "48px auto 0 auto",
        background: "var(--secondary, #fff)",
        borderRadius: 16,
        boxShadow: "0 2px 16px rgba(25, 118, 210, 0.09)",
        padding: "32px 24px 40px 24px",
        color: "#131313"
      }}
    >
      <button
        className="btn"
        style={{
          background: "var(--primary, #1976D2)",
          color: "#fff",
          marginBottom: 24,
          padding: "10px 22px",
          borderRadius: 6,
          fontWeight: 500,
        }}
        onClick={onBack}
        aria-label="Back to Fundamental Rights List"
      >
        ← Back
      </button>
      <h2 style={{
        color: "var(--primary, #1976D2)",
        fontWeight: 700,
        fontSize: "2rem",
        marginBottom: 16
      }}>
        {right.title}
      </h2>
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontWeight: 600,
            marginBottom: 6,
            color: "#374151",
            fontSize: "1.07rem",
          }}
        >
          What it means
        </div>
        <div
          style={{
            lineHeight: 1.6,
            fontSize: "1.06rem",
            color: "#232323",
            background: "#f7faff",
            borderRadius: 7,
            padding: "14px 13px 12px 14px",
            marginBottom: 4
          }}
        >
          {right.description}
        </div>
      </div>
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            fontWeight: 600,
            marginBottom: 6,
            color: "#374151",
            fontSize: "1.07rem",
          }}
        >
          Real-life Example
        </div>
        <div
          style={{
            lineHeight: 1.45,
            fontSize: "1.04rem",
            background: "#ffeabb",
            color: "#ad6002",
            borderRadius: 6,
            padding: "12px 13px 11px 14px",
          }}
        >
          {right.example}
        </div>
      </div>
      <QuizSection quiz={right.quiz} />
    </div>
  );
}

// PUBLIC_INTERFACE
/**
 * QuizSection
 * Props: quiz: [{ question, options, correctAnswerIndex, feedback }]
 * Displays a sequence of MCQs with instant feedback.
 */
function QuizSection({ quiz = [] }) {
  // State is per-user for answers/feedback
  const [selected, setSelected] = React.useState({});
  const [showFeedback, setShowFeedback] = React.useState({});

  const handleSelect = (qIdx, optIdx) => {
    if (selected[qIdx] !== undefined) return; // One attempt per question
    setSelected(prev => ({ ...prev, [qIdx]: optIdx }));
    setShowFeedback(prev => ({ ...prev, [qIdx]: true }));
  };

  if (!quiz.length) return null;

  return (
    <div style={{ marginTop: 18, marginBottom: 6 }}>
      <div
        style={{
          fontWeight: 600,
          color: "#1976D2",
          fontSize: "1.13rem",
          marginBottom: 4,
        }}
      >
        Quiz: Test your knowledge
      </div>
      {quiz.map((q, qIdx) => (
        <div
          key={qIdx}
          style={{
            background: "#F5F7FF",
            border: "1px solid #E7ECFA",
            borderRadius: 10,
            margin: "22px 0 0 0",
            padding: "15px 13px 11px 13px",
            position: "relative"
          }}
        >
          <div style={{ marginBottom: 12, fontWeight: 500 }}>
            {qIdx + 1}. {q.question}
          </div>
          <div>
            {q.options.map((opt, optIdx) => {
              let isSelected = selected[qIdx] === optIdx;
              let isCorrect = (selected[qIdx] === optIdx) && (optIdx === q.correctAnswerIndex);

              // Color for feedback
              let feedbackColor = "";
              if (isSelected && showFeedback[qIdx]) {
                feedbackColor = optIdx === q.correctAnswerIndex
                  ? "#31A354"
                  : "#E53935";
              }

              return (
                <button
                  key={optIdx}
                  className="quiz-option-btn"
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: 7,
                    background: isSelected ? (feedbackColor || "#FFF") : "#fff",
                    color: isSelected && showFeedback[qIdx]
                      ? "#fff"
                      : "#222",
                    border: isSelected
                      ? `2.5px solid ${feedbackColor || "#1976D2"}`
                      : "1.5px solid #1976D2",
                    borderRadius: 7,
                    fontWeight: isSelected ? 600 : 500,
                    fontSize: "1rem",
                    textAlign: "left",
                    padding: "10px 12px",
                    cursor: selected[qIdx] === undefined ? "pointer" : "default",
                    transition: "background 0.16s",
                    outline: "none",
                    pointerEvents: selected[qIdx] !== undefined ? "none" : "auto"
                  }}
                  aria-label={opt}
                  tabIndex={0}
                  onClick={() => handleSelect(qIdx, optIdx)}
                  disabled={selected[qIdx] !== undefined}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {showFeedback[qIdx] && (
            <div
              style={{
                marginTop: 11,
                fontSize: "0.98rem",
                color:
                  selected[qIdx] === q.correctAnswerIndex
                    ? "#228a32"
                    : "#b31818",
                background: selected[qIdx] === q.correctAnswerIndex
                  ? "#eafbe6"
                  : "#fff0ee",
                padding: "9px 10px 7px 11px",
                borderRadius: 6,
                minHeight: 24,
              }}
              aria-live="polite"
            >
              {q.feedback[selected[qIdx]]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RightDetail;

import React from "react";

// PUBLIC_INTERFACE
/**
 * Quiz
 * Props:
 *   quiz: Array of questions, each with { question, options, correctAnswerIndex, feedback }
 * Renders a list of MCQs with selectable options. 
 * On selection, provides instant feedback and indicates the correct answer.
 */
function Quiz({ quiz = [] }) {
  // User answer and feedback state per question
  const [selected, setSelected] = React.useState({});
  const [showFeedback, setShowFeedback] = React.useState({});

  // Handle user selecting an answer
  const handleSelect = (qIdx, optIdx) => {
    if (selected[qIdx] !== undefined) return; // Only one attempt per question
    setSelected(prev => ({ ...prev, [qIdx]: optIdx }));
    setShowFeedback(prev => ({ ...prev, [qIdx]: true }));
  };

  if (!quiz || quiz.length === 0) return null;

  return (
    <div style={{ marginTop: 18, marginBottom: 6 }}>
      <div
        style={{
          fontWeight: 600,
          color: "#1976D2",
          fontSize: "1.15rem",
          marginBottom: 6,
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
              const isSelected = selected[qIdx] === optIdx;
              const isCorrect = q.correctAnswerIndex === optIdx;
              const answered = selected[qIdx] !== undefined;
              let feedbackColor = "";
              if (isSelected && showFeedback[qIdx]) {
                feedbackColor = isCorrect ? "#31A354" : "#E53935";
              }
              // Highlight correct answer after selection
              let highlight =
                answered && isCorrect
                  ? "2.5px solid #31A354"
                  : isSelected && feedbackColor
                  ? `2.5px solid ${feedbackColor}` 
                  : "1.5px solid #1976D2";
              let background =
                answered && isCorrect
                  ? "#eafbe6"
                  : isSelected && feedbackColor
                  ? feedbackColor
                  : "#fff";

              let textColor =
                isSelected && showFeedback[qIdx]
                  ? "#fff"
                  : answered && isCorrect
                  ? "#228a32"
                  : "#222";
              return (
                <button
                  key={optIdx}
                  className="quiz-option-btn"
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: 7,
                    background: background,
                    color: textColor,
                    border: highlight,
                    borderRadius: 7,
                    fontWeight: isSelected ? 600 : 500,
                    fontSize: "1rem",
                    textAlign: "left",
                    padding: "10px 12px",
                    cursor: answered ? "not-allowed" : "pointer",
                    transition: "background 0.16s, border 0.16s",
                    outline: "none",
                    pointerEvents: answered ? "none" : "auto"
                  }}
                  aria-label={opt}
                  tabIndex={0}
                  onClick={() => handleSelect(qIdx, optIdx)}
                  disabled={answered}
                >
                  {opt}
                  {/* Mark correct answer with a checkmark after answering */}
                  {answered && isCorrect ? (
                    <span
                      style={{
                        float: "right",
                        color: "#31A354",
                        fontWeight: 700,
                        fontSize: "1.10em"
                      }}
                      aria-label="Correct answer"
                    >
                      ✓
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
          {/* Feedback message */}
          {showFeedback[qIdx] && (
            <div
              style={{
                marginTop: 11,
                fontSize: "0.98rem",
                color:
                  selected[qIdx] === q.correctAnswerIndex
                    ? "#228a32"
                    : "#b31818",
                background:
                  selected[qIdx] === q.correctAnswerIndex
                    ? "#eafbe6"
                    : "#fff0ee",
                padding: "9px 10px 7px 11px",
                borderRadius: 6,
                minHeight: 24,
              }}
              aria-live="polite"
            >
              {q.feedback[selected[qIdx]]}
              {selected[qIdx] !== q.correctAnswerIndex && (
                <span style={{ marginLeft: 10, fontWeight: 600, color: "#1976D2" }}>
                  Correct answer: "{q.options[q.correctAnswerIndex]}"
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Quiz;

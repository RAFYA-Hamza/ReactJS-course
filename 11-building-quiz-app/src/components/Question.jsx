import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer.jsx";

const TIMER = 10000;

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer onTimeout={onSkipAnswer} timeout={TIMER} />
      <h2>{questionText}</h2>
      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

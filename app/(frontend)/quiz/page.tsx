"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MultipleChoiceQuestion } from "@/components/features/multiple-choice-question";
import { QuestionSelectionGrid } from "@/components/features/question-selection-grid";
import { useQuizQuery } from "@/hooks/queries/use-quiz-query";
import { useQuestionQuery } from "@/hooks/queries/use-question-query";

function QuizContent() {
  const quizId = useSearchParams().get("quizId");
  const { data: quiz, error: quizError, isLoading: isQuizLoading } = useQuizQuery(quizId);

  const [selectedQuestionNumber, setSelectedQuestionNumber] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);

  const activeQuestionNumber = selectedQuestionNumber ?? (quiz ? 1 : null);
  const selectedQuestionId =
    quiz && activeQuestionNumber !== null ? quiz.questionIds[activeQuestionNumber - 1] : null;
  const {
    data: question,
    error: questionError,
    isLoading: isQuestionLoading,
  } = useQuestionQuery(selectedQuestionId ?? null);

  function handleSelectQuestion(questionNumber: number) {
    setSelectedQuestionNumber(questionNumber);
    setSelectedOption(undefined);
  }

  function handleSubmitAnswer() {
    if (!quiz || activeQuestionNumber === null) return;

    const nextQuestionNumber = activeQuestionNumber + 1;
    if (nextQuestionNumber <= quiz.totalQuestions) {
      handleSelectQuestion(nextQuestionNumber);
    }
  }

  function handlePreviousQuestion() {
    if (!quiz || activeQuestionNumber === null) return;

    const previousQuestionNumber = activeQuestionNumber - 1;
    if (previousQuestionNumber >= 1) {
      handleSelectQuestion(previousQuestionNumber);
    }
  }

  return (
    <div className="flex flex-row flex-1 items-start justify-center gap-4 bg-zinc-50 p-4 font-sans dark:bg-black px-20">
      <div className="flex flex-col flex-1 gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {!quizId && <p className="text-sm text-zinc-500">No quiz selected.</p>}
        {quizError && <p className="text-sm text-red-600 dark:text-red-400">{quizError}</p>}
        {quizId && isQuizLoading && <p className="text-sm text-zinc-500">Loading quiz...</p>}
        {quiz && (
          <>
            <h1 className="font-medium">{quiz.title}</h1>
            <QuestionSelectionGrid
              totalQuestions={quiz.totalQuestions}
              selectedQuestionNumber={activeQuestionNumber}
              onSelectQuestion={handleSelectQuestion}
            />
          </>
        )}
      </div>
      <div className="flex flex-col flex-2 gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {!activeQuestionNumber && !questionError && (
          <p className="text-sm text-zinc-500">Select a question to begin.</p>
        )}
        {questionError && <p className="text-sm text-red-600 dark:text-red-400">{questionError}</p>}
        {activeQuestionNumber && isQuestionLoading && (
          <p className="text-sm text-zinc-500">Loading question...</p>
        )}
        {question && (
          <MultipleChoiceQuestion
            questionNumber={activeQuestionNumber ?? 1}
            question={question.question}
            options={question.options}
            selectedOption={selectedOption}
            isFirstQuestion={activeQuestionNumber === 1}
            isLastQuestion={activeQuestionNumber === quiz?.totalQuestions}
            onSelectOption={setSelectedOption}
            onPrevious={handlePreviousQuestion}
            onSubmit={handleSubmitAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default function Quiz() {
  return (
    <Suspense fallback={null}>
      <QuizContent />
    </Suspense>
  );
}

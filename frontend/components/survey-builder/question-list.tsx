"use client";

import { Question } from "@/lib/survey-types";
import { SortableQuestion } from "./sortable-question";

interface QuestionListProps {
  questions: Question[];
  onUpdate: (id: string, updates: Partial<Question>) => void;
  onDelete: (id: string) => void;
}

export function QuestionList({
  questions,
  onUpdate,
  onDelete,
}: QuestionListProps) {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <SortableQuestion
          key={question.id}
          question={question}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
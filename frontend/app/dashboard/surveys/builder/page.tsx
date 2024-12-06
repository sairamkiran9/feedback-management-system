"use client";

import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { QuestionList } from "@/components/survey-builder/question-list";
import { QuestionTypeSelector } from "@/components/survey-builder/question-type-selector";
import { SurveyPreview } from "@/components/survey-builder/survey-preview";
import { Question, QuestionType } from "@/lib/survey-types";

export default function SurveyBuilderPage() {
  const [title, setTitle] = useState("Untitled Survey");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showTypeSelector, setShowTypeSelector] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = questions.findIndex((q) => q.id === active.id);
      const newIndex = questions.findIndex((q) => q.id === over.id);
      setQuestions(arrayMove(questions, oldIndex, newIndex));
    }
  };

  const addQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: `question-${questions.length + 1}`,
      type,
      title: `Question ${questions.length + 1}`,
      required: false,
      options: type === "multiple_choice" ? ["Option 1", "Option 2"] : [],
    };
    setQuestions([...questions, newQuestion]);
    setShowTypeSelector(false);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Survey Builder</h2>
        <Button>Save Survey</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 space-y-6">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl font-semibold"
          />

          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={questions.map((q) => q.id)}>
              <QuestionList
                questions={questions}
                onUpdate={updateQuestion}
                onDelete={deleteQuestion}
              />
            </SortableContext>
          </DndContext>

          {showTypeSelector ? (
            <QuestionTypeSelector
              onSelect={addQuestion}
              onCancel={() => setShowTypeSelector(false)}
            />
          ) : (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowTypeSelector(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Question
            </Button>
          )}
        </Card>

        <div className="sticky top-8">
          <SurveyPreview title={title} questions={questions} />
        </div>
      </div>
    </div>
  );
}
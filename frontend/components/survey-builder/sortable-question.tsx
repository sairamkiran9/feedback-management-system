"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { GripVertical, Trash2 } from "lucide-react";
import { Question } from "@/lib/survey-types";

interface SortableQuestionProps {
  question: Question;
  onUpdate: (id: string, updates: Partial<Question>) => void;
  onDelete: (id: string) => void;
}

export function SortableQuestion({
  question,
  onUpdate,
  onDelete,
}: SortableQuestionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: question.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className="p-4 space-y-4"
    >
      <div className="flex items-start gap-4">
        <button
          {...attributes}
          {...listeners}
          className="mt-3 cursor-grab touch-none"
        >
          <GripVertical className="h-4 w-4 text-muted-foreground" />
        </button>
        <div className="flex-1 space-y-4">
          <Input
            value={question.title}
            onChange={(e) =>
              onUpdate(question.id, { title: e.target.value })
            }
            placeholder="Question text"
          />
          {question.type === "long_text" && (
            <Textarea
              value={question.description || ""}
              onChange={(e) =>
                onUpdate(question.id, { description: e.target.value })
              }
              placeholder="Description (optional)"
            />
          )}
          {(question.type === "multiple_choice" ||
            question.type === "single_choice") && (
            <div className="space-y-2">
              {question.options?.map((option, index) => (
                <Input
                  key={index}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(question.options || [])];
                    newOptions[index] = e.target.value;
                    onUpdate(question.id, { options: newOptions });
                  }}
                  placeholder={`Option ${index + 1}`}
                />
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onUpdate(question.id, {
                    options: [...(question.options || []), ""],
                  })
                }
              >
                Add Option
              </Button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch
              checked={question.required}
              onCheckedChange={(checked) =>
                onUpdate(question.id, { required: checked })
              }
            />
            <span className="text-sm">Required</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(question.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
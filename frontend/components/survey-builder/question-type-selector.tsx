"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlignLeft,
  CheckSquare,
  Circle,
  MessageSquare,
  Star,
  X,
} from "lucide-react";
import { QuestionType } from "@/lib/survey-types";

interface QuestionTypeSelectorProps {
  onSelect: (type: QuestionType) => void;
  onCancel: () => void;
}

const questionTypes = [
  {
    type: "short_text" as QuestionType,
    label: "Short Text",
    icon: MessageSquare,
    description: "Short answer text question",
  },
  {
    type: "long_text" as QuestionType,
    label: "Long Text",
    icon: AlignLeft,
    description: "Long answer text question",
  },
  {
    type: "multiple_choice" as QuestionType,
    label: "Multiple Choice",
    icon: CheckSquare,
    description: "Multiple choice question",
  },
  {
    type: "single_choice" as QuestionType,
    label: "Single Choice",
    icon: Circle,
    description: "Single choice question",
  },
  {
    type: "rating" as QuestionType,
    label: "Rating",
    icon: Star,
    description: "Rating scale question",
  },
];

export function QuestionTypeSelector({
  onSelect,
  onCancel,
}: QuestionTypeSelectorProps) {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Select Question Type</h3>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {questionTypes.map((type) => (
          <Button
            key={type.type}
            variant="outline"
            className="flex flex-col h-auto p-4 gap-2"
            onClick={() => onSelect(type.type)}
          >
            <type.icon className="h-6 w-6" />
            <span>{type.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
}
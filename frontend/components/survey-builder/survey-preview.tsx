"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Question } from "@/lib/survey-types";

interface SurveyPreviewProps {
  title: string;
  questions: Question[];
}

export function SurveyPreview({ title, questions }: SurveyPreviewProps) {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">Preview Mode</p>
        </div>

        {questions.map((question) => (
          <div key={question.id} className="space-y-4">
            <Label className="text-base font-medium">
              {question.title}
              {question.required && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </Label>

            {question.type === "short_text" && (
              <Input disabled placeholder="Short answer text" />
            )}

            {question.type === "long_text" && (
              <Textarea disabled placeholder="Long answer text" />
            )}

            {question.type === "single_choice" && (
              <RadioGroup disabled>
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                    <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {question.type === "multiple_choice" && (
              <div className="space-y-2">
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox disabled id={`${question.id}-${index}`} />
                    <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                  </div>
                ))}
              </div>
            )}

            {question.type === "rating" && (
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Label
                    key={value}
                    className="border rounded-md p-2 cursor-not-allowed opacity-50"
                  >
                    {value}
                  </Label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
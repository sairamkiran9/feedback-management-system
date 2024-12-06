"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Question } from "@/lib/survey-types";
import { SurveyQuestion } from "@/components/survey/survey-question";

// Mock survey data (replace with actual API call)
const mockSurvey = {
  id: "1",
  title: "Customer Satisfaction Survey",
  description: "Help us improve our services by providing your feedback.",
  questions: [
    {
      id: "q1",
      type: "single_choice",
      title: "How satisfied are you with our service?",
      required: true,
      options: [
        "Very Satisfied",
        "Satisfied",
        "Neutral",
        "Dissatisfied",
        "Very Dissatisfied"
      ]
    },
    {
      id: "q2",
      type: "multiple_choice",
      title: "Which features do you use most? (Select all that apply)",
      required: true,
      options: [
        "Survey Builder",
        "Analytics Dashboard",
        "Response Collection",
        "Report Generation"
      ]
    },
    {
      id: "q3",
      type: "rating",
      title: "How likely are you to recommend our platform?",
      required: true
    },
    {
      id: "q4",
      type: "long_text",
      title: "What improvements would you suggest for our platform?",
      required: false
    }
  ] as Question[]
};

export default function SurveyParticipationPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const progress = ((currentQuestion + 1) / mockSurvey.questions.length) * 100;

  const form = useForm({
    resolver: zodResolver(
      z.object(
        mockSurvey.questions.reduce((acc, question) => {
          acc[question.id] = question.required
            ? question.type === "multiple_choice"
              ? z.array(z.string()).min(1, "Please select at least one option")
              : z.string().min(1, "This field is required")
            : question.type === "multiple_choice"
            ? z.array(z.string()).optional()
            : z.string().optional();
          return acc;
        }, {} as Record<string, any>)
      )
    ),
  });

  const onSubmit = (data: any) => {
    console.log("Survey responses:", data);
    toast.success("Survey submitted successfully!");
  };

  const nextQuestion = async () => {
    const questionId = mockSurvey.questions[currentQuestion].id;
    const isValid = await form.trigger(questionId);
    
    if (isValid) {
      if (currentQuestion < mockSurvey.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        form.handleSubmit(onSubmit)();
      }
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-muted/10 py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">{mockSurvey.title}</h1>
              <p className="text-muted-foreground mt-2">
                {mockSurvey.description}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Question {currentQuestion + 1} of {mockSurvey.questions.length}</span>
                <span>{Math.round(progress)}% completed</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <form className="space-y-8">
              <SurveyQuestion
                question={mockSurvey.questions[currentQuestion]}
                form={form}
              />

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={nextQuestion}
                >
                  {currentQuestion === mockSurvey.questions.length - 1
                    ? "Submit"
                    : "Next"}
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
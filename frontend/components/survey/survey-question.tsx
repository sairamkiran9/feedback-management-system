"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Question } from "@/lib/survey-types";
import { UseFormReturn } from "react-hook-form";

interface SurveyQuestionProps {
  question: Question;
  form: UseFormReturn<any>;
}

export function SurveyQuestion({ question, form }: SurveyQuestionProps) {
  if (question.type === "rating") {
    return (
      <FormField
        control={form.control}
        name={question.id}
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel>
              {question.title}
              {question.required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
            <FormControl>
              <div className="flex gap-4 justify-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Label
                    key={value}
                    className={`border rounded-md p-4 cursor-pointer hover:bg-muted transition-colors ${
                      field.value === value.toString() ? "border-primary" : ""
                    }`}
                    onClick={() => field.onChange(value.toString())}
                  >
                    {value}
                  </Label>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  if (question.type === "multiple_choice") {
    return (
      <FormField
        control={form.control}
        name={question.id}
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel>
              {question.title}
              {question.required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
            <FormControl>
              <div className="space-y-2">
                {question.options?.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      checked={(field.value || []).includes(option)}
                      onCheckedChange={(checked) => {
                        const value = field.value || [];
                        if (checked) {
                          field.onChange([...value, option]);
                        } else {
                          field.onChange(value.filter((v: string) => v !== option));
                        }
                      }}
                    />
                    <Label>{option}</Label>
                  </div>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  if (question.type === "single_choice") {
    return (
      <FormField
        control={form.control}
        name={question.id}
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel>
              {question.title}
              {question.required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-2"
              >
                {question.options?.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} />
                    <Label>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  if (question.type === "long_text") {
    return (
      <FormField
        control={form.control}
        name={question.id}
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel>
              {question.title}
              {question.required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
            <FormControl>
              <Textarea {...field} className="min-h-[150px]" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <FormField
      control={form.control}
      name={question.id}
      render={({ field }) => (
        <FormItem className="space-y-4">
          <FormLabel>
            {question.title}
            {question.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
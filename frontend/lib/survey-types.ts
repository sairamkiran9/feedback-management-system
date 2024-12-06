export type QuestionType = "short_text" | "long_text" | "multiple_choice" | "single_choice" | "rating";

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
  description?: string;
}
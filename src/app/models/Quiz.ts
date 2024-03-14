export interface Quiz {
    id: number;
    title: string;
    description: string;
    questions: QuizQuestion[];
}
    
export interface QuizQuestion {
     id: number;
     text: string;
     type: QuizQuestionType;
     options?: string[]; // Only applicable for multiple choice questions
     correctAnswer?: string | boolean; // For true/false questions, this can be a boolean
}
    
export enum QuizQuestionType {
     STRING = 'string',
     MULTIPLE_CHOICE = 'multiple_choice',
     TRUE_FALSE = 'true_false'
}
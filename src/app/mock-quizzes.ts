import { Quiz, QuizQuestion, QuizQuestionType } from "./models/Quiz";

export const quizzes: Quiz[] = [
    {
       id: 1,
       title: 'U.S. Geography Quiz',
       description: 'Test your knowledge about the United States.',
       questions: [
         {
           id: 1,
           text: 'What is the capital of the Illinois?',
           type: QuizQuestionType.STRING,
           correctAnswer: 'Springfield',
         },
         {
           id: 2,
           text: 'Which state is known as the "Golden State"?',
           type: QuizQuestionType.MULTIPLE_CHOICE,
           options: ['California', 'New York', 'Texas'],
           correctAnswer: 'California',
         },
         {
           id: 3,
           text: 'Is the Iowa east of the Mississippi River?',
           type: QuizQuestionType.TRUE_FALSE,
           correctAnswer: false,
         },
       ],
    },
    {
       id: 2,
       title: 'Angular Programming Quiz',
       description: 'Test your Angular knowledge.',
       questions: [
         {
           id: 1,
           text: 'What is the primary language used in Angular?',
           type: QuizQuestionType.STRING,
           correctAnswer: 'TypeScript',
         },
         {
           id: 2,
           text: 'Which of the following is not a core module in Angular?',
           type: QuizQuestionType.MULTIPLE_CHOICE,
           options: ['HttpClientModule', 'FormsModule', 'RouterModule', 'CustomModule'],
           correctAnswer: 'CustomModule',
         },
         {
           id: 3,
           text: 'Is Angular a TypeScript framework?',
           type: QuizQuestionType.TRUE_FALSE,
           correctAnswer: true, // Angular is a framework
         },
       ],
    },
   ];

const jsonQuizzes = {
    "quizzes": [
        {
           "id": 1,
           "title": "U.S. Geography Quiz",
           "description": "Test your knowledge about the United States.",
           "questions": [
             {
               "id": 1,
               "text": "What is the capital of the Illinois?",
               "type": "STRING",
               "correctAnswer": "Springfield"
             },
             {
               "id": 2,
               "text": "Which state is known as the \"Golden State\"?",
               "type": "MULTIPLE_CHOICE",
               "options": ["California", "New York", "Texas"],
               "correctAnswer": "California"
             },
             {
               "id": 3,
               "text": "Is the Iowa east of the Mississippi River?",
               "type": "TRUE_FALSE",
               "correctAnswer": false
             }
           ]
        },
        {
           "id": 2,
           "title": "Angular Programming Quiz",
           "description": "Test your Angular knowledge.",
           "questions": [
             {
               "id": 1,
               "text": "What is the primary language used in Angular?",
               "type": "STRING",
               "correctAnswer": "TypeScript"
             },
             {
               "id": 2,
               "text": "Which of the following is not a core module in Angular?",
               "type": "MULTIPLE_CHOICE",
               "options": ["HttpClientModule", "FormsModule", "RouterModule", "CustomModule"],
               "correctAnswer": "CustomModule"
             },
             {
               "id": 3,
               "text": "Is Angular a TypeScript framework?",
               "type": "TRUE_FALSE",
               "correctAnswer": true
             }
           ]
        }
    ]
   }
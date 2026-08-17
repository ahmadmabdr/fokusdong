import type { Quiz } from "@/lib/types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "geography-basics",
    title: "Geography Basics",
    description: "Test your knowledge of world capitals and geography.",
    questions: [
      {
        id: "geography-basics-1",
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2,
      },
      {
        id: "geography-basics-2",
        question: "Which continent is Egypt located in?",
        options: ["Asia", "Africa", "South America", "Europe"],
        correctAnswer: 1,
      },
      {
        id: "geography-basics-3",
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        id: "geography-basics-4",
        question: "Which country has the largest population?",
        options: ["India", "United States", "China", "Indonesia"],
        correctAnswer: 2,
      },
      {
        id: "geography-basics-5",
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
      },
    ],
    totalQuestions: 5,
  },
  {
    id: "science-fundamentals",
    title: "Science Fundamentals",
    description: "A quick quiz covering basic science concepts.",
    questions: [
      {
        id: "science-fundamentals-1",
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: 0,
      },
      {
        id: "science-fundamentals-2",
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        id: "science-fundamentals-3",
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        id: "science-fundamentals-4",
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correctAnswer: 2,
      },
      {
        id: "science-fundamentals-5",
        question: "What force pulls objects toward the Earth?",
        options: ["Magnetism", "Gravity", "Friction", "Tension"],
        correctAnswer: 1,
      },
    ],
    totalQuestions: 5,
  },
];

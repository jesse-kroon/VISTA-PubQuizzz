const questions = [
    // Easy Questions
    { difficulty: 'easy', category: 'Math', question: 'What is 5 + 3?', options: ['7', '8', '9'], answer: '8' },
    { difficulty: 'easy', category: 'Science', question: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide'], answer: 'Carbon Dioxide' },
    { difficulty: 'easy', category: 'Geography', question: 'Which continent is Egypt located in?', options: ['Asia', 'Africa', 'Europe'], answer: 'Africa' },
    { difficulty: 'easy', category: 'History', question: 'Who was the 16th President of the USA?', options: ['George Washington', 'Abraham Lincoln', 'John Adams'], answer: 'Abraham Lincoln' },
    { difficulty: 'easy', category: 'Literature', question: 'Who wrote "Harry Potter"?', options: ['J.K. Rowling', 'J.R.R. Tolkien', 'George Orwell'], answer: 'J.K. Rowling' },

    // Medium Questions
    { difficulty: 'medium', category: 'Math', question: 'What is the square root of 81?', options: ['7', '9', '11'], answer: '9' },
    { difficulty: 'medium', category: 'Science', question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Gd'], answer: 'Au' },
    { difficulty: 'medium', category: 'Geography', question: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze'], answer: 'Nile' },
    { difficulty: 'medium', category: 'History', question: 'Who was the British Prime Minister during WWII?', options: ['Winston Churchill', 'Neville Chamberlain', 'Margaret Thatcher'], answer: 'Winston Churchill' },
    { difficulty: 'medium', category: 'Literature', question: 'Who wrote "Pride and Prejudice"?', options: ['Charlotte Bronte', 'Jane Austen', 'Charles Dickens'], answer: 'Jane Austen' },

    // Hard Questions
    { difficulty: 'hard', category: 'Math', question: 'What is the value of pi to four decimal places?', options: ['3.1415', '3.1416', '3.1420'], answer: '3.1416' },
    { difficulty: 'hard', category: 'Science', question: 'What is the second most abundant element in the Earth’s atmosphere?', options: ['Oxygen', 'Nitrogen', 'Argon'], answer: 'Oxygen' },
    { difficulty: 'hard', category: 'Geography', question: 'What country has the largest population in the world?', options: ['India', 'China', 'USA'], answer: 'China' },
    { difficulty: 'hard', category: 'History', question: 'Who was the ruler of England during the Spanish Armada?', options: ['Henry VIII', 'Elizabeth I', 'James I'], answer: 'Elizabeth I' },
    { difficulty: 'hard', category: 'Literature', question: 'What year was "Moby Dick" published?', options: ['1851', '1847', '1853'], answer: '1851' },
    { difficulty: 'hard', category: 'Software Development'}
];

let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('startButton').addEventListener('click', startGame);
    document.getElementById('restartButton').addEventListener('click', restartQuiz);
    document.getElementById('resetButton').addEventListener('click', restartQuiz);
});

function startGame() {
    const difficulty = document.getElementById('difficulty').value;
    filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('main').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionData = filteredQuestions[currentQuestionIndex];
    
    // Update question text
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('category').textContent = questionData.category;

    // Display options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('optionButton')
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionData = filteredQuestions[currentQuestionIndex];
    if (selectedOption === questionData.answer) score++;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('score').textContent = `${score}/${filteredQuestions.length}`;
}

function restartQuiz() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

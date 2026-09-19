console.log('connect!')

// 1. const, let
let generationCount = 0;

const BASE_STUDENT = {
    firstName: "Ім'я студента",
    lastName: "Прізвище студента",
    course: "Назва курсу",
}

const THEME_COLORS = {
    blue: "#250a7f",
    green: "#198b2c",
    red: "#922424",
    amber: "#ff6b6b",
}

// посилання на елементи
const btnGenerate = document.getElementById("generate-btn");

const inpFirst = document.getElementById("inp-first");
const inpLast = document.getElementById("inp-last");
const inpCourse = document.getElementById("inp-course");
const inpScore = document.getElementById("inp-score");
const inpTheme = document.getElementById("inp-theme");

const scoreOut = document.getElementById("score-out");
const profileContainer = document.getElementById("profile-container");

// стрілочна функція | оновлення даних 
inpScore.addEventListener('input', () => {
    scoreOut.textContent = inpScore.value;
});


// допоміжна ф-я для обчислення оцінки
// const calcGrade1 = (score) => {
//     if (score >= 90) return "А (Відмінно)"
//     else if (score >= 75) return "B (Добре)"
//     else if (score >= 60) return "C (Задовільно)"
//     else return "F (Незадовільно)";
// }

const calcGrade = (score) => 
    score >= 90 ? "А (Відмінно)":
    score >= 75 ? "B (Добре)":
    score >= 60 ? "C (Задовільно)":
                  "F (Незадовільно)";


const processStudentData = (student, score = 0, theme = 'blue') => {
    generationCount ++;

    const updateStudent = {
        ...student,
        curentScore: score,
        isPassed: score >= 60,
        grade: calcGrade(score),
        theme,                      // theme: theme
        generationCount,
    }

    return updateStudent;
} 

const renderCard = (studentObj) => {
    const {
        firstName,
        lastName,
        course,
        curentScore,
        isPassed,
        grade,
        them,
        generationCount: count,
    } = studentObj;

    const accentColor = THEME_COLORS[theme] ?? THEME_COLORS.blue;

    const initials = `${firstName[0]}${lastName[0]}`;

    const cardHTML = `
    <div class="card">
      <div class="card-accent" style="background: ${accentColor} "></div>
      <div class="card-body">
        <div class="card-header">
          <div class="avatar" style="color: ${accentColor} ; border: 2px solid ${accentColor} 40">
            ${initials}
          </div>
          <div>
            <div class="card-name"> ${firstName} </div>
            <div class="card-course"> ${course} </div>
          </div>
        </div>

        <div class="card-details">
          <div>
            <div class="detail-row">
              <span class="detail-label">Бал</span>
              <span class="detail-value" style="color: ${accentColor} ">
                ${currentScore} / 100
              </span>
            </div>
            <div class="score-bar-wrap" style="margin-top:6px">
              <div class="score-bar" style="width: ${curentScore}  %; background: ${accentColor} "></div>
            </div>
          </div>

          <div class="detail-row">
            <span class="detail-label">Оцінка</span>
            <span class="detail-value"> ${grade} </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">Статус</span>
            <span class="status-badge ${isPassed ? 'pass': 'fail'}">
              ${isPassed ? 'CКЛАДЕНО': 'НЕ СКЛАДЕНО'}
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">Тема</span>
            <span class="detail-value"> ${theme} </span>
          </div>
        </div>

        <div class="card-footer">
          Генерація № ${count}
        </div>
      </div>
    </div>  `

}


// головний обробник 
btnGenerate.addEventListener('click', () => {
    console.log(e);

    const score = Number(inpScore.value);
    const theme = inpTheme.value;

    const studentFromForm = {
        ...BASE_STUDENT,
        firstName: inpFirst.value || BASE_STUDENT.firstName,
        lastName: inpLast.value || BASE_STUDENT.lastName,
        course: inpCourse.value || BASE_STUDENT.course,

    }

    const profile = processStudentData(studentFromForm, sc)

    renderCard(profile);

});


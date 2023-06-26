const _shuffleArray = (array) => {
    let refOldArray = [...array]
    let newArray = []

    while (refOldArray.length > 0) {
        let randIndex = Math.floor(Math.random() * refOldArray.length)
        let itemToAdd = refOldArray.splice(randIndex, 1)[0]
        newArray.push(itemToAdd)
    }

    return newArray
}

export class TriviaQuestion {
    constructor(data) {
        this.type = data.type
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get QuestionHTML() {
        return `
        <section class="row">
            <div class="col-10 m-auto question-card">
                <p>${this.question}</p>
            </div>
        </section>
      `
    }

    get AnswersHTML() {
        let answerArray = _shuffleArray([this.correctAnswer, ...this.incorrectAnswers])
        let answerTemplate = `
        <section class="row">
            <div class="col-10 m-auto">
                <section class="row py-5 justify-content-around">
        `

        for (let answerIndex = 0; answerIndex < answerArray.length; answerIndex++) {
            answerTemplate += `
            <div onclick=${answerArray[answerIndex] == this.correctAnswer ? "app.TriviaController.selectedCorrectAnswer()" : "app.TriviaController.selectedInorrectAnswer()"} 
            class="col-5 answer-card">
                    <p>${answerArray[answerIndex]}</p>
            </div>
            `

            if (answerIndex % 2 == 0 && answerIndex < 4 && answerIndex > 0) {
                answerTemplate += `
                        </section>
                    </div>
                </section>
                <section class="row">
                    <div class="col-10 m-auto">
                        <section class="row py-5 justify-content-around">
                `
            }
        }

        answerTemplate += `
                </section>
            </div>
        </section>
        `

        return answerTemplate

        // switch (this.type) {
        //     case 'multiple':
        //         return `
        //         <section class="row">
        //             <div class="col-10 m-auto">
        //                 <section class="row py-5 justify-content-around">
        //                     <div onclick="app.TriviaController.selectedIncorrectAnswer()" class="col-5 answer-card">
        //                         <p>${this.incorrectAnswers[0]}</p>
        //                     </div>
        //                     <div onclick="app.TriviaController.selectedIncorrectAnswer()" class="col-5 answer-card">
        //                         <p>${this.incorrectAnswers[1]}</p>
        //                     </div>
        //                 </section>
        //             </div>
        //         </section>
        //         <section class="row">
        //         <div class="col-10 m-auto">
        //             <section class="row py-1 justify-content-around">
        //             <div onclick="app.TriviaController.selectedIncorrectAnswer()" class="col-5 answer-card">
        //                 <p>${this.incorrectAnswers[2]}</p>
        //             </div>
        //             <div onclick="app.TriviaController.selectedCorrectAnswer()" class="col-5 answer-card">
        //                 <p>${this.correctAnswer}</p>
        //             </div>
        //             </section>
        //         </div>
        //         </section>
        //         `
        //     case 'boolean':
        //         return `
        //         <section class="row">
        //             <div class="col-10 m-auto">
        //                 <section class="row py-5 justify-content-around">
        //                     <div onclick="app.TriviaController.selectedCorrectAnswer()"  class="col-5 answer-card">
        //                         <p>${this.correctAnswer}</p>
        //                     </div>
        //                     <div onclick="app.TriviaController.selectedIncorrectAnswer()" class="col-5 answer-card">
        //                         <p>${this.incorrectAnswers[0]}</p>
        //                     </div>
        //                 </section>
        //             </div>
        //         </section>
        //         `
        // }
    }
}

const test = `
{"response_code":0,
"results":[
    {"category":"Entertainment: Video Games",
    "type":"boolean",
    "difficulty":"easy",
    "question":"The main character in the &quot;Half-Life&quot; franchise is named Morgan Freeman.",
    "correct_answer":"False",
    "incorrect_answers":["True"]}
    ]
}
`
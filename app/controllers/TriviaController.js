import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

const _drawTriviaQuestion = () => {
    let template = ''
    template += AppState.activeTriviaQuestion.QuestionHTML
    template += AppState.activeTriviaQuestion.AnswersHTML
    setHTML('router-view', template)
}

export class TriviaController {
    constructor() {
        console.log('Trivia controller loaded')
        this.getTriviaQuestion()
        AppState.on('activeTriviaQuestion', _drawTriviaQuestion)
    }

    getTriviaQuestion() {
        triviaService.getTriviaQuestion()
    }

    selectedCorrectAnswer() {
        console.log('correct')
        Pop.success('You got it right! 👍')
        this.getTriviaQuestion()
    }

    selectedIncorrectAnswer() {
        console.log('incorrect')
        Pop.error('You got it wrong! 😓')
        this.getTriviaQuestion()
    }
}

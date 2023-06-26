import { AppState } from "../AppState.js"
import { TriviaQuestion } from "../models/TriviaQuestion.js"
import { triviaApi } from "./TriviaAxiosService.js"

class TriviaService {
    getTriviaQuestion() {
        triviaApi.get()
            .then(res => {
                console.log(res.data.results[0])
                AppState.activeTriviaQuestion = new TriviaQuestion(res.data.results[0])
            })
    }

}

export const triviaService = new TriviaService()
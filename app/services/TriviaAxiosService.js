
export const triviaApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1&category=15',
    timeout: 8000
})

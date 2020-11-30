const express = require("express")
const { response } = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT||3000
const quizzesdata = require("./data")
const scores = []
console.log("quizzes:",quizzesdata.quizzes)
console.log("questions:",quizzesdata.questions)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/quizzes', (request, response) => {
    response.json(quizzesdata.quizzes)
})

app.get('/quiz/:id',(request, response) => {
    let found = quizzesdata.questions["Quiz"+request.params.id]
    response.json(found)
})
app.post('/score', (request, response) => {
    console.log("score:", request.body)
    scores.push(request.body)
    console.log("Update scores:", scores)
    response.json({message: 'The score saved'})

}
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
const {Configuration,OpenAIApi} = require("openai")
require('dotenv').config
const configuration = new Configuration({
    apiKey: "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"
})
const openai = new OpenAIApi(configuration)
async function runCompletion(){
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:"How are you today?"
    })
    console.log(completion.data.choices[0].text)
}
runCompletion()
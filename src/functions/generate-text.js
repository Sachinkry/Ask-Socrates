import axios from 'axios'
import { addBotChat } from './addToChatbox'

export default async function generateText(userMessage) {
    try {
        // path to api is: ask-socrates\src\pages\api\generate-text.js
        // so add this in post: 
        const response = await axios.post('/api/generate-text-api',{query : userMessage})
        
        const answer = response.data.basePromptOutput
        // console.log("answer:", answer)
        return answer
    } catch (error) {
        console.error(error)
    }
}
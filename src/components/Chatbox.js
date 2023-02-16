import React, { useState } from 'react' 
import {addToChat} from '@/functions/addToChatbox'
import {addUserChat, addBotChat} from '@/functions/addToChatbox'
import generateText from '@/functions/generate-text'

export default function Chatbox() {
  
    const [userMessage, setUserMessage] = useState('')
    const [botMessage, setBotMessage] = useState('')

    const textToSpeech = async (text) => {
      say.speak('Hello, I am Socrates. I am here to help you learn more about our products.')

      say.stop()
    }

    // take the message from input and set it to userMessage
    const handleInputChange = (e) => {
        setUserMessage(e.target.value)
    }


    // print the message from input into chatbox
    const handleSubmit = async (e) => {
        e.preventDefault()
        // add the value to chatbox
        addUserChat(userMessage)
        textToSpeech(userMessage)
        const botMsg = await generateText(userMessage)
        addBotChat(botMsg)
        // clear the input
        setUserMessage('')
    }

    return (
        <div className="flex flex-col w-600 bg-white   rounded-lg overflow-hidden">
            <div className="flex-1  md:px-4 py-6 px-3 " id='chatbox'>
              <div className="flex flex-col items-start mb-4" >
                <div className="bg-gray-200 rounded-lg p-3  break-words  w-5/6 md:w-2/3 ">
                  <p>As a bot designed to emulate the wise and questioning style of Socrates, I seek to engage in a conversation that will help us both to think more deeply about the world around us. Whether your question concerns the nature of reality, the meaning of life, or the latest developments in technology, I am here to help guide our exploration through the power of dialogue.</p>
                </div>
              </div>
              <div className="flex flex-col items-end mb-4" id='userChats'>
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-max break-words md:w-2/3 w-5/6">
                  <p>Hi, I'm looking for information about your product offerings.</p>
                </div>
              </div>
              {/* <!-- more messages --> */}
            </div>
            <form className="flex items-end pr-4 md:pl-20 py-2 bg-gray-200 pl-4 rounded-lg md:" onSubmit={handleSubmit}>
              <input
                type="text" 
                placeholder="Type your message here" 
                value={userMessage}
                onChange={handleInputChange}
                className="flex-1 py-2 px-4 rounded-lg bg-white focus:outline-none focus:shadow-outline break-words resize:vertical overflow: auto " />
              <button type="submit" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                Send
              </button>
            </form>
        </div>
    )
}

import React, { useState } from 'react' 
import addToChatbox2 from '@/functions/addToChatbox'

export default function Chatbox() {
    const [userMessage, setUserMessage] = useState('')

    // take the message from input and set it to userMessage
    const handleInputChange = (e) => {
        setUserMessage(e.target.value)
    }


    // print the message from input into chatbox
    const handleSubmit = (e) => {
        e.preventDefault()
        // add the value to chatbox
        addToChatbox2(userMessage)
        // clear the input
        setUserMessage('')
    }

    // add the value of userMessage to the chatbox
    // const addToChatbox = (userMessage) => {
    //     // create a new div
    //     const newDiv = document.createElement('div')
    //     // add a class to the new div
    //     newDiv.classList.add("bg-blue-500",  "text-white", "rounded-lg", "p-3", "max-w-max", "break-words", "mb-1")
    //     // add the new div to the chatbox
    //     const userChats = document.getElementById('userChats')
    //     userChats.appendChild(newDiv)
    //     // create a p tag insdie the newDiv
    //     const pTag = document.createElement('p')
    //     // add the userMessage to the p tag
    //     pTag.textContent = userMessage
    //     // add p to newDiv
    //     newDiv.appendChild(pTag)
    // }

    return (
        <div className="flex flex-col w-600 bg-white   rounded-lg overflow-hidden">
            <div className="flex-1  px-4 py-6" id='chatbox'>
              <div className="flex flex-col items-start mb-4" id='botChats'>
                <div className="bg-gray-200 rounded-lg p-3 max-w-max break-words">
                  <p>Hello, how can I help you today?</p>
                </div>
              </div>
              <div className="flex flex-col items-end mb-1" id='userChats'>
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-max break-words mb-1">
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
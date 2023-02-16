// add to chatbox funxtion

const addUserChat = (userMessage) => {
     // create a new div
     const newDiv = document.createElement('div')
     const newDiv2 = document.createElement('div')
     const userChats = document.getElementById('chatbox')
     // add a class to the new div
     newDiv.classList.add("bg-blue-600",  "text-white", "rounded-lg", "p-3", "max-w-max", "break-words", "md:w-2/3", "w-5/6")
     newDiv2.classList.add("flex", "flex-col", "items-end", "mb-4")
     // add the new div to the chatbox
     userChats.appendChild(newDiv2)
     newDiv2.appendChild(newDiv)
     // create a p tag insdie the newDiv
     const pTag = document.createElement('p')
     // add the userMessage to the p tag
     pTag.textContent = userMessage
     // add p to newDiv
     newDiv.appendChild(pTag)
}

const addBotChat = (botMessage) => {
    // create a new div
    const newDiv = document.createElement('div')
    const newDiv2 = document.createElement('div')
    const userChats = document.getElementById('chatbox')
    // add a class to the new div
    newDiv.classList.add("bg-gray-200",  "rounded-lg", "p-3", "max-w-max", "break-words", "md:w-2/3", "w-5/6")
    // add the new div to the chatbox
    newDiv2.classList.add("flex", "flex-col", "items-start", "mb-4")
    userChats.appendChild(newDiv2)
    newDiv2.appendChild(newDiv)
    // create a p tag insdie the newDiv
    const pTag = document.createElement('p')
    // add the userMessage to the p tag
    pTag.textContent = botMessage
    // add p to newDiv
    newDiv.appendChild(pTag)
}

// export functions
export {addUserChat, addBotChat}
// add to chatbox funxtion

export default function addToChatbox2(userMessage){
     // create a new div
     const newDiv = document.createElement('div')
     // add a class to the new div
     newDiv.classList.add("bg-blue-500",  "text-white", "rounded-lg", "p-3", "max-w-max", "break-words", "mb-1")
     // add the new div to the chatbox
     const userChats = document.getElementById('userChats')
     userChats.appendChild(newDiv)
     // create a p tag insdie the newDiv
     const pTag = document.createElement('p')
     // add the userMessage to the p tag
     pTag.textContent = userMessage
     // add p to newDiv
     newDiv.appendChild(pTag)
}
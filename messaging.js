const toggleBnt = document.querySelector('.toggle_bnt')
      const toggleBntIcon = document.querySelector('.toggle_bnt i')
      const dropDownMenu = document.querySelector('.dropdown_menu')

      toggleBnt.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBntIcon.classList = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-sharp fa-solid fa-bars'
      }


const annieSelectorBtn = document.querySelector('#annie_selector')
const janeSelectorBtn = document.querySelector('#jane_selector')
const chatHeaderAnnie = document.querySelector('.chat_header_annie')
const chatMessagesAnnie = document.querySelector('.chat_messages_annie')
const chatInputFormAnnie = document.querySelector('.chat_input_form_annie')
const chatInputAnnie = document.querySelector('.chat_input_annie')

const createChatMessageElement = (message) => `
<div class="message ${message.sender === 'Annie' ? 'pink_bg_annie' : 'gray_bg_annie'}">
<div class="message_sender_annie">${message.sender}</div>
<div class="message_text_annie">${message.text}</div>
<div class="message_time_annie">${message.timestamp}</div>
</div>
`
let messageSender = 'Annie'

const updateMessageSender = (name) => {
  messageSender = name
  chatHeaderAnnie.innerText = `${messageSender} chatting...`
  chatInputAnnie.placeholder = `Type here, ${messageSender}`

  if (name === 'Annie') {
    annieSelectorBtn.classList.add('active-person')
    janeSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Jane') {
    janeSelectorBtn.classList.add('active-person')
    annieSelectorBtn.classList.remove('active-person')
  }

  chatInputAnnie.focus()
}

annieSelectorBtn.onclick = () => updateMessageSender('Annie')
janeSelectorBtn.onclick = () => updateMessageSender('Jane')


const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleDateString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
  const message = {
    sender: messageSender,
    text: chatInputAnnie.value,
    timestamp,
  }

  chatMessagesAnnie.innerHTML += createChatMessageElement(message)

  chatInputFormAnnie.reset()
  chatMessagesAnnie.scrollTop = chatMessagesAnnie.scrollHeights
}

chatInputFormAnnie.addEventListener('submit', sendMessage)


const backSelectorBnt = document.querySelector ('.back_bnt')
const chatContainer = document.querySelector ('.chat_container')
const backBntIcon = document.querySelector('.back_bnt i')
const personSelector = document.querySelector ('.person_selector')
const personSelectorButton = document.querySelector ('.person_selector_button')
const annieSelectorButton = document.querySelector ('#annie_selector')
const janeSelectorButton = document.querySelector ('#jane_selector')
const annieChatContainer = document.querySelector ('.chat_annie')
const janeChatContainer = document.querySelector ('.chat_jane')


backSelectorBnt.onclick = function() {
  chatContainer.style.display = 'none';
  backBntIcon.style.display = 'none';
  personSelector.style.display = 'block';
}

annieSelectorButton.onclick = function() {
  annieChatContainer.style.display = 'block';
  personSelector.style.display = 'none';
  backBntIcon.style.display = 'block';
}

janeSelectorButton.onclick = function() {
  janeChatContainer.style.display = 'block';
  personSelector.style.display = 'none';
  backBntIcon.style.display = 'block';
}


//Selecting elements
let form = document.querySelector('#guest-form')
let nameInput = document.querySelector('#guest-name')
let categoryInput = document.querySelector('#guest-category')
let guestList = document.querySelector('#guest-list')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let guestName = nameInput.value.trim()
  let category = categoryInput.value

  if (guestName === '') {
    alert('Please enter a name.')
    return
  }

  if (guestList.children.length >= 10) {
    alert('Guest list limit (10) reached!')
    return
  }

  let listItem = document.createElement('li')

  // Create content container
  let content = document.createElement('div')
  content.innerHTML = `
    <span class="category ${category}">${category}</span>
    <strong>${guestName}</strong>
    <div class="time">Added at ${new Date().toLocaleTimeString()}</div>

`

  // Action buttons container
  let actions = document.createElement('div')
  actions.classList.add('actions')

  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Remove'
  deleteBtn.classList.add('delete-btn')

  let rsvpBtn = document.createElement('button')
  rsvpBtn.innerText = 'RSVP: Not Attending'
  rsvpBtn.classList.add('rsvp-btn')

  actions.appendChild(rsvpBtn)
  actions.appendChild(deleteBtn)

  listItem.appendChild(content)
  listItem.appendChild(actions)
  guestList.appendChild(listItem)

  
  form.reset()
})

guestList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove()
  }

  if (e.target.classList.contains('rsvp-btn')) {
    let current = e.target.innerText
    if (current.includes('Not Attending')) {
      e.target.innerText = 'RSVP: Attending'
    } else {
      e.target.innerText = 'RSVP: Not Attending'
    }
  }
})
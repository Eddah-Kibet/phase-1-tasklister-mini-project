document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementsById("guest-form");
  const guestNameInput = document.getElementsById("guestName");
  const guestCategoryInput= document.getElementsById("guest-category");
  const guestList = document.getElementById("guest-list");

  let guests;

  guestForm.addEventListener('submit')
   function e(){
    e.preventDefault();

      const name= guestNameInput.value.trim();
      const category = guestCategoryInput.value;

      if(!name) return;

      if (guests.lenth>= 10){
          alert ("Guest limit reached (10 guests max)")
          return;
      }

      const guest = {
        id:Date.now(),
        name,
        category,
        rsvp:false,
        addedAt: new Date().toLocateTimeString()
      };
      guests.push(guest);
      guestNameInput.value = "";
      renderGuests();
    }

  function renderGuests(){
    guestList.innerHTML =""

    guests.forEach(guest => {
      const li = document.createElement('li');
      li.classList.add(guest.category.toLowerCase())

       const guestInfo = document.createElement('div');
    guestInfo.classList.add('guest-info');
    guestInfo.innerHTML = `
      <strong>${guest.name}</strong> 
      <em>(${guest.category})</em> - 
      ${guest.rsvp ? "Attending" : "Not Attending"} 
      <br><small>Added at ${guest.addedAt}</small>
    `;

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = "Toggle RSVP";
    toggleBtn.onclick = () => {
      guest.rsvp = !guest.rsvp;
      renderGuests();
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.onclick = () => {
      guests = guests.filter(g => g.id !== guest.id);
      renderGuests();
    };

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const newName = prompt("Edit guest name:", guest.name);
      if (newName && newName.trim() !== "") {
        guest.name = newName.trim();
        renderGuests();
      }
    };

    li.appendChild(guestInfo);
    li.appendChild(toggleBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    guestList.appendChild(li);
  });
}
})

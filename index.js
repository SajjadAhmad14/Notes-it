document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-btn");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    addNote();
  });

  function addNote() {
    title = document.querySelector(".title").value;
    content = document.querySelector(".note-text").value;
    const notesList = document.querySelector(".notes-list");
    const note = document.createElement("div");
    note.classList.add("note");
    note.setAttribute("draggable", "true");
    note.innerHTML = `
    <h1>${title}</h1>
    <p class = "content">${content}</p>
      </p>
    <div class="note-buttons">
      <button class="edit">Edit</button>
      <button class="delete">Delete</i></button>
    </div>`;
    notesList.appendChild(note);
  }

  deleteButton = document.querySelector(".notes-list");
  deleteButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.preventDefault();
      deleteNote(e.target);
    }
  });

  function deleteNote(btn) {
    btn.parentElement.parentElement.remove();
  }
});

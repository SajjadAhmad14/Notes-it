document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-btn");

  addButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents form submission
    addNote();
  });

  function addNote() {
    const notesList = document.querySelector(".notes-list");
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main hidden"></div>
      <textarea></textarea>
    `;
    notesList.appendChild(note);
  }
});

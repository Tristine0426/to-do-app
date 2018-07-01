function onReady() {
    let toDos = [];
    let id = 0;
    const addToDoForm = document.getElementById('addToDoForm');

    function deleteToDo(id) {
      return toDos.filter(toDo => toDo.id !== id);
      });
      renderTheUI(toDos);
    }

    // change the state and update the array
    function createNewToDo() {

      // access the text input to get the text for the title of each to do
      const newToDoText = document.getElementById('newToDoText');

      // prevent user to submit empty to do
      if (!newToDoText.value) { return; }

      // add properties to the array
      toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });

    // clear text input
    newToDoText.value = '';

    renderTheUI();
  }

  // call createNewToDo function
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
});

    // This function will take the current state in the array and render the UI
    function renderTheUI() {
      // access the <ul> in the html
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      // take a function and applies that to each item in the array
      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        let deleteBtn = document.createElement('button');
        let deleteName = document.createTextNode("Delete");

        // set checkbox type
        checkbox.type = "checkbox";

        // add text to li
        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        deleteBtn.appendChild(deleteName); // append name to delete button
        newLi.appendChild(deleteBtn);  // add button to li

        // add event listener to delete button
        deleteBtn.addEventListener("click", function() {
          deleteToDo(id)
          // render the initial UI
          renderTheUI();
        });
      });
  }
}


window.onload = function() {
    onReady();
};

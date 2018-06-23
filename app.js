function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    // a function to change state of to-dos. will update of array to-dos
    function createNewToDo() {
      // access text input, so we can get the text for the title of each to-do
      const newToDoText = document.getElementById('newToDoText');

      // prevent user from submiting empty to-do items
      if (!newToDoText.value) { return; }

        // add new to-do to the toDos array
        toDos.push({
          title: newToDoText.value,
          complete: false
        });
        // clear text input for the user
        newToDoText.value = '';

        renderTheUI();
    }

    function renderTheUI() {
      // access ul
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      // render each to-do as a li in the ul
      toDos.forEach(function(toDo) {
        // create li and checkboc
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        // add the toDo's title text to newLi
        newLi.textContent = toDo.title;

        // update DOM
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      });
    }

    // add event listener
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault(); // prevent the page from reloading
      createNewToDo();
    });

    // render initial UI
    renderTheUI();
}

window.onload = function() {
    onReady();
};

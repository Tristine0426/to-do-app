function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    let id = 0;

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
    }

    function deleteToDo(id) {
      return toDos.filter(toDo => toDo.id !== id);
    }

    function saveToDos() {
      localStorage.setItem('toDos', JSON.stringify(toDos) );
    }

    // This function will take the current state in the array and render the UI
    function renderTheUI() {
      // access the <ul> in the html
      const toDoList = document.getElementById('toDoList');
      toDoList.textContent = '';

      // take a function and applies that to each item in the array
      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = toDo.complete;

        // add delete button
        let deleteBtn = document.createElement('button');

        // create a text node
        let deleteName = document.createTextNode('delete');

        // each li rendered has a title displayed
        newLi.innerHTML = toDo.title;

        checkbox.addEventListener('click', function() {
          toDo.complete = checkbox.checked ? true : false;
          saveToDos();
        });

        toDoList.appendChild(newLi);
        deleteBtn.appendChild(deleteName);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteBtn);

        // event listener for delete button
        deleteBtn.addEventListener('click', () => {
          toDos = deleteToDo(toDo.id);
          renderTheUI();
          saveToDos();
        });
    });
  }

    // call createNewToDo function
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
      renderTheUI();
      saveToDos();
  });

    // render the initial UI
    renderTheUI();
    saveToDos();
}


window.onload = function() {
    onReady();
};

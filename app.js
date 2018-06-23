function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  // change the state and update the array
  function createNewToDo() {
    // access the text input to get the text for the title of each to do
    const newToDoText = document.getElementById('newToDoText');

    // prevent user to submit empty to do
    if (!newToDoText.value) { return; }

    // add properties to the array
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    // clear text input
    newToDoText.value = '';

    renderTheUI();
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

      // add text to li
      newLi.textContent = toDo.title;

      // update DOM
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  // call createNewToDo function
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  // render the initial UI
  renderTheUI();
}

window.onLoad = function() {
  onReady();
}

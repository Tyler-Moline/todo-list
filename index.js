sumbitCount = 0;
movingItemsCount = 0;

const instructions = document.createElement("p");
instructions.textContent = "Add some things to your list to get started!";
toDoListWrapper.appendChild(instructions);

submit.onclick = () => {
  let toDoArray = [];
  let competeArray = [];
  const listItemDiv = document.createElement("div");
  // const instructions = document.createElement("p");
  let deleteBtn = document.createElement("div");
  const deleteBtnImg = document.createElement("i");

  listItemDiv.textContent = userInput.value;
  listItemDiv.id = "itemDiv";
  deleteBtn.id = "removeBtn";
  deleteBtnImg.setAttribute("class", "fa-solid fa-circle-xmark");

  listItemDiv.onclick = () => {
    const completedMessage = document.createElement("p");
    completedMessage.textContent =
      "Great work! this is the stuff you've completed!";
    const headerRule = document.createElement("hr");
    listItemDiv.id = "completedTask";
    if (movingItemsCount === 0) {
      completedWrapper.appendChild(headerRule);
      completedWrapper.appendChild(completedMessage);
      movingItemsCount += 1;
    }

    completedWrapper.appendChild(listItemDiv);
    competeArray.push(1);
  };

  deleteBtn.onclick = () => {
    if (competeArray.length > toDoArray.length) {
      listItemDiv.onclick = () => {
        null;
      };
      completedWrapper.removeChild(listItemDiv);
    } else {
      listItemDiv.onclick = () => {
        null;
      };
      toDoListWrapper.removeChild(listItemDiv);
    }
  };

  toDoArray.push(listItemDiv);
  competeArray.push(listItemDiv);
  toDoListWrapper.appendChild(listItemDiv);
  listItemDiv.appendChild(deleteBtn);
  deleteBtn.appendChild(deleteBtnImg);
  sumbitCount += 1;

  if (sumbitCount > 0) {
    instructions.textContent =
      "Click the items below to mark them as completed!";
  }

  userInput.value = "";
};

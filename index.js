const filled = document.getElementById("filled");
const emptyBoxes = document.querySelectorAll(".cards-empty");

// Drag functions
const dragStart = (e) => {
  const fillObj = e.target;
  fillObj.className += " hold";
  setTimeout(() => (fillObj.className = "invisible"), 0);
};

const dragEnd = (e) => {
  e.target.className = "card-filled";
  console.log("f");
};

// emptyBox Listeners
const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.preventDefault();
  e.target.className += " hovered";
};

const dragLeave = (e) => {
  e.target.className = "cards-empty";
};

const dragDrop = (e) => {
  const dropCard = e.target;
  dropCard.append(filled);
  e.target.className = "cards-empty";
};

// Filled listeners
filled.addEventListener("dragstart", dragStart);
filled.addEventListener("dragend", dragEnd);

// loop through emptyBoxes elements and call event listeners on each item
emptyBoxes.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

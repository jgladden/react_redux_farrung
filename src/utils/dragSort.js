let dragEl = null;
let swapImageOrder = null;

export function dragSort(container, callback) {
  swapImageOrder = callback;
  const dragElement = container.querySelectorAll('.dragElement');
  [].forEach.call(dragElement, addDnDHandlers);    
}

const addDnDHandlers = elem => {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false); 
}

const handleDragStart = e => {
  dragEl = e.currentTarget;
  e.dataTransfer.effectAllowed = 'move';
  dragEl.classList.add('onDrag');
}

const handleDragOver = e => {
  if (e.preventDefault)
    e.preventDefault(); 
  e.dataTransfer.dropEffect = 'move';
  return false;
}

const handleDragLeave = e => {
  e.currentTarget.classList
  .remove('onDrag');
}

const handleDrop = e => {
  let dropEl = e.currentTarget;
  if (e.stopPropagation)
    e.stopPropagation();
  if (dragEl != dropEl)
    swapImageOrder(dropEl.id, dragEl.id);
  return false;
}



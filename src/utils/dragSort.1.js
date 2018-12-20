let dragSrcEl = null;

export function dragSort(container) {
  const dragElement = container.querySelectorAll('.dragElement');
  [].forEach.call(dragElement, addDnDHandlers);    
}

const addDnDHandlers = elem => {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);  
}

const handleDragStart = e => {
  let elem = e.currentTarget;
  dragSrcEl = elem;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', elem.outerHTML);
  elem.classList.add('dragElem');
}

const handleDragOver = e => {
  if (e.preventDefault)
    e.preventDefault(); 
  e.currentTarget.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

const handleDragLeave = e => {
  let elem = e.currentTarget;
  elem.classList
  .remove('over');
  elem.classList
  .remove('dragElem');
}

const handleDrop = e => {
  let elem = e.currentTarget;
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != elem) {
    elem.parentNode.removeChild(dragSrcEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    elem.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = elem.previousSibling;
    addDnDHandlers(dropElem);
  }
  elem.classList.remove('over');
  return false;
}

const handleDragEnd = e => {
  e.currentTarget.classList.remove('over');
}



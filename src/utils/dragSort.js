export function dragSort(images, onImagesUpdate) {
  this.onImagesUpdate = onImagesUpdate;
  this.images = images;
  this.images
  .reduce((acc,img) =>
    acc.concat(document.getElementById(img.name))
  ,[])
  .forEach(el => 
    this.addDnDHandlers(el)
  );
}

dragSort.prototype = {
  addDnDHandlers: function(el) {
    el.addEventListener('dragstart', this.handleDragStart.bind(this), false);
    el.addEventListener('dragover', this.handleDragOver.bind(this), false);
    el.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
    el.addEventListener('drop', this.handleDrop.bind(this), false); 
  },
  handleDragStart: function(e) {
    this.dragEl = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    this.dragEl.classList.add('onDrag');
  },
  handleDragOver: function(e) {
    if (e.preventDefault)
      e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';
    return false;
  },
  handleDragLeave: function(e) {
    e.currentTarget.classList
    .remove('onDrag');
  },
  handleDrop: function(e) {
    let dropEl = e.currentTarget;
    if (e.stopPropagation)
      e.stopPropagation();
    if (this.dragEl != dropEl)
      this.swapImageOrder(dropEl.id, this.dragEl.id);
    return false;
  },
  swapImageOrder: function(dropId, dragId) {
    let dropIndex, dragIndex;
    for(let i = 0; i < this.images.length; i++) {
      if(this.images[i].name === dropId)
        dropIndex = i;
      if(this.images[i].name === dragId)
        dragIndex = i;
    }
    let dragImage = this.images[dragIndex];
    this.images.splice(dragIndex, 1);
    this.images.splice(dropIndex, 0, dragImage);
    this.onImagesUpdate(this.images);
  }
}





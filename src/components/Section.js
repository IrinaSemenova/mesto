export default class Section {
    constructor ({items, renderer}, containerSelector){
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._renderedItems.forEach(data => {
            const image = this._renderer(data.name, data.link) 
            this._container.append(image);
        });
    }
    
    addItems(image){
    this._container.prepend(image);
    }
}



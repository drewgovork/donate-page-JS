import { Component } from "../core/Component";

export class List extends Component {
  setup(props) {
    this.props = props;
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const $title = document.createElement("h2");
    $title.textContent = "Список донатов";
    this.$rootElement.appendChild($title);

    const $listContainer = document.createElement("div");
    this.$rootElement.appendChild($listContainer);

    this.$listContainer = $listContainer;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }

  removeItem(item) {
    if (item.$rootElement.parentElement === this.$listContainer) {
      this.$listContainer.removeChild(item.$rootElement);
    }
  }
}

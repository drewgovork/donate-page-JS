import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const $title = document.createElement("h1");
    $title.className = "total-amount";
    $title.innerHTML = `Итого: $<span>${this.state.total}</span>`;
    this.$rootElement.appendChild($title);

    this.$total = $title.querySelector("span");

    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this),
    });
    this.$rootElement.appendChild(donateForm.$rootElement);

    const donateList = new List({
      onDelete: this.onItemDelete.bind(this),
    });
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this),
    });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelete(item) {
    this.state.donates = this.state.donates.filter((donate) => donate !== item);
    this.donateList.removeItem(item);
    this.state.total -= item.state.amount;
    this.$total.textContent = this.state.total;
  }
}

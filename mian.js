import { Internet_Connection } from "./Script.js";

class UI_Widget {
  constructor() {
    this.modal = document.getElementById("modal");
  }

  show() {
    this.modal.style.display = "block";
  }

  hide() {
    this.modal.style.display = "none";
  }
}

const internetConnection = new Internet_Connection();
const uiWidget = new UI_Widget();
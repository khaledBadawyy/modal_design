export class Internet_Connection {
  constructor() {
    this.modal = document.getElementById("modal");
    this.modalMessage = document.getElementById("modal-message");
    this.checkConnection();
    window.addEventListener("online", () => this.checkConnection());
    window.addEventListener("offline", () => this.checkConnection());
  }

  checkConnection() {
    if (navigator.onLine) {
      if (this.modal.style.display !== "none") {
        this.modal.style.display = "none";
      }
      
    } else {
      if (this.modal.style.display === "none") {
        this.modal.style.display = "block";
      }
      
    }
  }
}
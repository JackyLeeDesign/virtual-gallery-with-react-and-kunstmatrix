import { observable, computed, action } from "mobx";
class ContactStore {
  @observable name = "";
  @observable email = "";
  @observable content = "";
  @observable success = false;
  @observable errorText = "";
  @action handleChange = event => {
    switch (event.target.name) {
      case "name":
        this.name = event.target.value;
        break;
      case "email":
        this.email = event.target.value;
        break;
      case "content":
        this.content = event.target.value;
        break;
    }
  };
  @action handleSubmit = () => {
    let errorItems = [];
    if (this.name === "") {
      errorItems.push("name");
    }
    if (this.email === "") {
      errorItems.push("email");
    }
    if (this.content === "") {
      errorItems.push("content");
    }
    this.success = errorItems.length == 0 ? true : false;
    this.errorText = errorItems.join(" & ");
  };
}
export default ContactStore;

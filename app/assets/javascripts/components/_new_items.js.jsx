//app/assets/javascripts/components/_new_item.js.jsx

class NewItem extends React.Component {
  constructor() {
    super();
    this.name = null;
    this.setNameRef = element => {
      this.name = element;
    };
    this.description = null;
    this.setDescriptionRef = element => {
      this.description = element;
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var name = this.name.value;
    var description = this.description.value;
    $.ajax({
      url: "/api/v1/items",
      type: "POST",
      data: { item: { name: name, description: description } },
      success: item => {
        this.props.handleSubmit(item);
        this.name.value = "";
        this.description.value = "";
      }
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <form>
          <div className="form-group">
            <label for="inputName">Name</label>
            <input ref={this.setNameRef} type="text" className="form-control" id="inputName" placeholder="Enter the name of the item"/>
            <small id="emailHelp" className="form-text text-muted">No validation added at the moment.</small>
          </div>
          <div className="form-group">
            <label for="inputDescription">Description</label>
            <input ref={this.setDescriptionRef} type="text" className="form-control" id="inputDescription" placeholder="Enter a description"/>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
};

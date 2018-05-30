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
      }
    });
  }

  render() {
    return (
      <div>
        <input ref={this.setNameRef} placeholder='Enter the name of the item' />
        <input ref={this.setDescriptionRef} placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
};

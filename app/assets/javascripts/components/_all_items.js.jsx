// app/assets/javascripts/components/_all_items.js.jsx

class AllItems extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  render() {
    var items = this.props.items.map((item) => {
      return (
        <Item key={item.id} item={item}
               handleDelete={this.handleDelete.bind(this, item.id)}
               handleUpdate={this.onUpdate}/>
      )
    });
    return (
        <div>{items}</div>
    )
  }
}

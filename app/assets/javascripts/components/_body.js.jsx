// app/assets/javascripts/components/_body.js.jsx

class Body extends React.Component {
  constructor() {
    super()
    this.state = { items: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.removeItemClient = this.removeItemClient.bind(this);
  };

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  };

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState });
  };

  handleDelete(id) {
    $.ajax({
        url: `/api/v1/items/${id}`,
        type: 'DELETE',
        success:() => {
          this.removeItemClient(id);
        }
    });
  };

  handleUpdate(item) {
    $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: { item: item },
            success: () => {
              this.updateItems(item);
            }
        }
    )};

  updateItems(item) {
      var items = this.state.items.filter((i) => { return i.id != item.id });
      items.push(item);

      this.setState({items: items });
  }

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
        return item.id != id;
    });

    this.setState({ items: newItems });
  };

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items}
          handleDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
  )};
};

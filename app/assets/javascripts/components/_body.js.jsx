// app/assets/javascripts/components/_body.js.jsx

class Body extends React.Component {
  constructor() {
    super()
    this.state = { items: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  };

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState });
  };

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} />
      </div>
  )};
};

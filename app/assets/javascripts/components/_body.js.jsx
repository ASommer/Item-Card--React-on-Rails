// app/assets/javascripts/components/_body.js.jsx

const Body = React.createClass({

  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    console.log('componentDidMount');
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response}) });
  },

  handleSubmit(item) {
    console.log('handleSubmit(item).name: ' + item.name);
    var newState = this.state.items.concat(item);
    this.setState({items: newState}); 

  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} />
      </div>
    )
  }
});

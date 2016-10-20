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

  handleUpdate(item) {
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {item: item},
      success: (response) => {
        console.log('you did ze UPDATE!!');
        this.updateItems(item);
      }
    });
  },

  //update items
  updateItems(item) {
    var items = this.state.items.filter((i) => {return i.id !== item.id });

    // adds the changed item at the end (TODO: try a better Soulution)
    items.push(item);
    this.setState({items: items});
    console.log(items);
  },

  handleDelete(id) {
    console.log('handleDelete from body + id: ' + id);
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: (response) => {
        console.log('succes function body delete');
        this.removeItemClient(id);
      }
    })
  },

  removeItemClient(id) {
    console.log('remove item client');
    var NewItems = this.state.items.filter((item) => {
      return item.id !== id;
    });

    this.setState({ items: NewItems});
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems
          items={this.state.items}
          handleDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
          />
      </div>
    )
  }
});

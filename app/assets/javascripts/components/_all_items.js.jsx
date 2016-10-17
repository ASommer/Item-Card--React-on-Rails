// app/assets/javascripts/components/_all_items.js.jsx

var AllItems = React.createClass({

  render() {
    //console.log("state: " + this.state.items);
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{ item.name }</h3>
          <p>{ item.description }</p>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  }
});

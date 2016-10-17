// app/assets/javascripts/components/_new_item.js.jsx

const NewItem = React.createClass({
  handleClick() {
    const name = this.refs.name.value;
    const description = this.refs.description.value;

    console.log('Name: ' + name + ' --DEscription: ' + description);

    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description}},
      success: (item) => {
        //console.log('it worked, rep: ' + response);
        this.props.handleSubmit(item)
      },
      error: (response) => {
        console.log('Error: ' + response);
      }
    });
  },

  render() {
    return(
      <div>
          <h1>New Item</h1>
          <div className='form-group'>
            <input className='form-control' ref='name' placeholder='Enter the name of the item' />
            <input className='form-control' ref='description' placeholder='Enter a description' />
          </div>
          <button className='btn btn-default' onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})

var Item = React.createClass({
  getInitialState() {
    return {editable: false};
  },
  handleEdit() {
    if(this.state.editable) {
      var name = this.refs.name.value;
      var id = this.props.item.id;
      var description = this.refs.description.value;
      var item = {id: id, name: name, description: description};

      this.props.handleUpdate(item);

      console.log('in handleEdit: ', this.state.editable, name, description);
    }

    this.setState({ editable: !this.state.editable });


  },

  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
      return(
        <div className='flexrow'>
          <div className='flex-item item-name'>{name}</div>
          <div className='flex-item item-name'>{description}</div>
          <div className='flex-item item-action'>
            <button onClick={this.props.handleDelete} className='btn btn-default'>Delete Item</button>
            <button onClick={this.handleEdit} className='btn btn-primary'>{this.state.editable ? 'Submit' : 'Edit'} Item</button>
          </div>
        </div>
      )
  }
});

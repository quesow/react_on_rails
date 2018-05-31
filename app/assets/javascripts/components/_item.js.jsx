// app/assets/javascripts/components/_item.js.jsx

class Item extends React.Component {
  constructor() {
    super();
    this.state = {editable: false};
    this.handleEdit = this.handleEdit.bind(this);
    this.editName = null;
    this.setEditNameRef = element => {
      this.editName = element;
    };
    this.editDescription = null;
    this.setEditDescriptionRef = element => {
      this.editDescription = element;
    };
  }

  handleEdit(id) {
    if(this.state.editable) {
      var name = this.editName.value;
      var id = this.props.item.id;
      var description = this.editDescription.value;
      var item = {id: id , name: name , description: description};
      this.props.handleUpdate(item);

    }
    this.setState({editable: !this.state.editable})
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.item.id}</th>
        <td><Name editable={this.state.editable} name={this.props.item.name} setEditNameRef={this.setEditNameRef}/></td>
        <td><Description editable={this.state.editable} description={this.props.item.description} setEditDescriptionRef={this.setEditDescriptionRef}/></td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button className="btn btn-danger" editable={this.state.editable} onClick={this.props.handleDelete}>Delete</button>
          <EditButton editable={this.state.editable} handleEdit={this.handleEdit} />
        </div>
        </td>
      </tr>
    );
  }
}

const Name = ({editable, name, setEditNameRef}) => (
  editable
  ? <input ref={setEditNameRef} type='text' defaultValue={name} />
  : <p>{name}</p>
);

const Description = ({editable, description, setEditDescriptionRef}) => {
  return(
    editable
    ? <input ref={setEditDescriptionRef} type='text' defaultValue={description} />
    : <p>{description}</p>
  )
};

const EditButton = ({editable, handleEdit}) => {
  const buttonName = editable ? "Submit" : "Edit";
  const buttonType = editable ? "success" : "secondary";
  const className = `btn btn-${buttonType}`;
  return (
    <button className={className} onClick={handleEdit}>{buttonName}</button>
  )
};

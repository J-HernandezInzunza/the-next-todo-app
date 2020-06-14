import React from 'react';
import '../styles/AddTodoInput.scss';
import { Paper, InputBase, Button } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

class AddTodoInput extends React.Component {
  state = { inputText: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.inputText);
    this.setState({ inputText: '' });
  };

  onInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <Paper elevation={2} component="form" id="form" onSubmit={this.onFormSubmit}>
        <InputBase
          className="input-base"
          placeholder="Watch random videos on youtube all day..."
          onChange={this.onInputChange}
          value={this.state.inputText}
          required
        ></InputBase>
        <Button className="add-button" variant="contained" type="submit">
          Submit
          <LibraryAddIcon fontSize="large" />
        </Button>
      </Paper>
    );
  }
}

export default AddTodoInput;
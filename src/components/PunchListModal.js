import React from 'react'
import { Modal, Header, Button, Form, TextArea } from 'semantic-ui-react';
import '../styles/Modal.css';

const options = [
    { key: 'o', text: 'Open', value: 'open' },
    { key: 'c', text: 'Closed', value: 'closed' }
  ]

class PunchListModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          discipline: '',
          assignee: '',
          status: '',
          description: ''
        };
        this.handleChange = this.handleChange.bind(this);

      }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  confirmClick = (event, data) => {
    console.log(this.state)
    this.props.triggerParentsUpdate(this.state);
    this.setState({  discipline: '',
    assignee: '',
    status: '',
    description: '' })
    this.props.handleClose();
  }

  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        size='small'
        closeOnEscape={true}
        closeOnRootNodeClick={true}
      >
        <Header icon='browser' content='Add Punch List Item' />
        <Modal.Content>
          <Form size="large">
              <Form.Input
                fluid
                placeholder="Discipline"
                name="discipline"
                value={this.state.discipline}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="assignee"
                placeholder="Assignee"
                value={this.state.assignee}
                onChange={this.handleChange}
              />
                <Form.Field
                control={TextArea}
                label='Description'
                name="description"
                placeholder='Tell us more about the job...'
                value={this.state.description}
                    onChange={this.handleChange}
                />
                <Form.Select
                fluid
                label='Status'
                options={options}
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                placeholder='Status'
              />
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            type='button'
            icon='remove'
            labelPosition='right'
            onClick={this.props.handleClose}
            content='Cancel'
          />
          <Button
            positive
            type='button'
            icon='checkmark'
            labelPosition='right'
            onClick={this.confirmClick}
            content='Add'
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default PunchListModal;

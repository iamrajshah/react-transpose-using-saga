import React, { PureComponent } from 'react'
import {Dropdown} from 'react-bootstrap';

export default class Header extends PureComponent {
  menuChange = (menu) => {
    this.props.menuChange(menu);
  }

  render() {
    return (
      <div>
        <div >
          <label className="labelClass">Current Source:</label>
          <input type="text" value={this.props.source} className="inputField" disabled/>
        </div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdownClass">
          Select Source
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={(e)=>this.menuChange('posts')}>Posts</Dropdown.Item>
          <Dropdown.Item onClick={(e)=>this.menuChange('comments')}>Comments</Dropdown.Item>
          <Dropdown.Item onClick={(e)=>this.menuChange('todos')}>Todos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    )
  }
}

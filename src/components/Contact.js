import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  state = {};

  onShowClick = () => {
    console.log(this.state);
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const element = <FontAwesomeIcon icon={faSortDown} />;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i onClick={this.onShowClick}>{element}</i>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

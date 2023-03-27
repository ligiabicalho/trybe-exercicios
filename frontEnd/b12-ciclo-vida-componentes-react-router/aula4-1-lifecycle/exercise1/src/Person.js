import React from "react";
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    const { randonPerson: { name, image, email, age} } = this.props;

    return (
      <div>
        <p>{name}</p>
        <img src={image} alt={name}/>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    )
  }
}

Person.propTypes = {
  randonPerson: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Person;
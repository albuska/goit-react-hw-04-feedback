import React from 'react';
import { Item, Container } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const listObjectKeys = Object.keys(options);

  return (
    <Container>
      {listObjectKeys.map(item => (
        <Item onClick={() => onLeaveFeedback(item)} key={item}>
          {item[0].toUpperCase() + item.slice(1)}
        </Item>
      ))}
    </Container>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

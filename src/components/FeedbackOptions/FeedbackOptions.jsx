import React from 'react';
import { Item, List } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <List>
        {options.map(item => (
          <Item onClick={onLeaveFeedback} key={item}>
            {item[0].toUpperCase() + item.slice(1)}
          </Item>
        ))}
      </List>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

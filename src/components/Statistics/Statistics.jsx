import React from 'react';
import { Paragraph } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Paragraph><b>Good:</b> {good}</Paragraph>
      <Paragraph><b>Neurtal:</b> {neutral}</Paragraph>
      <Paragraph><b>Bad:</b> {bad}</Paragraph>
      <Paragraph><b>Total:</b> {total()}</Paragraph>
      <Paragraph><b>Positive feedback:</b> {positivePercentage()}%</Paragraph>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

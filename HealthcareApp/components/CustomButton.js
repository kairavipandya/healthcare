import React from 'react';
import { Button } from 'native-base';

const CustomButton = ({ title, onPress }) => (
  <Button onPress={onPress} rounded block>
    {title}
  </Button>
);

export default CustomButton;

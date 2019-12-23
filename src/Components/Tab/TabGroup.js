import React, { useState } from 'react';
import Tab from './Tab';
import { TabGroupContainer } from './styles';

const TabGroup = ({ children, name, defaultActive, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultActive);
  const handleChange = (id, value, e) => {
    setSelectedOption(id);
    onChange && onChange(value, e);
  };

  return (
    <TabGroupContainer>
      {children.map(tab => (
        <Tab
          name={name}
          id={tab.props.id}
          key={tab.props.id}
          icon={tab.props.icon}
          text={tab.props.text}
          value={tab.props.value}
          disabled={tab.props.disabled}
          checked={selectedOption === tab.props.id}
          onChange={tab.props.disabled ? null : handleChange}
        />
      ))}
    </TabGroupContainer>
  );
};

export default TabGroup;

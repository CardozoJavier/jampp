import React, { useState } from 'react';
import Tab from './Tab';
import { TabGroupContainer } from './styles';

const TabGroup = ({ children, name, defaultActive, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultActive);

  const handleChange = (id) => {
    setSelectedOption(id);
    onChange && onChange(id);
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
          disabled={tab.props.disabled}
          checked={selectedOption === tab.props.id}
          onChange={tab.props.disabled ? null : handleChange}
        />
      ))}
    </TabGroupContainer>
  );
};

export default TabGroup;

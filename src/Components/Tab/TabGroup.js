import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import { TabGroupContainer } from './styles';

/**
 * TabGroup component should be called with
 * @param {Node} children - (Required) Array of tabs to be displayed.
 * @param {String} name - (Required) Name of tabs group necesary to implement several groups in the same component.
 * @param {String} defaultActive - (Optional) It select the default active tab. It should match with tab id.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @return {React Component} A view for group of tabs.
 */
const TabGroup = ({ children, name, defaultActive, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultActive);

  const handleChange = (id) => {
    setSelectedOption(id);
    onChange(id);
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

TabGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  name: PropTypes.string.isRequired,
  defaultActive: PropTypes.string,
  onChange: PropTypes.func,
};

TabGroup.defaultProps = {
  children: [],
  defaultActive: '',
  onChange: () => null,
};

export default TabGroup;

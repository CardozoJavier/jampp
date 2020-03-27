import React, { useState, useMemo, useCallback } from 'react';
import {
  Modal,
  Button,
  InputField,
  CreateElement,
  OptionDropdown,
  InformativeModal,
  CreationTagSuggestion,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
  DropdownListContainer,
} from '../src/Components/Dropdown/styles';
import {
  ModalText,
  ModalFooter,
  ModalContainerB,
  ModalRowContainer,
} from '../src/Components/Modal/styles';
import { palette, fonts } from '../src/Components/styles';
import { Option } from '../src/Components/OptionList/styles';
import { LabelContainer } from '../src/Components/InputField/styles';
import { TrashIcon, XIcon, BoldAddIcon } from '../src/Components/UI/Icons';
import { ParametersDuplicationContainer } from '../src/Components/CreationTag/styles';
import { Text, DivContainer } from '../src/Components/UI/GenericElements/GenericElements.styles';
import {StructurePreview} from '../src/Components/Structures';
const { gray, link, black, } = palette;
const { size10, size12 } = fonts;

const Test = () => {
  const [city, setCity] = useState([]);
  const [defaultValue, setDefaultValue] = useState(null);
  const [value, setValue] = useState('');
  
  const handleOptionChange = useCallback((optionId, label) => {
    setDefaultValue(optionId);
    console.log({ optionId, label })
  }, [defaultValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSave = () => {
    setDefaultValue(value);
  };

  const array = [];
  for (let i = 0; i < 500; i += 1) {
    array.push({ label: `test-${i}`, id: `id${i}`});
  }

  const cities = {
    argentina: [
      {
        label: 'BsAs',
        id: 'id1',
      },
      {
        label: 'Cordoba',
        id: 'id2',
      },
      {
        label: 'Mendoza',
        id: 'id3',
      },
      {
        label: 'Salta',
        id: 'id4',
      },
    ],
    brasil: [
      {
        label: 'Sao Paulo',
        id: 'id1',
      },
      {
        label: 'Florianopolis',
        id: 'id2',
      },
      {
        label: 'Rio do janeiro',
        id: 'id3',
      },
      {
        label: 'Buzios',
        id: 'id4',
      },
    ]
  }

  const setCountry = (country) => {
    setCity(cities[country]);
  };

  return (
    <Modal title="Modal Title">
      <ModalRowContainer padding="20px" justifyContent="space-between">
        <LabelContainer padding="0 10px 0 0" margin="0 5px 0 0">
          <InputField label="Title" id='input1' placeholder="Text" type="basic" onChange={value => console.log(value)} />
        </LabelContainer>
        <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
          <DropdownLabel>Title</DropdownLabel>
          <OptionDropdown wide notIcon text="Option" type='basic-clean'>
            <Option label="Argentina" id="id1" right />
            <Option label="Brasil" id="id2" right />
            <Option label="Colombia" id="id3" right />
            <Option label="Uruguay" id="id4" right />
          </OptionDropdown>
        </DropdownContainer>
      </ModalRowContainer>
      <input type="text" value={value} onChange={handleChange} />

      <ModalRowContainer padding="20px" justifyContent="space-between">
        <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 15px 0 0">
          <DropdownLabel>Pais</DropdownLabel>
          <OptionDropdown onChange={handleOptionChange} wide notIcon text="Option" type='customize-text' buttonList="custom text">
            {useMemo(() => array.map(input => <Option key={input.label} label={input.label} id={input.id} />), [])}
            {/* {array.map(input => <Option key={input.label} label={input.label} id={input.id} />)} */}
          </OptionDropdown>
        </DropdownContainer>
        <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
          <DropdownLabel>Provincia</DropdownLabel>
          <OptionDropdown defaultValue={defaultValue} wide notIcon text="Option" type='basic-clean'>
            {city.map(c => <Option key={c.label} label={c.label} id={c.id} />)}
          </OptionDropdown>
        </DropdownContainer>
      </ModalRowContainer>

      <ModalRowContainer padding="20px">
        <LabelContainer width="47.5%">
          <InputField label="Title" id='input2' placeholder="Text" type="basic" onChange={value => console.log(value)} />
        </LabelContainer>
      </ModalRowContainer>

      <ModalFooter>
        <Button onClick={handleSave} label="Action button" type="secondary-default-medium" />
        <Button onClick={() => setCountry('brasil')} label="Brasil" type="secondary-default-medium" />
        <Button onClick={() => setCountry('argentina')} label="Argentina" type="secondary-default-medium" />
      </ModalFooter>
    </Modal>
  );
};

export default Test;

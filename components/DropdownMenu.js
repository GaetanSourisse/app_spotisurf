import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



const DropdownMenu = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleSelect = (item) => {
      setSelectedOption(item.value);
      onSelect(item);
    };
  
    return (
      <View>
        <DropDownPicker
          items={options}
          defaultValue={selectedOption}
          containerStyle={{ height: 40, width: '100%' }}
          onChangeItem={handleSelect}
        />
      </View>
    );
  };
  
  export default DropdownMenu;
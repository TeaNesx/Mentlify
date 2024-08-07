import React from 'react';
import {View, Text, TextInput} from 'react-native';

interface MentInputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  [key: string]: any;
}

const MentInput: React.FC<MentInputProps> = ({
  title,
  placeholder,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View className="w-full">
      <Text className="mb-3 text-base text-mentlify-green">{title}</Text>
      <TextInput
        className="w-full border rounded-lg px-4 py-3 mb-2"
        keyboardType="email-address"
        style={{borderColor: '#E3E5E5'}}
        placeholderTextColor="#555555"
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

export default MentInput;

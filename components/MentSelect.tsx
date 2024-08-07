import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';

interface MentSelectProps {
  answers: string[];
  onSelect: (answer: string) => void;
}

const MentSelect: React.FC<MentSelectProps> = ({answers, onSelect}) => {
  const [checked, setChecked] = useState<string | null>(null);

  return (
    <View>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setChecked(answer);
            onSelect(answer);
          }}
          className="flex-row items-center mb-4 border border-mentlify-green px-4 py-3 justify-space-between rounded-lg">
          <Text
            className="flex text-lg color-mentlify-green text-center"
            style={{flex: 1}}>
            {answer}
          </Text>
          <RadioButton
            value={answer}
            style={{borderColor: '#2ECC71'}}
            status={checked === answer ? 'checked' : 'unchecked'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MentSelect;

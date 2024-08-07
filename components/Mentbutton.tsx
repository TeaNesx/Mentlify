import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MentButtonProps extends TouchableOpacityProps {
  title: string;
  full: boolean;
}

const MentButton: React.FC<MentButtonProps> = ({
  onPress,
  title,
  full,
  ...props
}) => {
  if (full) {
    return (
      <LinearGradient
        colors={['#009679', '#2ECC71']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        className="py-4 rounded-lg">
        <TouchableOpacity {...props} onPress={onPress}>
          <Text className="text-center text-mentlify-white text-lg">
            {title}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  } else {
    return (
      <TouchableOpacity
        {...props}
        onPress={onPress}
        className="border border-mentlify-green py-4 rounded-lg">
        <Text className="text-center text-mentlify-white text-mentlify-green text-lg">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default MentButton;

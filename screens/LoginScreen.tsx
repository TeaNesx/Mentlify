import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import MentInput from '../components/MentInput';
import MentButton from '../components/Mentbutton';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email === 'test@test.de' && password === 'test1234') {
      navigation.navigate('Question');
    } else {
      Alert.alert('Login failed', 'Invalid email or password.');
    }
  };

  return (
    <View className="flex-1 bg-white justify-center items-center px-4 py-8">
      <Image
        source={require('../images/Mentlify_Logo.png')}
        className="mb-16"
      />

      <View className="w-full">
        <MentInput
          title="Deine E-Mail"
          placeholder="Gebe deine E-Mail ein"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="w-full mt-7">
        <MentInput
          title="Dein Passwort"
          placeholder="Gebe dein Passwort ein"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity className="ml-auto mb-10">
          <Text>Passwort vergessen?</Text>
        </TouchableOpacity>
      </View>

      <View className="w-full">
        <MentButton title="Anmelden" full={true} onPress={handleSignIn} />
      </View>

      <View className="mt-14">
        <Text className="mx-4 text-mentlify-green text-base">
          oder melde dich an mit
        </Text>
      </View>

      <View className="flex flex-row mt-5">
        <TouchableOpacity
          className="border rounded-full p-3 mr-6"
          style={{borderColor: '#E3E5E5'}}>
          <Icon name="google" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          className="border rounded-full p-3"
          style={{borderColor: '#E3E5E5', backgroundColor: '#000'}}>
          <Icon name="apple1" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View className="flex flex-row mt-12">
        <Text className="text-mentlify-green text-base">
          Du bist neu hier?{' '}
        </Text>
        <TouchableOpacity>
          <Text className="text-mentlify-secondary underline text-base">
            Registriere dich jetzt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

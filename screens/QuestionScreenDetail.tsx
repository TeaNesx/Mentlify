import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Mentbutton from '../components/Mentbutton';
import {ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function QuestionScreenDetail({route}) {
  //   const {selectedAnswers} = route.params;

  //TODO: Backend logic for answers. Use const selectedAnswers to progress Answers
  const staticSelectedAnswers = [
    'Nie',
    'Ja',
    'Sehr gut',
    'Nie',
    'Ja, oft',
    'Sehr hoch',
    'Selten',
    'Ja',
    'Ja',
    'Ja',
  ];

  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Therapist');
  };

  return (
    <ScrollView
      className="flex flex-col px-4 py-8 h-screen"
      style={{backgroundColor: '#fff'}}>
      <View className="w-full mb-7">
        <Image
          source={require('../images/Logo_without_text.png')}
          className="mx-auto"
        />
      </View>

      <View>
        <Text className="text-xl mb-7">
          Du hast eine hohe Wahrscheinlichkeit an{' '}
          <Text className="font-bold">Depressionen</Text>
        </Text>
      </View>

      <View className="mb-12">
        <ProgressBar
          indeterminate={false}
          progress={0.8}
          color={'#00B85D'}
          className="h-3.5 rounded-lg mb-2.5"
        />
        <View className="flex-row">
          <Text className="text-base text-mentlify-gray font-bold">
            Depressionen
          </Text>
          <Text className="ml-auto text-base text-mentlify-gray font-bold">
            80%
          </Text>
        </View>
      </View>

      {/* TODO: Making possible answers dynamic for other answers */}
      <View className="mb-7 opacity-40">
        <ProgressBar
          indeterminate={false}
          progress={0.68}
          color={'#00B85D'}
          className="h-3.5 rounded-lg mb-2.5"
        />
        <View className="flex-row">
          <Text className="text-base text-mentlify-gray">Angststörung</Text>
          <Text className="ml-auto text-base text-mentlify-gray">68%</Text>
        </View>
      </View>
      <View className="mb-7 opacity-40">
        <ProgressBar
          indeterminate={false}
          progress={0.3}
          color={'#00B85D'}
          className="h-3.5 rounded-lg mb-2.5"
        />
        <View className="flex-row">
          <Text className="text-base text-mentlify-gray">Schlafstörung</Text>
          <Text className="ml-auto text-base text-mentlify-gray">30%</Text>
        </View>
      </View>
      <View className="mb-7 opacity-40">
        <ProgressBar
          indeterminate={false}
          progress={0.12}
          color={'#00B85D'}
          className="h-3.5 rounded-lg mb-2.5"
        />
        <View className="flex-row">
          <Text className="text-base text-mentlify-gray">Bipolare Störung</Text>
          <Text className="ml-auto text-base text-mentlify-gray">12%</Text>
        </View>
      </View>
      <View className="mb-7 opacity-40">
        <ProgressBar
          indeterminate={false}
          progress={0.01}
          color={'#00B85D'}
          className="h-3.5 rounded-lg mb-2.5"
        />
        <View className="flex-row">
          <Text className="text-base text-mentlify-gray">Essstörung</Text>
          <Text className="ml-auto text-base text-mentlify-gray">1%</Text>
        </View>
      </View>

      <View className="flex flex-col">
        <Mentbutton title="Weiter" full={true} onPress={handleNext} />
        <Mentbutton className="mt-5" title="Zurück" full={false} />
      </View>
    </ScrollView>
  );
}

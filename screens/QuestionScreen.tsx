import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProgressBar} from 'react-native-paper';
import MentSelect from '../components/MentSelect';
import Mentbutton from '../components/Mentbutton';

const questions = [
  {
    id: 1,
    question:
      'Wie oft fühlen Sie sich in letzter Zeit niedergeschlagen oder traurig?',
    answers: ['Nie', 'Selten', 'Manchmal', 'Häufig', 'Ständig'],
  },
  {
    id: 2,
    question:
      'Haben Sie in den letzten Wochen Interesse oder Freude an Aktivitäten verloren, die Ihnen früher Spaß gemacht haben?',
    answers: ['Ja', 'Nein'],
  },
  {
    id: 3,
    question: 'Wie gut schlafen Sie in der Regel?',
    answers: [
      'Sehr gut',
      'Gut',
      'Durchschnittlich',
      'Schlecht',
      'Sehr schlecht',
    ],
  },
  {
    id: 4,
    question: 'Fühlen Sie sich oft nervös, ängstlich oder besorgt?',
    answers: ['Nie', 'Selten', 'Manchmal', 'Häufig', 'Ständig'],
  },
  {
    id: 5,
    question:
      'Haben Sie in letzter Zeit Gedanken gehabt, sich selbst Schaden zuzufügen?',
    answers: ['Ja, oft', 'Ja, manchmal', 'Nein, nie'],
  },
  {
    id: 6,
    question: 'Wie würden Sie Ihren Energielevel im Allgemeinen beschreiben?',
    answers: [
      'Sehr hoch',
      'Hoch',
      'Durchschnittlich',
      'Niedrig',
      'Sehr niedrig',
    ],
  },
  {
    id: 7,
    question:
      'Wie oft fühlen Sie sich überwältigt oder unfähig, mit Ihren Problemen umzugehen?',
    answers: ['Nie', 'Selten', 'Manchmal', 'Häufig', 'Ständig'],
  },
  {
    id: 8,
    question:
      'Haben Sie in letzter Zeit Veränderungen in Ihrem Appetit bemerkt (z.B. deutliche Gewichtszunahme oder -abnahme)?',
    answers: ['Ja', 'Nein'],
  },
  {
    id: 9,
    question:
      'Hatten Sie in letzter Zeit Schwierigkeiten, sich zu konzentrieren oder Entscheidungen zu treffen?',
    answers: ['Ja', 'Nein'],
  },
  {
    id: 10,
    question:
      'Haben Sie das Gefühl, dass Ihre Stimmungsschwankungen Ihr tägliches Leben beeinträchtigen?',
    answers: ['Ja', 'Nein'],
  },
];

export default function QuestionScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(''),
  );

  const navigation = useNavigation();

  const handleSelect = (answer: string) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Alle Fragen wurden beantwortet:', selectedAnswers);
      navigation.navigate('QuestionDetail', {selectedAnswers});
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progress = currentQuestionIndex / questions.length;

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

      <View className="mb-7">
        <ProgressBar
          indeterminate={false}
          progress={progress}
          color={'#00B85D'}
          className="h-3.5 rounded-lg mb-2.5"
        />
        <Text className="text-base text-mentlify-gray">{`Frage ${
          currentQuestionIndex + 1
        } von ${questions.length}`}</Text>
      </View>

      <View className="mb-7">
        <Text className="text-xl font-medium mb-5 text-mentlify-gray">
          {questions[currentQuestionIndex].question}
        </Text>
        <View className="flex justify-space-between">
          <MentSelect
            answers={questions[currentQuestionIndex].answers}
            onSelect={handleSelect}
          />
        </View>
      </View>
      <View className="flex flex-col">
        <Mentbutton title="Weiter" full={true} onPress={handleNext} />
        {currentQuestionIndex > 0 && (
          <Mentbutton
            className="mt-5"
            title="Zurück"
            full={false}
            onPress={handlePrevious}
          />
        )}
      </View>
    </ScrollView>
  );
}

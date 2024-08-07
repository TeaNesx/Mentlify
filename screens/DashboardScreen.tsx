import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card, Button, Avatar, ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView className="p-5 bg-white flex-1 flex-col">
      <Card
        className="shadow-none border rounded-lg"
        style={{borderColor: '#E5E5E5', backgroundColor: '#fff'}}>
        <Card.Title title="Anstehender Termin" />
        <Card.Content className="mt-5 flex">
          <View className="space-y-2 flex">
            <View className="flex flex-row justify-between">
              <Text className="text-gray-500 dark:text-gray-400">Datum</Text>
              <Text className="font-medium" style={{color: '#000'}}>
                May 15, 2023
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-gray-500 dark:text-gray-400">Uhrzeit</Text>
              <Text className="font-medium" style={{color: '#000'}}>
                2:30 PM
              </Text>
            </View>
            <View className="flex flex-row justify-between mb-3">
              <Text className="text-gray-500 dark:text-gray-400">Doctor</Text>
              <Text className="font-medium" style={{color: '#000'}}>
                Dr. Jane Doe
              </Text>
            </View>

            <TouchableOpacity
              className="py-2 px-2 justify-end border float-right rounded-lg w-36 ml-auto"
              style={{borderColor: '#D61F69'}}>
              <Text className="text-center" style={{color: '#D61F69'}}>
                Termin abbrechen
              </Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>

      <Card
        className="shadow-none border rounded-lg mt-5"
        style={{borderColor: '#E5E5E5', backgroundColor: '#fff'}}>
        <Card.Title title="Letzter Besuch" />
        <Card.Content className="mt-5 flex">
          <View className="space-y-2 flex">
            <View className="flex flex-row justify-between">
              <Text className="text-gray-500 dark:text-gray-400">
                Letzter Besuch Datum
              </Text>
              <Text className="font-medium" style={{color: '#000'}}>
                Montag, 20 April 2024
              </Text>
            </View>
            <View className="flex flex-row justify-between mb-3">
              <Text className="text-gray-500 dark:text-gray-400">
                During your last visit, the doctor recommended increasing your
                daily exercise routine and monitoring your blood pressure more
                closely. They also suggested scheduling a follow-up appointment
                in 3 months to check on your progress.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('LastVisitList')}
              className="py-2 px-2 justify-end border float-right rounded-lg w-36 ml-auto border-menthly-green">
              <Text className="text-center text-menthly-green">
                Mehr Details
              </Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
      <Card
        className="shadow-none border rounded-lg mt-5"
        style={{borderColor: '#E5E5E5', backgroundColor: '#fff'}}>
        <Card.Title title="History" />
        <Card.Content className="mt-2 flex">
          <View className="space-y-2 flex">
            <ProgressBar
              indeterminate={false}
              progress={3 / 10}
              color={'#00B85D'}
            />
            <Text>3 von 10 Termine, weiter so!</Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );

  function NoteItem({date, content}) {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>
          {date}
        </Text>
        <Text style={{color: '#666666'}}>{content}</Text>
      </View>
    );
  }
}

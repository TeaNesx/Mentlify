import {useRoute, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

export default function TherapistAppointmentScreen() {
  const route = useRoute();
  const {name, specialties, description} = route.params;

  return (
    <ScrollView className="bg-white" style={{padding: 20}}>
      <Card
        className="bg-white border round-lg shadow-none"
        style={{marginBottom: 20, borderColor: '#E5E5E5'}}>
        <Card.Title title="Verfügbare Termine" />
        <Card.Content>
          <View style={{marginBottom: 20}}>
            <AppointmentItem day="Montag, 10. April" time="9:00 Uhr" />
            <AppointmentItem day="Dienstag, 11. April" time="11:00 Uhr" />
            <AppointmentItem day="Mittwoch, 12. April" time="14:00 Uhr" />
            <AppointmentItem day="Donnerstag, 13. April" time="16:30 Uhr" />
            <AppointmentItem day="Freitag, 14. April" time="10:00 Uhr" />
          </View>
        </Card.Content>
      </Card>
      <Card
        className="bg-white border round-lg shadow-none"
        style={{marginBottom: 20, borderColor: '#E5E5E5'}}>
        <Card.Title title={name} />
        <Card.Content>
          <Text>{description}</Text>
        </Card.Content>
      </Card>
      <Card
        className="bg-white border round-lg shadow-none"
        style={{borderColor: '#E5E5E5'}}>
        <Card.Title title="Details zum Therapeuten" />
        <Card.Content>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10}}>
            <DetailView icon="calendar" text="10+ Jahre Erfahrung" />
            <DetailView icon="clock" text="Wochentags, 9:00 - 18:00 Uhr" />
            <DetailView icon="locate" text="New York, NY" />
            <DetailView icon="phone" text="(555) 555-5555" />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

function AppointmentItem({day, time}) {
  const navigation = useNavigation();

  const handleAppointmentPress = () => {
    Alert.alert(
      'Termin bestätigen',
      `Möchtest du wirklich einen Termin für ${day} um ${time} Uhr buchen?`,
      [
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
        {
          text: 'Bestätigen',
          onPress: () => {
            Alert.alert(
              'Termin gebucht',
              `Dein Termin für ${day} um ${time} Uhr wurde erfolgreich gebucht.`,

              navigation.navigate('Dashboard'),
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Text style={{fontSize: 16, color: '#666666'}}>{day}</Text>
      <TouchableOpacity
        className="bg-menthly-green"
        style={{paddingVertical: 8, paddingHorizontal: 12, borderRadius: 5}}
        onPress={handleAppointmentPress}>
        <Text style={{color: '#FFFFFF', fontSize: 16}}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailView({icon, text}) {
  let iconSource;
  switch (icon) {
    case 'calendar':
      //   iconSource = require('./calendar.png');
      break;
    case 'clock':
      //   iconSource = require('./clock.png');
      break;
    case 'locate':
      //   iconSource = require('./locate.png');
      break;
    case 'phone':
      //   iconSource = require('./phone.png');
      break;
    default:
      iconSource = null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginBottom: 5,
      }}>
      <Avatar.Image
        size={60}
        source={require('../images/placeholder-user.jpg')}
      />
      <Text style={{fontSize: 14, color: '#666666'}}>{text}</Text>
    </View>
  );
}

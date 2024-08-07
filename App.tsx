// Importe für React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import der Bildschirmkomponenten
import LoginScreen from './screens/LoginScreen';
import QuestionScreen from './screens/QuestionScreen';
import TherapistScreen from './screens/TherapistScreen';
import TherapistAppointmentScreen from './screens/TherapistAppointmentScreen';
import DashboardScreen from './screens/DashboardScreen';
import LastVisitListScreen from './screens/LastVisitListScreen';
import QuestionScreenDetail from './screens/QuestionScreenDetail';

// Stack-Navigator erstellen
const Stack = createNativeStackNavigator();

// Hauptnavigationscontainer
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Therapist">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Therapist"
          component={TherapistScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TherapistAppointment"
          component={TherapistAppointmentScreen}
        />
        <Stack.Screen
          name="QuestionDetail"
          component={QuestionScreenDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="LastVisitList" component={LastVisitListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

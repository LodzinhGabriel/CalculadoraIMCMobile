import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Calculadora de IMC" }} />
        <Stack.Screen name="Resultado" component={ResultScreen} />
        <Stack.Screen name="Histórico" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

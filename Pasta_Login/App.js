import RegisterPages from "./src/components/RegisterPages";
import LoginPages from "./src/components/LoginPages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={RegisterPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

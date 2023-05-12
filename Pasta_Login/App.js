import RegisterPages from "./src/pages/RegisterPages";
import LoginPages from "./src/pages/LoginPages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Registro" component={RegisterPages} />
  </Stack.Navigator>
  );
}


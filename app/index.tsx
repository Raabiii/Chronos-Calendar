import HomeScreen from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/Detail";
import { Appointment } from "./model/Appointment";
import AddSaveScreen from "./screens/Add_Save";

export type RootStackParamList = {
  Home: undefined;
  Detail: { appointment: Appointment };
  AddSave: { add: true; appointment: Appointment };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Detail" component={DetailScreen} />
      <RootStack.Screen name="AddSave" component={AddSaveScreen} />
    </RootStack.Navigator>
  );
}

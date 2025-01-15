import HomeScreen from "./screens/home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/detail/Detail";
import { Appointment } from "./model/Appointment";
import AddSaveScreen from "./screens/add/Add_Save";
import Login from "./screens/login/Login";
import { Text } from "react-native";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Detail: { appointment: Appointment };
  AddSave: { add: true; appointment: Appointment };
  NotFound: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Detail" component={DetailScreen} />
      <RootStack.Screen name="AddSave" component={AddSaveScreen} />
      <RootStack.Screen name="Login" component={Login} />

      {/* Define a fallback route */}
    </RootStack.Navigator>
  );
}

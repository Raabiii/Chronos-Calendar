import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../index";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const DetailScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
      <Text>Detail Screen {route.params.appointment.title} </Text>
    </View>
  );
};

export default DetailScreen;

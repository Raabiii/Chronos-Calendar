import React, { useState } from "react";
import {
  Modal,
  Alert,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Switch,
} from "react-native";
import { RootStackParamList } from "../../index";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles, { Colors } from "./style_add_save";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type Props = NativeStackScreenProps<RootStackParamList, "AddSave">;

const AddSaveScreen = ({ route, navigation }: Props) => {
  const [isFullDay, setIsFullDay] = useState(false);
  const { add, appointment } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  let type = add ? "Add" : "Save";

  const toggleSwitch = () => {
    setIsFullDay((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar backgroundColor="#3B5323" barStyle="light-content" />
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.button}
        >
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
            // TDOO save the appointment
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <MaterialIcons
            name="title"
            style={styles.icon}
            size={24}
            color={Colors.background}
          />
          <TextInput
            style={styles.inputTitle}
            placeholder="Title"
            defaultValue={appointment.title}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        </View>
        <View style={styles.rowTime}>
          <AntDesign
            name="clockcircleo"
            style={styles.icon}
            size={24}
            color="white"
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.fullDayText}>Full Day</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isFullDay ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isFullDay}
            />
          </View>
        </View>
        <View style={styles.rowTime}>
          <AntDesign
            name="clockcircleo"
            style={styles.icon}
            size={24}
            color={Colors.background}
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.fullDayText}>
              {DAYS[appointment.startDate.getDay()]}
              {", "}
              {appointment.startDate.getDate()}
              {". "}
              {MONTHS[appointment.startDate.getMonth()]}{" "}
              {appointment.startDate.getFullYear()}
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("pressed");
              }}
            >
              <Text style={styles.fullDayText}>
                {formatTime(appointment.startDate.getTime())}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <AntDesign
            name="clockcircleo"
            style={styles.icon}
            size={24}
            color={Colors.background}
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.fullDayText}>
              {DAYS[appointment.endDate.getDay()]}
              {", "}
              {appointment.endDate.getDate()}
              {". "}
              {MONTHS[appointment.endDate.getMonth()]}{" "}
              {appointment.endDate.getFullYear()}
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("pressed");
              }}
            >
              <Text style={styles.fullDayText}>
                {formatTime(appointment.endDate.getTime())}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome
            name="repeat"
            style={styles.icon}
            size={24}
            color="white"
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.inputTitle}
              placeholder="Repeat"
              defaultValue={appointment.title}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </View>
        </View>
        {/* TODO CALENDAR */}
        <View style={styles.row}>
          <FontAwesome
            name="repeat"
            style={styles.icon}
            size={24}
            color="white"
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.inputTitle}
              placeholder="Calendar"
              defaultValue={appointment.title}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </View>
        </View>
        <View style={styles.row}>
          <Entypo
            name="location-pin"
            style={styles.icon}
            size={24}
            color="white"
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.inputTitle}
              placeholder="Location"
              defaultValue={appointment.location}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome5
            name="bell"
            style={styles.icon}
            size={24}
            color="white"
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.inputTitle}
              placeholder="Notification"
              defaultValue={appointment.notification.toString()}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </View>
        </View>
        <View style={styles.row}>
          <Entypo name="text" style={styles.icon} size={24} color="white" />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.inputTitle}
              placeholder="Description"
              defaultValue={appointment.description}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

function formatTime(timestamp: number): string {
  const date = new Date(timestamp); // Create a Date object from the timestamp
  const hours = date.getHours().toString().padStart(2, "0"); // Get hours and pad with zero if needed
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Get minutes and pad with zero if needed

  return `${hours}:${minutes}`; // Return formatted time
}

export default AddSaveScreen;

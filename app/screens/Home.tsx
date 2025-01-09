import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppointmentService from "../service/AppointmentService";
import { Appointment } from "../model/Appointment";
import { Colors, styles } from "./style_home";
import { RootStackParamList } from "../index";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HOURS = Array.from({ length: 24 }, (_, i) => `${i}:00`);

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

import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const HomeScreen = ({ route, navigation }: Props) => {
  const today = new Date();
  const school = new Appointment(
    "School",
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 25),
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 45),
    false,
    false,
    "Test",
    "Test",
    0
  );

  AppointmentService.addAppointment(school);

  const appointmentsToday = AppointmentService.getAppointmentsForDate(today);

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar backgroundColor="#3B5323" barStyle="light-content" />
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="hamburger" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMonth}>
          <Text style={styles.monthText}>{MONTHS[today.getMonth()]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayButton}>
          <Text style={styles.dayText}>{today.getDate()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        {/* <Text style={styles.monthText}>{appointment.date}</Text> */}
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          {/* Hour Labels */}
          <View style={styles.hourColumn}>
            {HOURS.map((hour, index) => (
              <View key={index} style={styles.hourRow}>
                <Text
                  style={[
                    styles.hourText,
                    index === 0 && { color: Colors.background },
                  ]}
                >
                  {index < 10 ? "0" + hour : hour}
                </Text>
              </View>
            ))}
          </View>

          {/* Grid Lines and Appointments */}
          <View style={styles.appointmentsColumn}>
            {HOURS.map((_, index) => (
              <View key={index} style={styles.gridLine} />
            ))}
            {appointmentsToday.map((appointment) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(appointment.title);
                  navigation.navigate("Detail", { appointment: appointment });
                }}
                key={appointment.id}
                style={[
                  styles.appointment,
                  {
                    top:
                      appointment.startDate.getHours() * 60 +
                      appointment.startDate.getMinutes(), // Position based on start time
                    height:
                      (appointment.endDate.getTime() -
                        appointment.startDate.getTime()) /
                      (1000 * 60), // Height based on duration
                  },
                ]}
              >
                <Text style={styles.appointmentText}>{appointment.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

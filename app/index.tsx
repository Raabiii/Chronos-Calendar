import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppointmentService from "./service/AppointmentService";
import { Appointment } from "./model/Appointment";

const Months = [
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

const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Scheduler = () => {
  const today = new Date();
  const appointment = new Appointment(
    "Test",
    new Date(today.getTime() - 2 * 60 * 60 * 1000),
    new Date(),
    false,
    false,
    "Test",
    "Test",
    0
  );
  // AppointmentService.addAppointment(appointment);
  AppointmentService.addAppointment(
    new Appointment(
      "School",
      new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 25),
      new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 45),
      false,
      false,
      "Test",
      "Test",
      0
    )
  );

  AppointmentService.getAppointments().forEach((appointment) => {
    console.log(appointment);
  });

  const rows = Array.from({ length: 24 }, (_, rowIndex) => (
    <View
      key={rowIndex}
      style={[styles.row, rowIndex == 23 ? { borderBottomWidth: 0 } : {}]}
    >
      <View style={styles.time}>
        <Text
          style={rowIndex != 0 ? styles.white : { color: Colors.background }}
        >
          {rowIndex}:00
        </Text>
      </View>
      <View style={styles.cell}>
        {AppointmentService.getAppointments()
          .filter(
            (appointment) =>
              appointment.startDate.getHours() === rowIndex ||
              (appointment.startDate.getHours() < rowIndex &&
                appointment.endDate.getHours() > rowIndex)
          )
          .map((appointment, index) => (
            <View
              key={index}
              style={{
                ...styles.appointment,
                height:
                  (appointment.endDate.getTime() -
                    appointment.startDate.getTime()) /
                  (1000 * 60),
              }}
            >
              <Text style={styles.appointmentText}>{appointment.title}</Text>
              <Text style={styles.appointmentText}>
                {appointment.startDate.toLocaleTimeString()} -{" "}
                {appointment.endDate.toLocaleTimeString()}
              </Text>
            </View>
          ))}
      </View>
    </View>
  ));

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
          <Text style={styles.monthText}>{Months[today.getMonth()]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayButton}>
          <Text style={styles.dayText}>{today.getDate()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        {/* <Text style={styles.monthText}>{appointment.date}</Text> */}
      </View>
      <ScrollView contentContainerStyle={styles.calendar}>
        {rows}
        {/* <View style={styles.row}>
          <View style={styles.time}>
            <Text style={styles.white}>24:00</Text>
          </View>
          <View style={styles.cell}></View>
        </View> */}
      </ScrollView>
    </View>
  );
};

const Colors = {
  background: "#121212",
  oliveGreen: "#3B5323",
  darkerOliveGreen: "#556B2F",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // Dark background
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.oliveGreen, // Olive green for the top bar
  },
  button: {
    backgroundColor: Colors.darkerOliveGreen, // Slightly darker olive green for the button
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  buttonMonth: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  monthText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  dayButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginLeft: 8,
  },
  dayText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  plusButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  calendar: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  hourSlot: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    height: 60, // Each hour slot height
    backgroundColor: "#1F1F1F", // Darker shade for grid background
    borderWidth: 1,
    borderColor: Colors.oliveGreen, // Olive green borders to give a grid look
    borderRadius: 4,
  },
  appointment: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#FFFFFF", // Light olive green for appointment card
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 8,
  },
  appointmentText: {
    color: Colors.darkerOliveGreen,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.oliveGreen, // Olive green border for each row
  },
  time: {
    flex: 1,
    bottom: 21,
    right: 5,
    backgroundColor: Colors.background,
    // borderRightWidth: 1,
    borderColor: Colors.oliveGreen, // Olive green border for time column
    padding: 10,
    alignItems: "center",
  },
  timeText: {
    // width: 50,
    color: "#FFFFFF", // White text for time
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: Colors.background,
    // borderRightWidth: 1,
    // borderRightColor: Colors.oliveGreen, // Separate time column with olive green border
    paddingRight: 8,
  },
  cell: {
    flex: 11,
    padding: 10,
    alignItems: "center",
    color: "#FFFFFF",
    borderLeftWidth: 1,
    borderColor: Colors.oliveGreen, // Olive green border for each cell
  },
  white: {
    color: "#FFFFFF",
  },
});

export default Scheduler;

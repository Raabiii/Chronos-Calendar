import React, { useState } from "react";
import {
  Modal,
  Alert,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../index";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles, { Colors } from "./style_detail";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppointmentService from "../../service/AppointmentService";

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

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const DetailScreen = ({ route, navigation }: Props) => {
  const { appointment } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    // <View>
    //   <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
    //   <Text>Detail Screen {route.params.appointment.title} </Text>
    // </View>
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
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.edit}>
            <FontAwesome5 name="pen" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="trash-bin" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.colorBar}></View>
        <View style={styles.appointment}>
          <Text style={styles.appointmentTitle}>{appointment.title}</Text>
          {!appointment.allDay ? (
            <>
              <Text style={styles.appointmentText}>{`${
                DAYS[appointment.startDate.getDay()]
              }, ${appointment.startDate.getDate()}. ${
                MONTHS[appointment.startDate.getMonth()]
              } ${appointment.startDate.getFullYear()}`}</Text>
              <Text style={styles.appointmentText}>{`${formatTime(
                appointment.startDate.getTime()
              )} - ${formatTime(appointment.endDate.getTime())}`}</Text>
            </>
          ) : (
            <>
              <Text style={styles.appointmentText}>{`${
                DAYS[appointment.startDate.getDay()]
              }, ${appointment.startDate.getDate()}. ${
                MONTHS[appointment.startDate.getMonth()]
              } ${appointment.startDate.getFullYear()} ${formatTime(
                appointment.startDate.getTime()
              )} - ${
                DAYS[appointment.endDate.getDay()]
              }, ${appointment.endDate.getDate()}. ${
                MONTHS[appointment.endDate.getMonth()]
              } ${appointment.endDate.getFullYear()} ${formatTime(
                appointment.endDate.getTime()
              )}`}</Text>
            </>
          )}
          <Text style={styles.appointmentText}>{appointment.description}</Text>
          <Text style={styles.appointmentText}>{appointment.location}</Text>
          <Text style={styles.appointmentRepeat}>
            {appointment.repeat ? "Repeat weekly" : ""}
          </Text>
        </View>
      </View>

      <View style={styles.contentCalendar}>
        <View>
          <Entypo name="calendar" size={32} color="white" />
        </View>
        <View>
          <Text style={styles.appointmentCalendar}>Calendar</Text>
        </View>
      </View>
      <View style={styles.contentCalendar}>
        <View>
          <MaterialCommunityIcons name="bell" size={32} color="white" />
        </View>
        <View>
          <Text style={styles.appointmentCalendar}>
            Notification ({appointment.notification} min before)
          </Text>
        </View>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Delete Appointment</Text>
                <Text style={styles.modalText}>
                  Are you sure you want to delete this appointment?
                </Text>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      AppointmentService.deleteAppointment(appointment.id);
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.textStyle}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

function formatTime(timestamp: number): string {
  const date = new Date(timestamp); // Create a Date object from the timestamp
  const hours = date.getHours().toString().padStart(2, "0"); // Get hours and pad with zero if needed
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Get minutes and pad with zero if needed

  return `${hours}:${minutes}`; // Return formatted time
}

export default DetailScreen;

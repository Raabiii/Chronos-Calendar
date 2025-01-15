import { StyleSheet } from "react-native";
import { Colors } from "../style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  edit: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  plusButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  content: {
    // padding: 52,
    paddingVertical: 20,
    // paddingBottom: 20,
    flexDirection: "row",
  },
  colorBar: {
    width: 5,
    marginHorizontal: 35,
    backgroundColor: Colors.darkerOliveGreen,
  },
  appointment: {
    flex: 1,
  },
  appointmentTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  appointmentText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  appointmentRepeat: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  contentCalendar: {
    padding: 20,
    paddingTop: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  appointmentCalendar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.oliveGreen,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalText: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
export { Colors };

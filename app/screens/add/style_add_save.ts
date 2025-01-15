import { StyleSheet } from "react-native";
import { Colors } from "../style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  grid: {
    flexDirection: "row",
    position: "relative",
  },
  hourColumn: {
    width: 70,
    backgroundColor: Colors.background,
  },
  hourRow: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.oliveGreen,
    justifyContent: "flex-start", // Align time to the top of the row
    paddingTop: 2,
  },
  hourText: {
    fontSize: 16,
    backgroundColor: Colors.background,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute", // Ensure the time aligns with the grid line
    top: -23, // Adjust the position so it aligns with the grid line
    padding: 10,
  },
  appointmentsColumn: {
    flex: 1,
    position: "relative",
    borderLeftWidth: 1,
    borderColor: Colors.oliveGreen,
    backgroundColor: Colors.background,
  },
  gridLine: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.oliveGreen,
  },
  appointment: {
    position: "absolute",
    left: 10,
    right: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 5,
  },
  appointmentText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.oliveGreen, // Olive green for the top bar
  },
  button: {
    justifyContent: "center",
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
  row: {
    width: "100%",
    flexDirection: "row",
    paddingRight: 15,
    alignItems: "center",
    backgroundColor: Colors.background,
    borderBottomWidth: 2,
    borderBottomColor: Colors.oliveGreen,
  },
  rowTime: {
    width: "100%",
    flexDirection: "row",
    paddingRight: 15,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  icon: {
    padding: 20,
  },
  inputTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 2,
    justifyContent: "flex-start",
  },
  textTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 2,
    justifyContent: "flex-start",
  },
  fullDayText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default styles;
export { Colors };

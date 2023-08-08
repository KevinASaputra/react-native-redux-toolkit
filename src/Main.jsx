import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./navigation/MainNavigation";
import { StyleSheet } from "react-native";

export const Main = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

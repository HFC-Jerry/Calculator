import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Switch } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import MyKeyBoard from "./src/components/MyKeyBoard";

export default function App() {
  const [theme, setTheme] = useState("light");

  const getContainerStyle = () => {
    return theme === "light" ? styles.lightContainer : styles.darkContainer;
  };

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={getContainerStyle()}>
        <StatusBar style="auto" />
        
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          style={styles.switch}  
        />
        
        <MyKeyBoard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center", 
    justifyContent: "flex-start", 
  },
  darkContainer: {
    flex: 1,
    backgroundColor: myColors.black,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  switch: {
    position: "absolute", 
    top: 50, 
    right: 20, 
  },
});

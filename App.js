import { StyleSheet, Text, View } from "react-native";
import ThemecontextProvider from "./context/Themecontext";

import Calculator from "./screens/Calculator";
export default function App() {
  return (
    <View style={styles.container}>
      <ThemecontextProvider>
        <Calculator />
      </ThemecontextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

import {
  Animated,
  Dimensions,
  Pressable,
  StatusBar as status,
  StyleSheet,
  View,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { colors } from "../colors/styles";
import Row from "../Components/Row";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
import Input from "../Components/Input";
import { Theme } from "../context/Themecontext";
import { StatusBar } from "expo-status-bar";
const btns = [
  ["AC", "( )", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "backspace", "="],
];

const { width } = Dimensions.get("window");
const MainWidth = width / 3;
const selectedWidth = MainWidth / 2;
const Calculator = () => {
  const ctx = useContext(Theme);
  const translateX = useRef(new Animated.Value(0)).current;
  //   const opacity = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  //   const [isLight, setIsLight] = useState(false);
  const [ans, setAns] = useState("");

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: index * selectedWidth,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return (
    <>
      {ctx.isLightTheme && <StatusBar style="dark" />}
      {!ctx.isLightTheme && <StatusBar style="light" />}

      <Animated.View
        style={[
          styles.container,
          ctx.isLightTheme && { backgroundColor: colors.LightBg },
        ]}
      >
        <View style={styles.theme}>
          <Animated.View
            style={[styles.tabslide, { transform: [{ translateX }] }]}
          ></Animated.View>
          <Pressable
            style={styles.icons}
            onPress={() => {
              setIndex(0);
              ctx.changeTheme(false);
              // setIsLight(false);
            }}
          >
            <Ionicons name="ios-moon" size={20} color="white" />
          </Pressable>
          <Pressable
            style={styles.icons}
            onPress={() => {
              setIndex(1);
              ctx.changeTheme(true);
            }}
          >
            <Entypo name="light-up" size={20} color="white" />
          </Pressable>
        </View>
        <View
          style={[
            styles.input,
            ctx.isLightTheme && { backgroundColor: colors.LightInputBg },
          ]}
        >
          <Input value={input} ans={ans} />
        </View>
        <View style={styles.btns}>
          {btns.map((ele, idx) => (
            <Row
              setInput={setInput}
              ans={ans}
              setAns={setAns}
              input={input}
              data={ele}
              key={idx}
            />
          ))}
        </View>

        {/* <Text>Calculator</Text> */}
      </Animated.View>
    </>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlack,
    position: "relative",
  },
  input: {
    backgroundColor: colors.darkGreen,
    flex: 1,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  btns: {
    flex: 2,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  theme: {
    position: "absolute",
    width: MainWidth,
    // borderColor: "white",
    //   height: 30,
    top: status.currentHeight + 10,
    // borderWidth: 2,
    zIndex: 3,
    backgroundColor: colors.ansColor,
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  icons: {
    padding: 10,
    borderRadius: 20,
    // borderWidth: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabslide: {
    width: selectedWidth + 5,
    height: "100%",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.lightBlack,
    borderRadius: 20,
  },
});

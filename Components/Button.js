import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { colors } from "../colors/styles";
import { Theme } from "../context/Themecontext";

const Button = ({ children, light, op, onPress }) => {
  const ctx = useContext(Theme);
  return (
    <View
      style={[
        styles.btnContainer,
        light && styles.highlightedBg,
        op && styles.operatorBg,
        ctx.isLightTheme &&
          !light &&
          !op && {
            backgroundColor: colors.lightDefaultBtn,
          },
        ctx.isLightTheme &&
          light && {
            backgroundColor: colors.lightHighlightedBtn,
          },
      ]}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={styles.btn}
      >
        <Text
          style={[
            styles.text,
            (light || op) && styles.highlightedTxt,
            ctx.isLightTheme && styles.lightText,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "white",
  },
  btnContainer: {
    // borderWidth: 2,
    flex: 1,
    height: "100%",
    margin: 4,
    elevation: 4,
    overflow: "hidden",
    borderRadius: 300,
    backgroundColor: colors.defaultButton,
  },
  highlightedBg: { backgroundColor: colors.highlightedBtn, overflow: "hidden" },
  highlightedTxt: { color: "black" },
  operatorBg: {
    backgroundColor: colors.operator,
  },
  btn: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lightText: {
    color: "black",
  },
});

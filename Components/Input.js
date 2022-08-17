import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useRef } from "react";
import { colors } from "../colors/styles";
import { Theme } from "../context/Themecontext";
const Input = ({ value, ans }) => {
  const ctx = useContext(Theme);
  const scrollViewRef = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        style={styles.input}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <Text
          style={[
            styles.inputtxt,
            ctx.isLightTheme && { color: colors.lightInputColor },
          ]}
        >
          {value}
        </Text>
      </ScrollView>
      <ScrollView horizontal style={styles.ans}>
        <Text
          style={[
            styles.anstxt,
            ctx.isLightTheme && { color: colors.lightAnsColor },
          ]}
        >
          {ans}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    alignItems: "flex-end",
    // borderWidth: 2,
  },
  input: {
    // flex: 2,
    marginTop: 80,
    // padding: 6,
    // borderWidth: 2,
  },
  ans: {
    // flex: 1,
    // borderWidth: 2,
    marginTop: 20,
  },
  inputtxt: {
    fontSize: 70,
    color: colors.inputColor,
    textAlign: "right",
    letterSpacing: 2.5,
  },
  anstxt: {
    color: colors.ansColor,
    textAlign: "right",
    letterSpacing: 2.5,
    fontSize: 40,
  },
});

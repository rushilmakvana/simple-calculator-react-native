import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "./Button";
import { FontAwesome5 } from "@expo/vector-icons";

const Row = ({ data, setInput, ans, input, setAns }) => {
  function InputHandler(num) {
    // console.log(ans);
    if (num === "AC") {
      setInput("");
      setAns("");
      return;
    }
    if (num.length > 2) {
      setInput(input.slice(0, input.length - 1));
      return;
    }
    if (ans !== "") {
      setInput(ans + num);
      setAns("");
      return;
    }
    setInput(input + num);
  }
  function submitHandler() {
    // const mul = input.indexOf("x");
    let x = input.replace("x", "*");
    // console.log(mul);
    const news = eval(x);
    setAns(news);
    setInput("");
    // console.log(news.toString());
  }
  return (
    <View style={styles.row}>
      {/* <Text style={styles.text}>Row</Text> */}
      {data.map((ele, idx) => {
        if (ele === "AC") {
          return (
            <Button
              key={idx}
              light={true}
              onPress={InputHandler.bind(this, `${ele}`)}
            >
              {ele}
            </Button>
          );
        }
        if (ele === "=") {
          return (
            <Button key={idx} light={true} onPress={submitHandler}>
              {ele}
            </Button>
          );
        }
        if (
          ele === "+" ||
          ele === "-" ||
          ele === "%" ||
          ele === "( )" ||
          ele === "x" ||
          ele === "/"
        ) {
          return (
            <Button
              key={idx}
              op={true}
              onPress={InputHandler.bind(this, `${ele}`)}
            >
              {ele}
            </Button>
          );
        }
        if (ele === "backspace") {
          return (
            <Button key={idx} onPress={InputHandler.bind(this, `${ele}`)}>
              <FontAwesome5 name="backspace" size={24} />
            </Button>
          );
        }
        return (
          <Button key={idx} onPress={InputHandler.bind(this, `${ele}`)}>
            {ele}
          </Button>
        );
      })}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginVertical: 15,
    padding: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

import React from "react";
import { Text, TextInput, View } from "react-native";

const HelloWave = () => {
  return (
    <View>
      <Text>HelloWave</Text>
      <TextInput style={{ borderColor: "red", borderWidth: 1, padding: 1 }} />
    </View>
  );
};

export default HelloWave;

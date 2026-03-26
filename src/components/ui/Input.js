import { TextInput } from "react-native";

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={{
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      }}
    />
  );
}

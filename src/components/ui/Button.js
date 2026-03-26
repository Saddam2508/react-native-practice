import { Pressable, Text } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
}

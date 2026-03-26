import { View, Text } from "react-native";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      navigation.navigate("dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

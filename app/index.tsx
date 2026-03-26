// import { useRouter } from "expo-router";
// import { Button, Text, TextInput, View } from "react-native";
// import { styles } from "./styles";

// export default function Index() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text>Welcome to My App!</Text>
//       <TextInput style={styles.input} placeholder="enter your username" />
//       <TextInput style={styles.input} placeholder="enter your password" />
//       <Button title="Go to Tabs" onPress={() => router.push("/(tabs)/home")} />
//     </View>
//   );
// }
import React from "react";
import AppNavigator from "../src/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}

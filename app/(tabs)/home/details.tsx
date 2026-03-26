import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function Details() {
  const router = useRouter();

  return (
    <Button
      title="Go Back"
      onPress={() => router.replace("/dashboard" as any)}
    />
  );
}

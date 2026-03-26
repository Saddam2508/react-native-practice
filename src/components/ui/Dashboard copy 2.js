import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => <Text>🏠 Home Content</Text>;
const Profile = () => <Text>👤 Profile Content</Text>;
const Orders = () => <Text>🛒 Orders Content</Text>;
const Settings = () => <Text>⚙️ Settings Content</Text>;

export default function Dashboard({ navigation }) {
  const [selected, setSelected] = useState("Home");

  const menuItems = [
    { id: "1", title: "Home", icon: "home" },
    { id: "2", title: "Profile", icon: "person" },
    { id: "3", title: "Orders", icon: "shopping-cart" },
    { id: "4", title: "Settings", icon: "settings" },
  ];

  const renderItem = ({ item }) => {
    const isActive = selected === item.title;

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          margin: 10,
          padding: 20,
          backgroundColor: isActive ? "#d1e7ff" : "#f2f2f2", // 👈 active color
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => {
          if (item.title === "Profile") {
            navigation.navigate("Profile"); // 👉 অন্য layout
          } else {
            setSelected(item.title); // 👉 নিচে change হবে
          }

          // web focus fix
          if (typeof document !== "undefined") {
            document.activeElement?.blur();
          }
        }}
      >
        <Icon name={item.icon} size={30} />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    switch (selected) {
      case "Home":
        return <Home />;
      case "Orders":
        return <Orders />;
      case "Settings":
        return <Settings />;
      default:
        return <Text>Select something</Text>;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 🔼 Menu Grid */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {/* 🔽 Dynamic Section */}
      <View
        style={{
          flex: 1,
          padding: 20,
          borderTopWidth: 1,
          borderColor: "#ccc",
        }}
      >
        {renderContent()}
      </View>
    </View>
  );
}

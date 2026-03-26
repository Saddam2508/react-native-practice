import { FlatList, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Dashboard({ navigation }) {
  const menuItems = [
    { id: "1", title: "Home", icon: "home" },
    { id: "2", title: "Profile", icon: "person" },
    { id: "3", title: "Orders", icon: "shopping-cart" },
    { id: "4", title: "Settings", icon: "settings" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        alignItems: "center",
      }}
      onPress={() => navigation.navigate(item.title)}
    >
      <Icon name={item.icon} size={30} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={menuItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // 👈 grid layout
    />
  );
}

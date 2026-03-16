import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

const items = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Orange" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Expo Home Screen</Text>
      <Text style={styles.subheader}>Sample item list:</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      <View style={styles.aboutBox}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text>This is a simple Expo mobile app built for class practice.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 12,
  },
  item: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  aboutBox: {
    marginTop: 30,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

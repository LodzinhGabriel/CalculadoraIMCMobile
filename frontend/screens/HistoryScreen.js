import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default function HistoryScreen() {
  // Você pode integrar AsyncStorage ou backend aqui
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico ainda não implementado</Text>
      <Text style={{ color: "gray" }}>Integração opcional com backend Node.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold" }
});
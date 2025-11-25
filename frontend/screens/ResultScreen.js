import { View, Text, Button, StyleSheet } from "react-native";
import { calcularIMC } from "../utils/imc";

export default function ResultScreen({ route, navigation }) {
  const { peso, altura } = route.params;
  const { imc, categoria } = calcularIMC(peso, altura);

  return (
    <View style={styles.container}>
      <Text style={styles.imcValue}>{imc}</Text>
      <Text style={styles.category}>{categoria}</Text>

      <View style={{ marginTop: 30 }}>
        <Button title="Novo Cálculo" onPress={() => navigation.navigate("Home")} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Ver Histórico" onPress={() => navigation.navigate("Histórico")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  imcValue: { fontSize: 50, fontWeight: "bold" },
  category: { fontSize: 24, marginTop: 10 }
});

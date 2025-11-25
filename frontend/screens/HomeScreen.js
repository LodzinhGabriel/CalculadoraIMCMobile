import { View, Button, StyleSheet } from "react-native";
import { useState } from "react";
import InputField from "../components/InputField";

export default function HomeScreen({ navigation }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  return (
    <View style={styles.container}>
      <InputField label="Altura (m)" value={altura} onChange={setAltura} />
      <InputField label="Peso (kg)" value={peso} onChange={setPeso} />

      <Button
        title="Calcular IMC"
        onPress={() =>
          navigation.navigate("Resultado", {
            peso: parseFloat(peso),
            altura: parseFloat(altura)
          })
        }
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Ver Histórico"
          onPress={() => navigation.navigate("Histórico")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

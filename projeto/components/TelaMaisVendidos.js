import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

export default function TelaMaisVendidos({ maisVendidos, voltar }) {
  const lista = Object.entries(maisVendidos)
    .map(([nome, quantidade]) => ({ nome, quantidade }))
    .sort((a, b) => b.quantidade - a.quantidade);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos Mais Vendidos</Text>

      {lista.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Nenhuma venda registrada ainda.</Text>
      ) : (
        <FlatList
          data={lista}
          keyExtractor={(item) => item.nome}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.posicao}>#{index + 1}</Text>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.quantidade}>Vendidos: {item.quantidade}</Text>
            </View>
          )}
        />
      )}

      <Button title="Voltar à Loja" onPress={voltar} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f2f5",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  posicao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  quantidade: {
    fontSize: 16,
    color: "#555",
  },
});

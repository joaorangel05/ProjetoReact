
import React from "react";
import { View, Text, Button, FlatList, Image, StyleSheet } from "react-native";

export default function TelaCarrinho({ carrinho, voltar, removerItem, finalizarCompra }) {
  const total = carrinho.reduce((sum, item) => sum + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Seu carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={carrinho}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>R$ {item.preco}</Text>
              <Button title="Remover" onPress={() => removerItem(index)} color="#d9534f" />
            </View>
          )}
        />
      )}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

      <View style={{ marginTop: 20, gap: 10 }}>
        <Button title="Finalizar Compra" onPress={finalizarCompra} disabled={carrinho.length === 0} />
        <Button title="Voltar à Loja" onPress={voltar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#f9f9f9", padding: 20 },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
    width: 320,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  imagem: { width: 100, height: 100, borderRadius: 10, marginBottom: 10 },
  nome: { fontSize: 18, fontWeight: "bold" },
  total: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
});

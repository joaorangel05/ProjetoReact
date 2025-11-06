import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function TelaHistorico({ historico, voltar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Compras</Text>

      {historico.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Você ainda não realizou nenhuma compra.</Text>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.data}>Data: {item.data}</Text>
              {item.itens.map((produto, i) => (
                <Text key={i}>
                  {produto.nome} - R$ {produto.preco}
                </Text>
              ))}
              <Text style={styles.total}>Total: R$ {item.total.toFixed(2)}</Text>
            </View>
          )}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Text style={styles.voltar} onPress={voltar}>← Voltar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#f9f9f9" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  data: { fontWeight: "bold", marginBottom: 5 },
  total: { fontWeight: "bold", marginTop: 5 },
  voltar: { fontSize: 16, color: "#003366", textDecorationLine: "underline" },
});

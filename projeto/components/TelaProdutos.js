import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function TelaProdutos({ usuario, sair, irCarrinho, irHistorico, irMaisVendidos, adicionarAoCarrinho, carrinho }) {
  const produtos = [
    {
      id: 1,
      nome: "Bola",
      preco: 100,
      imagem: "https://imgnike-a.akamaihd.net/1920x1920/07425051.jpg",
    },
    {
      id: 2,
      nome: "Chuteira",
      preco: 300,
      imagem:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFGXeU54RPeb9FzIcfy3hs4YoQ1HerVqyis54_Dhgnz2Xy0hnBWCXq0yMyniOEgFl_cOGbkxv3fUCZZqXzQ6tFbJUDxspJAdPbWQ2gdB4SUc_4EHaX1f9WSg",
    },
    {
      id: 3,
      nome: "Camisa Barcelona",
      preco: 150,
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1044362/camisa_barcelona_i_24_25_nike_torcedor_masculina_2880_1_bd03f8bb1469b38aa711623ce7b2df69.jpg",
    },
    {
      id: 4,
      nome: "Garrafa",
      preco: 80,
      imagem: "https://m.media-amazon.com/images/I/71Bpfugh2oL._AC_SX569_.jpg",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Loja de Artigos Esportivos</Text>
      <Text style={styles.subtitulo}>Bem-vindo, {usuario}!</Text>

     
      <View style={styles.topButtons}>
      
        <TouchableOpacity style={styles.botao} onPress={irCarrinho}>
          <Text style={styles.botaoTexto}>Carrinho</Text>
          {((carrinho || []).length ?? 0) > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{carrinho.length}</Text>
            </View>
          )}
        </TouchableOpacity>

    
        <TouchableOpacity style={styles.botao} onPress={irHistorico}>
          <Text style={styles.botaoTexto}>Histórico</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.botao} onPress={irMaisVendidos}>
          <Text style={[styles.botaoTexto, { color: "black" }]}>Mais Vendidos</Text>
        </TouchableOpacity>
      </View>

      
      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>Preço: R$ {item.preco}</Text>
          <Button
            title="Adicionar ao Carrinho"
            onPress={() => adicionarAoCarrinho(item)}
          />
        </View>
      ))}

      <View style={{ marginTop: 10 }}>
        <Button title="Sair" onPress={sair} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: "#f0f2f5", paddingVertical: 20 },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 10, color: "#003366" },
  subtitulo: { fontSize: 18, marginBottom: 20 },
  topButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 15,
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  imagem: { width: 200, height: 200, borderRadius: 10, marginBottom: 10, resizeMode: "contain" },
  nome: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  preco: { fontSize: 16, marginBottom: 10, color: "#333" },
});

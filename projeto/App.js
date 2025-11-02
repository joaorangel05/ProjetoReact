import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginCadastro from "./components/LoginCadastro";
import TelaProdutos from "./components/TelaProdutos";
import TelaCarrinho from "./components/TelaCarrinho";

export default function App() {
  const [tela, setTela] = useState("login");
  const [usuarioAtual, setUsuarioAtual] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((atual) => [...atual, produto]);
  };

  const removerItem = (index) => {
    setCarrinho((atual) => atual.filter((_, i) => i !== index));
  };

  const finalizarCompra = () => {
    alert("Compra finalizada com sucesso!");
    setCarrinho([]);
    setTela("produtos");
  };

  return (
    <View style={styles.container}>
      {}
      {tela === "login" && (
        <LoginCadastro
          onLoginSuccess={() => setTela("produtos")}
          setUsuarioAtual={setUsuarioAtual}
        />
      )}

      {}
      {tela === "produtos" && (
        <TelaProdutos
          usuario={usuarioAtual}
          sair={() => setTela("login")}
          irCarrinho={() => setTela("carrinho")}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      )}

      {}
      {tela === "carrinho" && (
        <TelaCarrinho
          carrinho={carrinho}
          voltar={() => setTela("produtos")}
          removerItem={removerItem}
          finalizarCompra={finalizarCompra}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

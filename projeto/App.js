import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Vibration } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginCadastro from "./components/LoginCadastro";
import TelaProdutos from "./components/TelaProdutos";
import TelaCarrinho from "./components/TelaCarrinho";
import TelaHistorico from "./components/TelaHistorico";
import TelaMaisVendidos from "./components/TelaMaisVendidos";

export default function App() {
  const [tela, setTela] = useState("login");
  const [usuarioAtual, setUsuarioAtual] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [maisVendidos, setMaisVendidos] = useState({});


  useEffect(() => {
    const carregarDados = async () => {
      if (usuarioAtual) {
        const carrinhoSalvo = await AsyncStorage.getItem(`carrinho_${usuarioAtual}`);
        const historicoSalvo = await AsyncStorage.getItem(`historico_${usuarioAtual}`);
        const maisVendidosSalvo = await AsyncStorage.getItem("maisVendidos");

        setCarrinho(carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []);
        setHistorico(historicoSalvo ? JSON.parse(historicoSalvo) : []);
        setMaisVendidos(maisVendidosSalvo ? JSON.parse(maisVendidosSalvo) : {});
      }
    };
    carregarDados();
  }, [usuarioAtual]);

  
  useEffect(() => {
    const salvarCarrinho = async () => {
      if (usuarioAtual)
        await AsyncStorage.setItem(`carrinho_${usuarioAtual}`, JSON.stringify(carrinho));
    };
    salvarCarrinho();
  }, [carrinho, usuarioAtual]);


  useEffect(() => {
    const salvarHistorico = async () => {
      if (usuarioAtual)
        await AsyncStorage.setItem(`historico_${usuarioAtual}`, JSON.stringify(historico));
    };
    salvarHistorico();
  }, [historico, usuarioAtual]);


  useEffect(() => {
    AsyncStorage.setItem("maisVendidos", JSON.stringify(maisVendidos));
  }, [maisVendidos]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((atual) => [...atual, produto]);
  };

  const removerItem = (index) => {
    setCarrinho((atual) => atual.filter((_, i) => i !== index));
  };

  const finalizarCompra = async () => {
    if (carrinho.length === 0) {
      Alert.alert("Carrinho vazio", "Adicione produtos antes de finalizar!");
      return;
    }

  
    Vibration.vibrate(1000);


    const novaCompra = {
      data: new Date().toLocaleString(),
      itens: carrinho,
      total: carrinho.reduce((sum, item) => sum + item.preco, 0),
    };

    const novoHistorico = [...historico, novaCompra];
    setHistorico(novoHistorico);
    await AsyncStorage.setItem(`historico_${usuarioAtual}`, JSON.stringify(novoHistorico));


    const atualizados = { ...maisVendidos };
    carrinho.forEach((item) => {
      atualizados[item.nome] = (atualizados[item.nome] || 0) + 1;
    });
    setMaisVendidos(atualizados);

    Alert.alert("Sucesso", "Compra finalizada!");
    setCarrinho([]);
    setTela("produtos");
  };

  return (
    <View style={styles.container}>
      {tela === "login" && (
        <LoginCadastro
          onLoginSuccess={() => setTela("produtos")}
          setUsuarioAtual={setUsuarioAtual}
        />
      )}

      {tela === "produtos" && (
        <TelaProdutos
          usuario={usuarioAtual}
          sair={() => setTela("login")}
          irCarrinho={() => setTela("carrinho")}
          irHistorico={() => setTela("historico")}
          irMaisVendidos={() => setTela("maisVendidos")}
          adicionarAoCarrinho={adicionarAoCarrinho}
          carrinho={carrinho}
        />
      )}

      {tela === "carrinho" && (
        <TelaCarrinho
          carrinho={carrinho}
          voltar={() => setTela("produtos")}
          removerItem={removerItem}
          finalizarCompra={finalizarCompra}
        />
      )}

      {tela === "historico" && (
        <TelaHistorico historico={historico} voltar={() => setTela("produtos")} />
      )}

      {tela === "maisVendidos" && (
        <TelaMaisVendidos maisVendidos={maisVendidos} voltar={() => setTela("produtos")} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

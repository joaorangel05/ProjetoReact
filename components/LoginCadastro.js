import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ====================== LOGIN / CADASTRO ======================
function TelaLogin({ onLoginSuccess, setUsuarioAtual }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  // Exibir alerta compatível com Web e Mobile
  const showAlert = (titulo, msg) => {
    if (Platform.OS === "web") alert(`${titulo}: ${msg}`);
    else Alert.alert(titulo, msg);
  };

  const logar = async () => {
    try {
      if (!usuario || !senha) {
        showAlert("Erro", "Preencha usuário e senha!");
        return;
      }

      const senhaSalva = await AsyncStorage.getItem(usuario);
      if (!senhaSalva) {
        showAlert("Erro", "Usuário não encontrado!");
        return;
      }

      if (senhaSalva === senha) {
        showAlert("Sucesso", "Login realizado com sucesso!");
        setUsuarioAtual(usuario);
        onLoginSuccess();
      } else {
        showAlert("Erro", "Senha incorreta!");
      }
    } catch (erro) {
      console.log("Erro ao logar:", erro);
      showAlert("Erro", "Ocorreu um erro ao tentar logar.");
    }
  };

  const cadastrar = async () => {
    if (!usuario || !senha) {
      showAlert("Erro", "Preencha usuário e senha!");
      return;
    }
    try {
      const existente = await AsyncStorage.getItem(usuario);
      if (existente) {
        showAlert("Erro", "Usuário já existe!");
        return;
      }

      await AsyncStorage.setItem(usuario, senha);
      showAlert("Sucesso", "Usuário cadastrado com sucesso!");
      setUsuario("");
      setSenha("");
    } catch (erro) {
      showAlert("Erro", "Erro ao cadastrar usuário!");
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Login</Text>
      <TextInput
        style={estilos.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={{ width: "70%", marginVertical: 5 }}>
        <Button title="Entrar" onPress={logar} />
      </View>
      <View style={{ width: "70%", marginVertical: 5 }}>
        <Button title="Cadastrar Usuário" onPress={cadastrar} />
      </View>
    </View>
  );
}

// ====================== SEGUNDA TELA (Placeholder) ======================
function SegundaTela({ usuario, sair }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo, {usuario}!</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        ........
      </Text>
      <Button title="Sair" onPress={sair} />
    </View>
  );
}

// ====================== APP PRINCIPAL ======================
export default function App() {
  const [tela, setTela] = useState("login");
  const [usuarioAtual, setUsuarioAtual] = useState("");

  if (tela === "login")
    return (
      <TelaLogin
        onLoginSuccess={() => setTela("tela2")}
        setUsuarioAtual={setUsuarioAtual}
      />
    );

  if (tela === "tela2")
    return <SegundaTela usuario={usuarioAtual} sair={() => setTela("login")} />;

  return null;
}

// ====================== ESTILOS ======================
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f2f5",
  },
  titulo: { fontSize: 26, marginBottom: 20, fontWeight: "bold", color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    width: "70%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

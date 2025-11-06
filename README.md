# Loja de Artigos Esportivos

Aplicativo desenvolvido em **React Native (Expo)** que simula uma loja de artigos esportivos, permitindo login, cadastro, compras e histórico de pedidos, com armazenamento local via **AsyncStorage**.

---

## Ideia Geral

O aplicativo tem como objetivo oferecer uma experiência de compra simples e prática, simulando o funcionamento de uma loja virtual de artigos esportivos.  
Foi desenvolvido para praticar conceitos de **React Native**, **gerenciamento de estado** e **persistência de dados**.

---

## Objetivo

Permitir que o usuário:

- Crie uma conta e faça login  
- Adicione produtos ao carrinho  
- Finalize compras e visualize o histórico  
- Tenha seus dados salvos localmente, sem depender de internet  

---

## Funcionalidades

- **Login e Cadastro:** criação e autenticação de usuários localmente  
- **Tela de Produtos:** lista de produtos esportivos com imagem e preço  
- **Carrinho:** permite adicionar e remover produtos e visualizar o total  
- **Finalização:** vibração de 1 segundo e registro no histórico após a compra  
- **Histórico:** exibe as compras realizadas com data, itens e total  
- **Produtos Mais Vendidos:** (em desenvolvimento) mostrará os itens mais comprados  

---

## Armazenamento

Os dados são salvos no **AsyncStorage**, separados por usuário:

carrinho_<usuario> → Itens atuais no carrinho
historico_<usuario> → Compras finalizadas


Cada usuário mantém seu próprio histórico e carrinho de forma independente.

---

## Tecnologias Utilizadas

- **React Native (Expo)**  
- **JavaScript (ES6+)**  
- **AsyncStorage** para persistência local  

## Telas

<div align="center">

  <img src="https://github.com/user-attachments/assets/0b02c277-4acf-4e47-8a3b-108d6d2fd311" alt="Captura de tela 1" height="300" style="margin: 5px;" />
  <img src="https://github.com/user-attachments/assets/f428c69f-8533-4e6c-9668-66395069cae7" alt="Captura de tela 2" height="300" style="margin: 5px;" />
  <img src="https://github.com/user-attachments/assets/58010c2e-f1b1-4cfa-be28-6dfca2b5e2ab" alt="Captura de tela 3" height="300" style="margin: 5px;" />

</div>






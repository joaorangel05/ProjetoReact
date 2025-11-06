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



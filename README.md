# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Interface](#4-interface)
* [5. Ferramentas utilizadas](#5-ferramentas-utilizadas)

***

## 1. Prefácio

PHQVDJHQV VHFUHWDV??? (Mensagens secretas???)

Você já deve ter ouvido falar sobre proteger suas mensagens de alguma forma. 

Aqui você conseguirá cifrar e decifrar mensagens através da técnica chamada 'Cifra de César'

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (offset) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra AMOR será DPRU

## 2. Resumo do projeto

Neste projeto foi criado a primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto no navegador indicando um deslocamento
específico de caracteres (_offset_).

O objetivo principal é permitir que o usuário guarde suas mensagens secretas em criptografia.

## 3. Considerações gerais

Cifrar e decifrar é uma forma segura que o usuário poderá adquirir ao ter privacidade com suas mensagens. 
Nessa aplicação o usuário poderá colocar um deslocamento (_offset_) para que assim, o texto que irá ser escrito,
fique seguro. Atualmente todas as cifras de substituição alfabética simples, são decifradas com 
facilidade e não oferecem muita segurança na comunicação por si mesma, mas a cifra de César muitas vezes, pode 
fazer parte de um sistema mais complexo de criptografia.

## 4. Interface

**Permite ao usuário:**

* **Criptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja criptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_) indicando quantas posições
    você deseja que a cifra desloque cada caractere do alfabeto. O número
    será positivo e inteiro (inteiro positivo).
  - Veja o resultado da mensagem criptografada.

* **Descriptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja descriptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_, que corresponde ao que usamos
    para criptografar) indicando quantas posições você deseja que a cifra
    desloque cada caractere do alfabeto. O número será positivo e inteiro
    (inteiro positivo).
  - Veja o resultado da mensagem descriptografada.

## 4. Ferramentas utilizadas:

* HTML;
* CCS;
* Vanilla JS;
* Visual Studio Code (VS);
* Git e Git Hub. 


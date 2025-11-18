
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./screens/styles";
import { themas } from "./constants/theme";
import { Input } from "./components/input";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={require("./assets/images/logo.png")}
          style={style.logo}>
        </Image>
        <Text style={style.titulo}>Iniciar Sessão</Text>
      </View>

      <View style={style.boxMid}>
        <Input
          IconLeft={MaterialIcons}
          iconLeftName="looks"
          placeholder="Digite seu email" />
        <Input
          placeholder="Escreva sua senha"
        />
        <View style={style.boxBottom}>
        </View>
      </View>

      <View style={style.boxBottom}>
        <Link href="/(tabs)/home" asChild>
          <TouchableOpacity style={style.button}>
            <Text style={style.textobutton}>
              Iniciar Sessão
            </Text>
          </TouchableOpacity>
        </Link>
        <Link href="/cadastro" asChild>
          <Text style={style.textbottom}>Não tem conta? Registre-se agora!</Text>
        </Link>
      </View>
    </View>
  )
}

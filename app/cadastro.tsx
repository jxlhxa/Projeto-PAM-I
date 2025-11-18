
import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { themas } from './constants/theme';
import { Input } from "./components/input";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./screens/styles";
import { Link } from "expo-router";

export default function Cadastro (){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={require("./assets/images/logo.png")}
                style={style.logo}
                ></Image>
                <Text style={style.titulo}>Cadastre-se</Text>
            </View>

           <View style={style.boxMid}>
              <Input
              placeholder="Digite seu email"/>
              <Input
              placeholder="Escreva sua senha"
              />
              <View style={style.boxBottom}>
              </View>
           </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textobutton}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <Link href="/" asChild>
                    <Text style={style.textbottom}>Ja tem uma conta? Faça login!</Text>
                </Link>
            </View>
        </View>
    )
}

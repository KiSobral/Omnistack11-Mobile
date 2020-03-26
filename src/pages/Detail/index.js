import React from "react";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const message = `Olá ${
    incident.name
  }, gostaria de ajudar vocês com doações ao caso "${
    incident.title
  }", com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Salvando o caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>

        <Image source={logoImg} />
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}> ONG: </Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}> CASO: </Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}> Valor: </Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactBoxTitle}>Salve o dia!</Text>
        <Text style={styles.contactBoxTitle}>
          Seja a pessoa heroína desse caso.
        </Text>

        <Text style={styles.contactBoxDescription}>
          Entre em contato com a ONG:
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsButton} onPress={sendWhatsapp}>
            <Text style={styles.actionsText}>Zapzap</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsButton} onPress={sendEmail}>
            <Text style={styles.actionsText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
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
        <Text style={styles.incidentValue}> Fauna e Flora </Text>

        <Text style={styles.incidentProperty}> CASO: </Text>
        <Text style={styles.incidentValue}>Gatinhos abandonados na FGA</Text>

        <Text style={styles.incidentProperty}> Valor: </Text>
        <Text style={styles.incidentValue}> R$ 70,00 </Text>
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
          <TouchableOpacity style={styles.actionsButton} onPress={() => {}}>
            <Text style={styles.actionsText} onPress={() => {}}>
              Zapzap
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsButton} onPress={() => {}}>
            <Text style={styles.actionsText} onPress={() => {}}>
              E-mail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

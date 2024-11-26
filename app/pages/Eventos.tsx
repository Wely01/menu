import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function EventosETEC() {
  const eventos = [
    {
      id: "1",
      titulo: "Feira de Profissões",
      data: "25 de Novembro, 2024",
      descricao: "Evento para explorar cursos e carreiras oferecidos pela ETEC.",
    },
    {
      id: "2",
      titulo: "Semana Cultural",
      data: "1 a 5 de Dezembro, 2024",
      descricao: "Apresentações artísticas, palestras e workshops culturais.",
    },
    {
      id: "3",
      titulo: "Mostra de Projetos",
      data: "10 de Dezembro, 2024",
      descricao: "Apresentação de projetos dos alunos desenvolvidos durante o semestre.",
    },
    {
      id: "4",
      titulo: "Gincana Solidária",
      data: "15 de Dezembro, 2024",
      descricao: "Atividades esportivas e arrecadação de alimentos para doação.",
    },
  ];

  const renderEvento = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.eventTitle}>{item.titulo}</Text>
      <Text style={styles.eventDate}>{item.data}</Text>
      <Text style={styles.eventDescription}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos ETEC</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={renderEvento}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: "#555",
  },
});

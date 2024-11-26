import { Text, Pressable, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default function Index() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} />
        </TouchableOpacity>

        <TextInput style={styles.pesquisabtn} placeholder="Pesquisar" placeholderTextColor="#555" />

        <Pressable style={styles.btnpesqui}>
          <Link href="/tabs/Init">
            <Icon name="search" size={24} color="#ffffff" />
          </Link>
        </Pressable>

        <Pressable style={styles.user}>
          <Link href="/tabs/Init">
            <Entypo style={styles.userIcon} name="user" size={30} color="#ffffff" />
          </Link>
        </Pressable>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.titulo}>Bem-vindo ao Portal ETEC!</Text>

        <Text style={styles.descri}>
          Aqui você encontra tudo o que precisa para acompanhar sua vida acadêmica com facilidade.
        </Text>

        <Text style={styles.info}>
          📅 <Text style={styles.titu}>Calendário Escolar:</Text> Não perca nenhuma data importante, desde aulas e provas até eventos especiais.
        </Text>

        <Text style={styles.info}>
          🎉 <Text style={styles.titu}>Eventos:</Text> Fique por dentro das atividades e oportunidades promovidas pela ETEC.
        </Text>

        <Text style={styles.info}>
          📞 <Text style={styles.titu}>Contatos:</Text> Acesse informações de contato da instituição para tirar dúvidas ou resolver qualquer questão.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  topo: {
    backgroundColor: "#4CAF50", 
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  roundButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pesquisabtn: {
    flex: 1,
    marginLeft: 10,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  btnpesqui: {
    marginLeft: 10,
  },
  user: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    borderRadius: 20,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  userIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  descri: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },
  titu: {
    fontWeight: "bold",
    color: "#4CAF50", 
  },
});

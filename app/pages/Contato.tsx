import { View, Text, StyleSheet, Image } from "react-native";

export default function Boletim() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contatos</Text>

        <View >
            <Text style={styles.title2}>
            Central de Informações:
            </Text>
            <Text style={styles.conti}>
            Capital e Grande São Paulo: <br/>
            (11) 3471-4071
            </Text>
        </View>

        <View >
            <Text style={styles.title2}>
            Demais localidades:
            </Text>
            <Text style={styles.conti}>
            0800 772 2829 <br/> (apenas de telefone fixo)
            </Text>
        </View>

        <View >
            <Text style={styles.title2}>
            Email
            </Text>
            <Text style={styles.conti}>
            etec@etec.gov.br
            </Text>
        </View>
            
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
    title2: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    conti: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
   
});


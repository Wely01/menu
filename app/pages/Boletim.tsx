import { View, Text, StyleSheet } from "react-native";

export default function Boletim() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📘 Boletim do Aluno</Text>

            <View style={styles.row}>
                <Text style={styles.disciplina}>PAM1</Text>
                <Text style={[styles.mencao ]}>
                    MB
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.disciplina}>DS1</Text>
                <Text style={[styles.mencao2]}>
                    B
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.disciplina}>BD2</Text>
                <Text style={[styles.mencao3]}>
                    R
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.disciplina}>PW2</Text>
                <Text style={[styles.mencao4]}>
                    I
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, 
    },
    disciplina: {
        fontSize: 18,
        fontWeight: "500",
        color: "#555",
    },
    mencao: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#4CAF50",
    },
    mencao2: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#2196F3",
    },
    mencao3: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#FFC107",
    },
    mencao4: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#F44336",
    },
});

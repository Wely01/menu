import { View, Text, StyleSheet, Image } from "react-native";

export default function Boletim() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendário</Text>

            <View>
            
            <Image style={styles.calen} source={require("./Image/calen.jpeg")}/>

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
    calen: {
        width:'100%',
        marginTop:-130,
        resizeMode:'contain',
    },
   
});


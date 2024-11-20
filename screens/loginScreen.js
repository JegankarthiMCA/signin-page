import React from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

export default function LoginScreen() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "position"} // Improved keyboard handling
        >
            <Text style={styles.title}>User Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                keyboardType="email-address"
                placeholderTextColor="#888" // Custom placeholder color
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry
                placeholderTextColor="#888" // Custom placeholder color
            />

            <View style={styles.buttonContainer}>
                {/* Styled Register Button */}
                <TouchableOpacity
                    style={[styles.button, styles.registerButton]}
                    onPress={() => alert("Login Pressed")}
                >
                    <Text style={styles.buttonText}>Log-in</Text>
                </TouchableOpacity>

                {/* Styled Login Button */}
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => alert("Register Pressed")}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#fff",
        textAlign: "center",
    },
    input: {
        width: 250,
        height: 45,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginVertical: 15,
        fontSize: 16,
        textAlign: "center",
        color: "#fff",
    },
    buttonContainer: {
        marginTop: 30,
        width: 250,
        alignItems: "center",
    },
    button: {
        width: "100%",
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
    },
    registerButton: {
        backgroundColor: "green",
    },
    loginButton: {
        backgroundColor: "red",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});

import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlingRegister = () => {
        // console.log('====================================');
        // console.log("User Registered");
        // console.log('UserName:', email);
        // console.log('Password:', password);
        // console.log('====================================');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // AsyncStorage.setItem("user", JSON.stringify(user))
                console.log(user);

            })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "position"} // Improved keyboard handling
        >
            <Text style={styles.title}>User Registration</Text>

            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeholder="Enter Email"
                keyboardType="email-address"
                placeholderTextColor="#fff" // Custom placeholder color
            />

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Enter Password"
                secureTextEntry
                placeholderTextColor="#fff" // Custom placeholder color
            />

            <View style={styles.buttonContainer}>
                {/* Styled Register Button */}
                <TouchableOpacity
                    style={[styles.button, styles.registerButton]}
                    onPress={handlingRegister}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                {/* Styled Login Button */}
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => alert("Login Pressed")}
                >
                    <Text>Already have an account? Login</Text>
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
        backgroundColor: "grey",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});
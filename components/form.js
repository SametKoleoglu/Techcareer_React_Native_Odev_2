import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";

const MyForm = () => {
  // State'i tanımla, her bir input için bir değer
  const [inputValues, setInputValues] = useState({
    Name: "",
    UnitPrice: "",
    UnitsInStock: "",
    QuantityPerUnit: "",
  });

  // Input değerleri değiştikçe state'i güncelle
  const handleInputChange = (name, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Form submit olduğunda API'ye veriyi gönder
  const handleSubmit = async () => {
    try {
      // API'ye gönderilecek veri
      const postData = {
        Name: inputValues.Name,
        UnitPrice: inputValues.UnitPrice,
        UnitsInStock: inputValues.UnitsInStock,
        QuantityPerUnit: inputValues.QuantityPerUnit,
      };

      // API endpoint'i
      const apiUrl = "https://northwind.vercel.app/api/suppliers";

      // Veriyi API'ye gönder
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      // API'den gelen cevap
      const responseData = await response.json();

      // Cevapla ilgili işlemleri yapabilirsiniz
      console.log("API Cevabı:", responseData);
      Alert.alert("Veri Gönderme", "Başarılı");
    } catch (error) {
      console.error("API isteği hatası:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Name</Text>
      <TextInput
        textColor="white"
        style={styles.textInput}
        placeholder="Name"
        value={inputValues.input1}
        onChangeText={(text) => handleInputChange("input1", text)}
      />

      <Text style={styles.text}>Unit Price</Text>
      <TextInput
        textColor="#fff"
        style={styles.textInput}
        placeholder="Unit Price"
        value={inputValues.input2}
        onChangeText={(text) => handleInputChange("input2", text)}
      />

      <Text style={styles.text}>Units In Stock</Text>
      <TextInput
        textColor="white"
        style={styles.textInput}
        placeholder="Units In Stock"
        value={inputValues.input3}
        onChangeText={(text) => handleInputChange("input3", text)}
      />

      <Text style={styles.text}>Quantity Per Unit</Text>
      <TextInput
        textColor="#fff"
        style={styles.textInput}
        placeholder="QuantityPerUnit"
        value={inputValues.input4}
        onChangeText={(text) => handleInputChange("input4", text)}
      />

      <Button
        mode="contained"
        buttonColor="orange"
        style={{ marginVertical: 10 }}
        onPress={handleSubmit}
      >
        Gönder
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    marginVertical: 10,
  },
  textInput: {
    width: 200,
    padding: 5,
    textAlign: "center",
    backgroundColor: "steelblue",
    color: "#fff",
  },
});

export default MyForm;

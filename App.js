import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyForm from "./components/form";

export default function App() {
  const [datas, setDatas] = useState(null);

  // useEffect kullanarak veri çekme işlemini gerçekleştir
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Veriyi çekmek için fetch kullan
        const response = await fetch(
          "https://northwind.vercel.app/api/suppliers"
        );

        // Json formatına çevir
        const data = await response.json();

        // State'i güncelle
        setDatas(data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    // Component yüklendiğinde veriyi çek
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <FlatList
        data={datas}
        renderItem={({ item }) => {
          return item.address.country === "USA" ? (
            <SafeAreaView
              style={{
                flexDirection: "row",
                gap: 10,
                marginVertical: 10,
                backgroundColor: "red",
              }}
            >
              <Text>{item.companyName}</Text>
              <Text>{item.address.country}</Text>
            </SafeAreaView>
          ) : (
            <SafeAreaView
              style={{
                flexDirection: "row",
                gap: 10,
                marginVertical: 10,
              }}
            >
              <Text>{item.companyName}</Text>
              <Text>{item.address.country}</Text>
            </SafeAreaView>
          )

        }}
        showsVerticalScrollIndicator={false}
      /> */}

      <MyForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center", // tengah secara horizontal
        backgroundColor: "#f5f6fa",
      }}
    >
      <View
        style={{
          flexDirection: "row", // objek berjejer horizontal
          alignItems: "center",
          justifyContent: "center",
          gap: 24, // jarak antar objek (gunakan margin jika gap tidak didukung)
        }}
      >
        {/* Segitiga */}
        <View
          style={{
            width: 0,
            height: 0,
            borderLeftWidth: 50,
            borderRightWidth: 50,
            borderBottomWidth: 80,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#e17055",
            marginRight: 24,
          }}
        />

        {/* Tabung */}
        <View
          style={{
            width: 180,
            height: 70,
            backgroundColor: "#00b894",
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 24,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 1,
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            105841109422
          </Text>
        </View>

        {/* Persegi Panjang */}
        <View
          style={{
            width: 300,
            height: 100,
            backgroundColor: "#0984e3",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              width: "100%",
            }}
          >
            MUH. FARREL APTA INDRATAMA
          </Text>
        </View>
      </View>
       </View>
  );
}
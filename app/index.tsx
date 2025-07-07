import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f6fa",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
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
          }}
        />

        {/* Pill (Tabung) dengan ID Siswa */}
        <View
          style={{
            width: 180,
            height: 70,
            backgroundColor: "#00b894",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              letterSpacing: 1,
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            105841109422
          </Text>
        </View>

        {/* Persegi Panjang dengan Nama */}
        <View
          style={{
            width: 320,
            height: 100,
            backgroundColor: "#0984e3",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              lineHeight: 22,
              flexWrap: "wrap",
            }}
            numberOfLines={2}
            adjustsFontSizeToFit
            ellipsizeMode="tail"
          >
            MUH. FARREL APTA INDRATAMA
          </Text>
        </View>
      </View>
    </View>
  );
}

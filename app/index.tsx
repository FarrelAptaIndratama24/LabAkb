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
        {/* Segitiga dengan Border */}
        <View
          style={{
            width: 0,
            height: 0,
            borderLeftWidth: 50,
            borderRightWidth: 50,
            borderBottomWidth: 80,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#333333",
          }}
        />

        {/* Pill (Tabung) dengan Label dan ID Siswa */}
        <View
          style={{
            width: 180,
            height: 70,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#333333",
            borderRadius: 35, // Setengah dari height untuk bentuk pill sempurna
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#333333",
              fontSize: 10,
              textAlign: "center",
              marginBottom: 3,
              fontWeight: "500",
            }}
          >
            ID Siswa
          </Text>
          <Text
            style={{
              color: "#333333",
              fontWeight: "bold",
              fontSize: 16,
              letterSpacing: 1,
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            105841109422
          </Text>
        </View>

        {/* Persegi Panjang dengan Label dan Nama */}
        <View
          style={{
            width: 400,
            height: 120,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#333333",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 24,
            paddingVertical: 16,
          }}
        >
          <Text
            style={{
              color: "#333333",
              fontSize: 14,
              textAlign: "center",
              marginBottom: 8,
              fontWeight: "600",
            }}
          >
            Nama
          </Text>
          <Text
            style={{
              color: "#333333",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              lineHeight: 24,
            }}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            MUH. FARREL APTA INDRATAMA
          </Text>
        </View>
      </View>
    </View>
  );
}
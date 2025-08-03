import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function AboutUnismuh() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header with Beautiful Background */}
      <View
        style={{
          backgroundColor: '#6c5ce7',
          paddingTop: 60,
          paddingBottom: 40,
          paddingHorizontal: 24,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        {/* Navigation Header */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          marginBottom: 30 
        }}>
          <Pressable style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: 12,
            padding: 8,
            marginRight: 12
          }}>
            <MaterialCommunityIcons name="home" size={24} color="#fff" />
          </Pressable>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: '600', 
            color: '#fff',
            opacity: 0.9 
          }}>
            Home
          </Text>
        </View>

        {/* Main Title */}
        <View style={{ alignItems: 'center' }}>
          <View style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: 20,
            padding: 16,
            marginBottom: 16
          }}>
            <MaterialCommunityIcons name="school" size={48} color="#fff" />
          </View>
          <Text style={{ 
            fontSize: 32, 
            fontWeight: 'bold', 
            color: '#fff',
            textAlign: 'center',
            marginBottom: 8
          }}>
            Unismuh Makassar
          </Text>
          <Text style={{ 
            fontSize: 16, 
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center'
          }}>
            Universitas Muhammadiyah Makassar
          </Text>
        </View>
              </View>

      {/* Content Area */}
      <View style={{ 
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 24,
        paddingTop: 30,
        flex: 1
      }}>
        {/* University Image Card */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 4,
          marginBottom: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 5
        }}>
          <Image
            source={require('../../assets/images/unismuh1.jpg')}
            style={{
              width: '100%',
              height: 700,
              borderRadius: 16,
              backgroundColor: '#e9ecef',
            }}
            resizeMode="cover"
          />
          <View style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 6
          }}>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>
              Gedung Unismuh
            </Text>
          </View>
        </View>

        {/* Info Cards */}
        <View style={{ marginBottom: 24 }}>
          {/* Location Card */}
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <View style={{
                backgroundColor: '#e3f2fd',
                borderRadius: 12,
                padding: 10,
                marginRight: 12
              }}>
                <MaterialCommunityIcons name="map-marker" size={24} color="#1976d2" />
              </View>
              <Text style={{ 
                fontSize: 18, 
                fontWeight: 'bold', 
                color: '#1976d2',
                flex: 1
              }}>
                Lokasi Kampus
              </Text>
            </View>
            <Text style={{ 
              fontSize: 15, 
              color: '#495057', 
              lineHeight: 22,
              marginLeft: 46
            }}>
              Jl. Sultan Alauddin No.259, Kota Makassar, Sulawesi Selatan, Indonesia
            </Text>
          </View>

          {/* About Card */}
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <View style={{
                backgroundColor: '#f3e5f5',
                borderRadius: 12,
                padding: 10,
                marginRight: 12
              }}>
                <MaterialCommunityIcons name="information" size={24} color="#7b1fa2" />
              </View>
              <Text style={{ 
                fontSize: 18, 
                fontWeight: 'bold', 
                color: '#7b1fa2',
                flex: 1
              }}>
                Tentang Universitas
              </Text>
            </View>
            <Text style={{ 
              fontSize: 15, 
              color: '#495057', 
              lineHeight: 24,
              textAlign: 'justify',
              marginLeft: 46
            }}>
              Unismuh Makassar adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur yang bernaung di bawah Persyarikatan Muhammadiyah. Universitas ini memiliki berbagai fakultas dan program studi unggulan, serta dikenal dengan lingkungan akademik yang religius, modern, dan inovatif.
            </Text>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 32
        }}>
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 16,
            flex: 1,
            marginRight: 8,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3
          }}>
            <MaterialCommunityIcons name="account-group" size={32} color="#ff6b6b" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
              25K+
            </Text>
            <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
              Mahasiswa
            </Text>
          </View>

          <View style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 16,
            flex: 1,
            marginHorizontal: 4,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3
          }}>
            <MaterialCommunityIcons name="book-open-variant" size={32} color="#4ecdc4" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
              50+
            </Text>
            <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
              Program Studi
            </Text>
          </View>

          <View style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 16,
            flex: 1,
            marginLeft: 8,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3
          }}>
            <MaterialCommunityIcons name="calendar" size={32} color="#45b7d1" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
              1963
            </Text>
            <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
              Didirikan
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={{ 
          alignItems: 'center', 
          paddingVertical: 24,
          borderTopWidth: 1,
          borderTopColor: '#e9ecef'
        }}>
    

        </View>
      </View>
    </ScrollView>
  );
}
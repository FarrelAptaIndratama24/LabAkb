import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface FeatureCardProps {
  icon: string;
  iconLibrary: 'MaterialCommunityIcons' | 'FontAwesome';
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconLibrary,
  title,
  description,
  backgroundColor,
  borderColor,
  iconColor
}) => {
  const IconComponent = iconLibrary === 'FontAwesome' ? FontAwesome : MaterialCommunityIcons;
  
  return (
    <Pressable style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: borderColor
    }}>
      <View style={{
        backgroundColor: iconColor,
        borderRadius: 12,
        padding: 10,
        marginRight: 14
      }}>
        <IconComponent name={icon as any} size={24} color="#fff" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, color: '#636e72', lineHeight: 20 }}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

interface TechStackItemProps {
  icon: string;
  name: string;
  category: string;
  backgroundColor: string;
  iconColor: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({
  icon,
  name,
  category,
  backgroundColor,
  iconColor
}) => (
  <View style={{ alignItems: 'center', flex: 1 }}>
    <View style={{
      backgroundColor,
      borderRadius: 16,
      padding: 12,
      marginBottom: 8
    }}>
      <MaterialCommunityIcons name={icon as any} size={32} color={iconColor} />
    </View>
    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#333' }}>{name}</Text>
    <Text style={{ fontSize: 10, color: '#636e72', textAlign: 'center' }}>{category}</Text>
  </View>
);

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, iconColor }) => (
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
    <MaterialCommunityIcons name={icon as any} size={28} color={iconColor} />
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
      {value}
    </Text>
    <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
      {label}
    </Text>
  </View>
);

const AboutScreen: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: 'home',
      iconLibrary: 'MaterialCommunityIcons',
      title: 'Halaman Home',
      description: 'Menampilkan informasi lengkap tentang Universitas Muhammadiyah Makassar, termasuk sejarah, lokasi, dan statistik universitas dengan desain yang menarik.',
      backgroundColor: '#f8f9ff',
      borderColor: '#6c5ce7',
      iconColor: '#6c5ce7'
    },
    {
      icon: 'information',
      iconLibrary: 'MaterialCommunityIcons',
      title: 'Halaman About',
      description: 'Berisi penjelasan detail tentang tujuan pengembangan aplikasi, teknologi yang digunakan, dan fitur-fitur yang tersedia dalam aplikasi ini.',
      backgroundColor: '#fff9e6',
      borderColor: '#fdcb6e',
      iconColor: '#fdcb6e'
    },
    {
      icon: 'user-circle',
      iconLibrary: 'FontAwesome',
      title: 'Halaman Profil',
      description: 'Menampilkan identitas lengkap pengembang aplikasi, termasuk data akademik, kontak, dan informasi lainnya yang relevan dengan tugas praktikum.',
      backgroundColor: '#e8f4fd',
      borderColor: '#0984e3',
      iconColor: '#0984e3'
    }
  ];

  const techStack: TechStackItemProps[] = [
    {
      icon: 'react',
      name: 'React Native',
      category: 'Framework',
      backgroundColor: '#e8f5e8',
      iconColor: '#00d2d3'
    },
    {
      icon: 'language-javascript',
      name: 'TypeScript',
      category: 'Language',
      backgroundColor: '#fff3e0',
      iconColor: '#3178c6'
    },
    {
      icon: 'vector-arrange-below',
      name: 'Expo',
      category: 'Platform',
      backgroundColor: '#f3e5f5',
      iconColor: '#9b59b6'
    }
  ];

  const stats: StatCardProps[] = [
    {
      icon: 'file-document-multiple',
      value: '3',
      label: 'Halaman',
      iconColor: '#e74c3c'
    },
    {
      icon: 'star',
      value: 'v1.0',
      label: 'Version',
      iconColor: '#f39c12'
    },
    {
      icon: 'calendar',
      value: '2025',
      label: 'Release',
      iconColor: '#27ae60'
    }
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f8f9fa' }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View style={{
        backgroundColor: '#6c5ce7',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: 25,
          padding: 20,
          marginBottom: 20
        }}>
          <MaterialCommunityIcons name="information" size={50} color="#fff" />
        </View>
        <Text style={{ 
          fontSize: 28, 
          fontWeight: 'bold', 
          color: '#fff',
          marginBottom: 8
        }}>
          Tentang Aplikasi
        </Text>
        <Text style={{ 
          fontSize: 16, 
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          paddingHorizontal: 20
        }}>
          Informasi lengkap tentang aplikasi Lab AKB
        </Text>
      </View>

      {/* Content Section */}
      <View style={{ paddingHorizontal: 24, paddingTop: 30, flex: 1 }}>
        
        {/* App Description Card */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 24,
          marginBottom: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 5
        }}>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <View style={{
              backgroundColor: '#e8f4fd',
              borderRadius: 16,
              padding: 12,
              marginBottom: 12
            }}>
              {/* <MaterialCommunityIcons name="cellphone-android" size={32} color="#0984e3" /> */}
            </View>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: 'bold', 
              color: '#333',
              marginBottom: 8
            }}>
              Aplikasi Mobile Lab AKB
            </Text>
          </View>
          <Text style={{ 
            fontSize: 15, 
            color: '#636e72', 
            lineHeight: 24,
            textAlign: 'center'
          }}>
            Aplikasi ini merupakan hasil implementasi dari mata kuliah 
            <Text style={{ fontWeight: 'bold', color: '#0984e3' }}> Aplikasi Komputer Bergerak (AKB)</Text>. 
            Dikembangkan menggunakan React Native dengan TypeScript untuk memberikan pengalaman mobile yang optimal 
            dalam menyajikan informasi tentang Universitas Muhammadiyah Makassar.
          </Text>
        </View>

        {/* Features Section */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
          marginBottom: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3
        }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: 20,
            textAlign: 'center'
          }}>
            🚀 Fitur Utama Aplikasi
          </Text>

          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </View>

        {/* Technical Info Card */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
          marginBottom: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3
        }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: 16,
            textAlign: 'center'
          }}>
            ⚡ Teknologi yang Digunakan
          </Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {techStack.map((tech, index) => (
              <TechStackItem key={index} {...tech} />
            ))}
          </View>
        </View>

        {/* App Stats */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 32
        }}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
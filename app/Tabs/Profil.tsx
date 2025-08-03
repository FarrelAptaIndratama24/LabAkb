import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ProfileItemProps {
  icon: string;
  label: string;
  value: string;
  iconColor: string;
  backgroundColor: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({
  icon,
  label,
  value,
  iconColor,
  backgroundColor
}) => (
  <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3
  }}>
    <View style={{
      backgroundColor,
      borderRadius: 12,
      padding: 10,
      marginRight: 16
    }}>
      <MaterialCommunityIcons name={icon as any} size={24} color={iconColor} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 12, color: '#6c757d', marginBottom: 2 }}>
        {label}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>
        {value}
      </Text>
    </View>
  </View>
);

interface ContactItemProps {
  icon: string;
  title: string;
  subtitle: string;
  iconColor: string;
  onPress?: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  title,
  subtitle,
  iconColor,
  onPress
}) => (
  <Pressable 
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2
    }}
    onPress={onPress}
  >
    <MaterialCommunityIcons name={icon as any} size={24} color={iconColor} style={{ marginRight: 16 }} />
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 2 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12, color: '#6c757d' }}>
        {subtitle}
      </Text>
    </View>
    <MaterialCommunityIcons name="chevron-right" size={20} color="#ccc" />
  </Pressable>
);

const ProfilScreen: React.FC = () => {
  const profileData: ProfileItemProps[] = [
    {
      icon: 'card-account-details',
      label: 'Nomor Induk Mahasiswa',
      value: '105841109422',
      iconColor: '#e74c3c',
      backgroundColor: '#fee'
    },
    {
      icon: 'google-classroom',
      label: 'Kelas',
      value: '6C',
      iconColor: '#f39c12',
      backgroundColor: '#fef9e7'
    },
    {
      icon: 'laptop',
      label: 'Program Studi',
      value: 'Informatika',
      iconColor: '#3498db',
      backgroundColor: '#e3f2fd'
    },
    {
      icon: 'school',
      label: 'Fakultas',
      value: 'Fakultas Teknik',
      iconColor: '#9b59b6',
      backgroundColor: '#f3e5f5'
    }
  ];

  const contactData: ContactItemProps[] = [
    {
      icon: 'email',
      title: 'Email',
      subtitle: 'farrelaptaindra@gmail.com',
      iconColor: '#e74c3c'
    },
    {
      icon: 'phone',
      title: 'Phone',
      subtitle: '+628126857823',
      iconColor: '#27ae60'
    },
    {
      icon: 'map-marker',
      title: 'Address',
      subtitle: 'Gowa, Sulawesi Selatan',
      iconColor: '#f39c12'
    },
    
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f8f9fa' }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header with Background */}
      <View style={{
        backgroundColor: '#6c5ce7',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center'
      }}>
        {/* Profile Picture */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 70,
          padding: 6,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 8
        }}>
          <Image
            source={require('../../assets/images/fotoku.jpg')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: '#eee',
            }}
          />
          <View style={{
            position: 'absolute',
            bottom: 6,
            right: 6,
            backgroundColor: '#27ae60',
            borderRadius: 15,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#fff'
          }}>
            <MaterialCommunityIcons name="check" size={16} color="#fff" />
          </View>
        </View>

        {/* Name and Status */}
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: '#fff',
          marginBottom: 6,
          textAlign: 'center'
        }}>
          MUH. FARREL APTA INDRATAMA
        </Text>
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 6,
          marginBottom: 8
        }}>
          <Text style={{ 
            fontSize: 14, 
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '500'
          }}>
            Mahasiswa Teknik Informatika
          </Text>
        </View>
        <Text style={{ 
          fontSize: 14, 
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          paddingHorizontal: 40
        }}>
          Universitas Muhammadiyah Makassar
        </Text>
      </View>

      {/* Content Section */}
      <View style={{ paddingHorizontal: 24, paddingTop: 30, flex: 1 }}>
        
        {/* Academic Information */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: 16,
            paddingLeft: 4
          }}>
            📚 Informasi Akademik
          </Text>
          
          {profileData.map((item, index) => (
            <ProfileItem key={index} {...item} />
          ))}
        </View>

        {/* Contact Information */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: 16,
            paddingLeft: 4
          }}>
            📞 Informasi Kontak
          </Text>
          
          {contactData.map((item, index) => (
            <ContactItem 
              key={index} 
              {...item}
              onPress={() => console.log(`Pressed ${item.title}`)}
            />
          ))}
        </View>

        {/* Achievement Cards */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: 16,
            paddingLeft: 4
          }}>
            🏆 Achievement
          </Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
              <MaterialCommunityIcons name="trophy" size={32} color="#f39c12" />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
                ??
              </Text>
              <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
                IPK
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
              <MaterialCommunityIcons name="calendar-check" size={32} color="#27ae60" />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
                6
              </Text>
              <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
                Semester
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
              <MaterialCommunityIcons name="code-tags" size={32} color="#6c5ce7" />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 8 }}>
                ??
              </Text>
              <Text style={{ fontSize: 12, color: '#6c757d', textAlign: 'center' }}>
                Projects
              </Text>
            </View>
          </View>
        </View>

        
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;
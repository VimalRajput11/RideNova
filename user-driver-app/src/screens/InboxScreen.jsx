import React from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, StatusBar, Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const palette = {
  primary: '#0058bb',
  primaryContainer: '#6c9fff',
  onPrimary: '#f0f2ff',
  onPrimaryContainer: '#00214f',
  surface: '#f5f6f7',
  onSurface: '#2c2f30',
  onSurfaceVariant: '#595c5d',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#eff1f2',
  surfaceContainer: '#e6e8ea',
  surfaceContainerHigh: '#e0e3e4',
  outlineVariant: '#abadae',
};

const chats = [
  {
    id: 1,
    name: 'Rahul Sharma',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5XSf6ppgCVm1dyksPZ9GpRuzux9CWc80Ts8rbKp4igQrERg64edUbYovR3swQXOuu-ZIJRjNrI-5jNDdEEwme8hOf0FXprqiGPNJs--FonCbH2U85dtt9BCyu6kASD3DrvAK8X1Tg1Pq4-WTLYcQUQawheOZC_mCM1j_sub-9XLDDo6pmw0iTI4mLiQ7rqvUuXdum5oFhCLaOi87ydIhQX1VE0mNMMIF_MeiYjRpMTuEuZ-a-9kE68gmaEj4qdm1qOnK1Tt8bmqD',
    lastMessage: "Coming now, just 2 minutes away!",
    time: '09:15 AM',
    unread: 0,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Priya Patel',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpcGM0k6pXsh9bQ5Jw011rwbBbXapKKgwHQbueX89dRZCuAN29gndZ3ckfn9de1SKX3O8gwTbAkzxvMW-zkbqoG1bx3fb1rnhHck5Ghn2nelcnhhxA507N7TrjF63VN0D8_JMPO4t5djAYMjX2ZYXGCToqp-vbqF9bX3zrPnUOg7xx79V9U5whwgWZNTuIg4qVwJ5NJveHSpRJnCIkSIKU8_WufGi7vcCo6wlcu7FfK15lXVWKnRNcTtDPDk7cFg-KrsUrGMxNvT4g',
    lastMessage: 'Are we still meeting at the station?',
    time: 'Yesterday',
    unread: 2,
    isOnline: false,
  },
  {
    id: 3,
    name: 'Vikram S.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAhilOCavTIEkLgtTfbQTGzw7NrmcddvZRTWImcxcuiGv-5rBgXBn24qZYVgNfzKkuZh-4Nz50nt8FTCREwBm6nUSNNgKpdZUrFqnI69AUBc_Mbb8XUErj5XV8q9KNasDVcwh6OXbBghCyzLkaYWbB4BHKN_uvC5mqavJrQAdovfnyMaBWDl5IQ6tX2lfO4ftUQIaTlLQ-eDSPy9crB2LJw5T1aCceicVd4_FkWqzSB3IBnBOFR5Jba_lw8-b2CEzAB0Kh7Kwpd7qr',
    lastMessage: 'Thanks for the ride!',
    time: 'Mon',
    unread: 0,
    isOnline: false,
  }
];

const InboxScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.surface} />
      
      {/* TopAppBar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Chat List */}
        <View style={styles.listContainer}>
          {chats.map((chat) => (
            <TouchableOpacity 
              key={chat.id} 
              style={styles.chatCard} 
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Chat')}
            >
              <View style={styles.avatarContainer}>
                <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                {chat.isOnline && <View style={styles.onlineBadge} />}
              </View>
              
              <View style={styles.chatDetails}>
                <View style={styles.chatHeaderRow}>
                  <Text style={[styles.chatName, chat.unread > 0 && styles.chatNameUnread]}>{chat.name}</Text>
                  <Text style={[styles.chatTime, chat.unread > 0 && styles.chatTimeUnread]}>{chat.time}</Text>
                </View>
                <View style={styles.chatMessageRow}>
                  <Text 
                    style={[styles.chatMessage, chat.unread > 0 && styles.chatMessageUnread]} 
                    numberOfLines={1}
                  >
                    {chat.lastMessage}
                  </Text>
                  {chat.unread > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadBadgeText}>{chat.unread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom spacer for global nav bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.surface,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 16 : 32,
    paddingBottom: 16,
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    zIndex: 10,
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 28,
    fontWeight: '800',
    color: palette.onSurface,
    letterSpacing: -0.5,
  },
  scrollContent: {
    paddingTop: 16,
  },
  listContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLowest,
    padding: 20,
    borderRadius: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03,
    shadowRadius: 24,
    elevation: 3,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: palette.surfaceContainerLow,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#10b981', // success green
    borderWidth: 2,
    borderColor: palette.surfaceContainerLowest,
  },
  chatDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '700',
    color: palette.onSurfaceVariant,
  },
  chatNameUnread: {
    fontWeight: '800',
    color: palette.onSurface,
  },
  chatTime: {
    fontSize: 11,
    fontWeight: '600',
    color: palette.outlineVariant,
  },
  chatTimeUnread: {
    color: palette.primary,
    fontWeight: '800',
  },
  chatMessageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatMessage: {
    flex: 1,
    fontSize: 14,
    color: palette.outlineVariant,
    marginRight: 16,
  },
  chatMessageUnread: {
    color: palette.onSurface,
    fontWeight: '600',
  },
  unreadBadge: {
    backgroundColor: palette.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
  },
  bottomSpacer: {
    height: 140, // Space for the global nav
  }
});

export default InboxScreen;

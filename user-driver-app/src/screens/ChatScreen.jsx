import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, 
  KeyboardAvoidingView, Platform, Image, StatusBar 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const palette = {
  primary: '#3b82f6', // Changed to match the more vibrant blue in the mock
  primaryDark: '#2563eb',
  onPrimary: '#ffffff',
  surface: '#f3f4f6', // Off-white backing
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#e5e7eb',
  onSurface: '#1f2937',
  onSurfaceVariant: '#4b5563',
  outlineVariant: '#9ca3af',
  success: '#10b981',
};

const MessageBubble = ({ text, isMine, time, status }) => (
  <View style={[styles.bubbleWrapper, isMine ? styles.bubbleMine : styles.bubbleTheirs]}>
    <View style={[
      styles.bubble, 
      isMine ? styles.bubbleMineContent : styles.bubbleTheirsContent
    ]}>
      <Text style={[styles.messageText, isMine ? styles.messageTextMine : styles.messageTextTheirs]}>
        {text}
      </Text>
    </View>
    <View style={[styles.timeContainer, isMine ? styles.timeContainerMine : styles.timeContainerTheirs]}>
      <Text style={styles.timeText}>{time}</Text>
      {isMine && status === 'read' && (
        <MaterialIcons name="done-all" size={14} color={palette.primary} style={styles.checkIcon} />
      )}
    </View>
  </View>
);

const ChatScreen = ({ navigation }) => {
  const [msg, setMsg] = useState('');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
            <MaterialIcons name="arrow-back" size={24} color={palette.onSurfaceVariant} />
          </TouchableOpacity>
          
          <View style={styles.headerTitleContainer}>
            <View style={styles.avatarWrapper}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5XSf6ppgCVm1dyksPZ9GpRuzux9CWc80Ts8rbKp4igQrERg64edUbYovR3swQXOuu-ZIJRjNrI-5jNDdEEwme8hOf0FXprqiGPNJs--FonCbH2U85dtt9BCyu6kASD3DrvAK8X1Tg1Pq4-WTLYcQUQawheOZC_mCM1j_sub-9XLDDo6pmw0iTI4mLiQ7rqvUuXdum5oFhCLaOi87ydIhQX1VE0mNMMIF_MeiYjRpMTuEuZ-a-9kE68gmaEj4qdm1qOnK1Tt8bmqD' }} 
                style={styles.avatar} 
              />
              <View style={styles.onlineBadge} />
            </View>
            <View style={styles.headerTextGroup}>
              <Text style={styles.headerName}>Rahul Sharma</Text>
              <Text style={styles.headerStatusText}>ON TRIP</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="phone" size={24} color={palette.primaryDark} />
          </TouchableOpacity>
        </View>

        {/* Chat Content */}
        <ScrollView contentContainerStyle={styles.chatContainer} showsVerticalScrollIndicator={false}>
          
          {/* Today Pill */}
          <View style={styles.datePillContainer}>
            <View style={styles.datePill}>
              <Text style={styles.datePillText}>TODAY</Text>
            </View>
          </View>

          {/* Messages */}
          <MessageBubble 
            text="Hey! I'm at the pickup point." 
            isMine={false} 
            time="09:14 AM" 
          />
          <MessageBubble 
            text="Waiting near the main entrance." 
            isMine={false} 
            time="09:15 AM" 
          />
          <MessageBubble 
            text="Coming now, just 2 minutes away!" 
            isMine={true} 
            time="09:15 AM" 
            status="read"
          />

          {/* Action Context Alert */}
          <View style={styles.actionAlertContainer}>
            <View style={styles.actionDot} />
            <Text style={styles.actionAlertText}>Rahul is looking for you</Text>
          </View>

        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputContainerWrapper}>
          <View style={styles.inputPill}>
            <TextInput 
              style={styles.textInput} 
              placeholder="Type a message..." 
              placeholderTextColor={palette.outlineVariant}
              value={msg}
              onChangeText={setMsg}
            />
            <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
              <MaterialIcons name="send" size={20} color="#ffffff" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
          {/* Extra bottom padding substituting tabbar view just in case */}
          <View style={{ height: Platform.OS === 'ios' ? 140 : 120 }} />
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: palette.surface 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 12,
    backgroundColor: palette.surface,
  },
  iconBtn: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitleContainer: { 
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: { 
    width: 44, 
    height: 44, 
    borderRadius: 22, 
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: palette.success,
    borderWidth: 2,
    borderColor: palette.surface,
  },
  headerTextGroup: {
    justifyContent: 'center',
  },
  headerName: { 
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16, 
    fontWeight: '800',
    color: palette.onSurface,
  },
  headerStatusText: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.primary,
    letterSpacing: 0.5,
  },
  chatContainer: { 
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  datePillContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  datePill: {
    backgroundColor: palette.surfaceContainerLow,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  datePillText: { 
    fontSize: 10, 
    fontWeight: '800',
    color: palette.onSurfaceVariant, 
    letterSpacing: 1,
  },
  bubbleWrapper: { 
    marginBottom: 20, 
    maxWidth: '80%',
  },
  bubbleMine: { 
    alignSelf: 'flex-end',
  },
  bubbleTheirs: { 
    alignSelf: 'flex-start',
  },
  bubble: { 
    padding: 16, 
    borderRadius: 24, 
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  bubbleMineContent: { 
    backgroundColor: palette.primary, 
    borderBottomRightRadius: 6, // Sharp bottom right
  },
  bubbleTheirsContent: { 
    backgroundColor: palette.surfaceContainerLowest, 
    borderTopLeftRadius: 6, // Sharp top left
  },
  messageText: { 
    fontSize: 15,
    lineHeight: 22,
  },
  messageTextMine: { 
    color: palette.onPrimary,
    fontWeight: '500',
  },
  messageTextTheirs: { 
    color: palette.onSurface,
    fontWeight: '500',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  timeContainerMine: {
    justifyContent: 'flex-end',
  },
  timeContainerTheirs: {
    justifyContent: 'flex-start',
  },
  timeText: { 
    fontSize: 11, 
    color: palette.onSurfaceVariant, 
    fontWeight: '500',
  },
  checkIcon: {
    marginLeft: 4,
  },
  actionAlertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 16,
    gap: 8,
  },
  actionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: palette.primary,
  },
  actionAlertText: {
    fontSize: 13,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
  },
  inputContainerWrapper: {
    backgroundColor: palette.surface,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  inputPill: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLowest, 
    borderRadius: 36, 
    paddingLeft: 24,
    paddingRight: 8,
    paddingVertical: 8,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 5,
  },
  textInput: { 
    flex: 1, 
    height: 44,
    fontSize: 15,
    fontWeight: '500',
    color: palette.onSurface,
  },
  sendButton: { 
    width: 48, 
    height: 48, 
    borderRadius: 24, 
    backgroundColor: palette.primary, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  }
});

export default ChatScreen;

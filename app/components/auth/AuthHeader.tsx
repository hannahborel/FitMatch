import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

type AuthHeaderProps = {
  title: string;
  onCancel?: () => void;
};

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title, onCancel }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 40,
      alignItems: 'center',
      marginBottom: 60,
      width: '100%',
    },
    title: {
      fontSize: 14,
      color: isDark ? '#fff' : '#000',
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

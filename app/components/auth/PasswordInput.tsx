import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { FormValues } from '../../types/auth';

interface PasswordInputProps {
  control: Control<FormValues>;
  name: keyof FormValues;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ control, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 50,
      borderWidth: 1,
      borderColor: isDark ? '#333' : '#ddd',
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      color: isDark ? '#fff' : '#000',
      backgroundColor: isDark ? '#333' : '#fff',
    },
    eyeIcon: {
      position: 'absolute',
      right: 16,
    },
    errorText: {
      color: '#ff3b30',
      fontSize: 12,
      marginTop: 4,
    },
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={isDark ? '#666' : '#999'}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color={isDark ? '#fff' : '#000'}
                />
              </TouchableOpacity>
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default PasswordInput;

import React from 'react';
import { View, TextInput, Text, StyleSheet, useColorScheme } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { FormValues } from '../../types/auth';

interface EmailInputProps {
  control: Control<FormValues>;
  name: keyof FormValues;
}

const EmailInput: React.FC<EmailInputProps> = ({ control, name }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: isDark ? '#333' : '#ddd',
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      color: isDark ? '#fff' : '#000',
      backgroundColor: isDark ? '#333' : '#fff',
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
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={isDark ? '#666' : '#999'}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default EmailInput;

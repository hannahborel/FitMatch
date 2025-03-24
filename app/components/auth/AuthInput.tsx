import React from 'react';
import { TextInput, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { Control, Controller } from 'react-hook-form';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = (width - 10) * 0.75;

type AuthInputProps = {
  control: Control<any>;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};

export const AuthInput: React.FC<AuthInputProps> = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    input: {
      width: INPUT_WIDTH,
      height: 50,
      backgroundColor: isDark ? '#333' : '#e8e8e8',
      borderRadius: 12,
      marginBottom: 12,
      paddingHorizontal: 16,
      color: isDark ? '#fff' : '#000',
      fontSize: 17,
    },
  });

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={isDark ? '#999' : '#666'}
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      )}
    />
  );
};

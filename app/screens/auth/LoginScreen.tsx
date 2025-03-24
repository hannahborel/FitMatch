import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  Dimensions,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import EmailInput from '../../components/auth/EmailInput';
import PasswordInput from '../../components/auth/PasswordInput';
import { FormValues } from '../../types/auth';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width - 40; // Full width minus padding

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const defaultValues: FormValues = {
  email: '',
  password: '',
};

export const LoginScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#1a1a1a' : '#fff',
      width: '100%',
    },
    content: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: isDark ? '#999' : '#666',
      marginBottom: 32,
    },
    form: {
      width: INPUT_WIDTH,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: 24,
    },
    forgotPasswordText: {
      color: '#007AFF',
      fontSize: 14,
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 24,
      width: INPUT_WIDTH,
    },
    signupText: {
      color: isDark ? '#999' : '#666',
      fontSize: 14,
    },
    signupLink: {
      color: '#007AFF',
      fontSize: 14,
      fontWeight: '600',
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.form}>
          <EmailInput control={control} name="email" />
          <PasswordInput control={control} name="password" />

          <TouchableOpacity
            onPress={() => console.log('Forgot password')}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => console.log('Sign up')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;

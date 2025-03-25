import React, { useState } from 'react';
import { View, Text, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthInput } from '../../components/auth/AuthInput';
import { AuthFooter } from '../../components/auth/AuthFooter';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = (width - 10) * 0.7;

type CreateAccountFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const defaultValues: CreateAccountFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const CreateAccount = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<CreateAccountFormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: CreateAccountFormValues) => {
    console.log('Form submitted:', data);
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      backgroundColor: isDark ? '#000' : '#fff',
      padding: 20,
      alignItems: 'center',
    },
    showPasswordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
      marginLeft: 8,
      width: INPUT_WIDTH,
    },
    checkbox: {
      width: 18,
      height: 18,
      borderWidth: 1,
      borderColor: isDark ? '#fff' : '#000',
      marginRight: 12,
      borderRadius: 0,
    },
    showPasswordText: {
      color: isDark ? '#fff' : '#000',
      fontSize: 16,
    },
    formContent: {
      gap: 100,
    },
  });

  return (
    <View style={styles.container}>
      <AuthHeader title="CREATE ACCOUNT" onCancel={() => router.back()} />
      <View style={styles.formContent}>
        <View>
          <AuthInput control={control} name="firstName" placeholder="First Name" />
          <AuthInput control={control} name="lastName" placeholder="Last Name" />
          <AuthInput
            control={control}
            name="email"
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AuthInput
            control={control}
            name="password"
            placeholder="Password (case sensitive)"
            secureTextEntry={!showPassword}
          />

          <View style={styles.showPasswordContainer}>
            <View style={styles.checkbox}>
              {showPassword && (
                <Text style={{ color: isDark ? '#fff' : '#000', textAlign: 'center' }}>✓</Text>
              )}
            </View>
            <Text style={styles.showPasswordText}>Show password</Text>
          </View>
        </View>
        <AuthFooter
          buttonText="CREATE ACCOUNT"
          onButtonPress={handleSubmit(onSubmit)}
          linkText="Already have an account?"
          linkActionText="Log In"
          onLinkPress={() => router.push('login' as any)}
        />
      </View>
    </View>
  );
};

export default CreateAccount;

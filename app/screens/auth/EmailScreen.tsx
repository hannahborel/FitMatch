import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import EmailInput from '../../components/auth/EmailInput';
import { FormValues } from '../../types/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const defaultValues: FormValues = {
  email: '',
  password: '',
};

export const EmailScreen: React.FC = () => {
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
      padding: 20,
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <EmailInput control={control} name="email" />
    </View>
  );
};

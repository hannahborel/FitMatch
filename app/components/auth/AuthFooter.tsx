import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = (width - 10) * 0.7;

type AuthFooterProps = {
  buttonText: string;
  onButtonPress: () => void;
  linkText: string;
  linkActionText: string;
  onLinkPress: () => void;
};

export const AuthFooter: React.FC<AuthFooterProps> = ({
  buttonText,
  onButtonPress,
  linkText,
  linkActionText,
  onLinkPress,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      width: INPUT_WIDTH,
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 25,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      width: '100%',
    },
    buttonText: {
      color: '#000',
      fontSize: 14,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
    linkContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    linkText: {
      color: isDark ? '#fff' : '#000',
      fontSize: 17,
    },
    link: {
      color: isDark ? '#fff' : '#000',
      fontSize: 17,
      textDecorationLine: 'underline',
      marginLeft: 4,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>{linkText}</Text>
        <TouchableOpacity onPress={onLinkPress}>
          <Text style={styles.link}>{linkActionText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

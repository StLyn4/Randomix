import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph } from 'react-native-paper';

import logo from 'app/assets/images/logo/icon.png';

export default function Info() {
  return (
    <ScrollView style={styles.infoContent}>
      <Avatar.Image source={logo} size={50} style={styles.logo} />
      <Title style={styles.title}>Randomix</Title>
      <Caption style={styles.caption}>by Vsevolod Volkov</Caption>
      <View style={styles.description}>
        <Paragraph style={styles.paragraph}>
          TODO: нормальное описание проекта
        </Paragraph>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoContent: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 20,
  },
  logo: {
    backgroundColor: '#989898',
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  description: {
    marginTop: 20,
  },
  paragraph: {
    fontWeight: 'bold',
  },
});

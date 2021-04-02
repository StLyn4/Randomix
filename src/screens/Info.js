import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Text } from 'react-native-paper';

import logo from 'app/assets/images/logo/icon.png';

export default function Info() {
  return (
    <ScrollView style={styles.infoContent}>
      <Avatar.Image source={logo} size={50} style={styles.logo} />
      <Title style={styles.title}>Randomix</Title>
      <Caption style={styles.caption}>by Vsevolod Volkov</Caption>
      <View style={styles.description}>
        <Paragraph>
          Быстрый и непредсказуемый <Text style={styles.bold}>XorShift+</Text>?
        </Paragraph>
        <Paragraph>
          Надёжный и проверенный временем{' '}
          <Text style={styles.bold}>Вихрь Мерсенна</Text>?
        </Paragraph>
        <Paragraph>
          Или может быть криптостойкая <Text style={styles.bold}>Фортуна</Text>,
          которой даже Apple подчинились?
        </Paragraph>
        <Title style={styles.title}>Выбор за Вами!</Title>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoContent: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
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
  bold: {
    fontWeight: 'bold',
  },
});

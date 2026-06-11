import { View, Text, StyleSheet } from 'react-native';

type Props = {
  number: number;
  color?: string;
  bg?: string;
};

export default function TelaNumero({ number, color = '#a8d5a2', bg = '#0f1f0f' }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.number, { color }]}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 120,
    fontWeight: '900',
    letterSpacing: -4,
    opacity: 0.9,
  },
});

import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Place } from '../data/places';

type PlaceCardProps = {
  place: Place;
  favorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
};

export function PlaceCard({
  place,
  favorite,
  onPress,
  onToggleFavorite,
}: PlaceCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.emoji}>
          {place.emoji}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.category}>
          {place.category.toUpperCase()}
        </Text>

        <Text style={styles.title}>
          {place.name}
        </Text>

        <Text style={styles.location}>
          {place.location}
        </Text>
      </View>

      <Pressable
        onPress={(event) => {
          event.stopPropagation();
          onToggleFavorite();
        }}
        hitSlop={10}
        style={({ pressed }) => [
          styles.favoriteButton,
          pressed && styles.favoriteButtonPressed,
        ]}
      >
        <Text style={styles.favoriteIcon}>
          {favorite ? '♥' : '♡'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderWidth: 1,
    borderColor: '#2A313B',
    borderRadius: 20,
    backgroundColor: '#171C23',
  },
  cardPressed: {
    opacity: 0.75,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#242A32',
  },
  emoji: {
    fontSize: 26,
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  category: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.3,
    color: '#FF9F66',
  },
  title: {
    marginTop: 4,
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  location: {
    marginTop: 4,
    fontSize: 12,
    color: '#7F8996',
  },
  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    marginLeft: 10,
  },
  favoriteButtonPressed: {
    opacity: 0.55,
  },
  favoriteIcon: {
    fontSize: 28,
    color: '#FF9F66',
  },
});

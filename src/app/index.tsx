import { router } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useFavorites } from '../context/FavoritesContext';
import { PLACES } from '../data/places';

export default function HomeScreen() {
  const { favoriteIds } = useFavorites();

  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>
        PLACES WISHLIST
      </Text>

      <Text style={styles.title}>
        Spot
      </Text>

      <Text style={styles.subtitle}>
        Save the places you want to experience.
      </Text>

      <View style={styles.heroCard}>
        <Text style={styles.heroEmoji}>
          📍
        </Text>

        <Text style={styles.heroTitle}>
          Your next favorite place starts here.
        </Text>

        <Text style={styles.heroText}>
          Explore your wishlist, open place details and keep your favorite spots together.
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>
            SAVED SPOTS
          </Text>

          <Text style={styles.statValue}>
            {PLACES.length}
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>
            FAVORITES
          </Text>

          <Text style={styles.statValue}>
            {favoriteIds.length}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => router.push('/places')}
        style={({ pressed }) => [
          styles.primaryButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.primaryButtonText}>
          Explore Places
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push('/favorites')}
        style={({ pressed }) => [
          styles.secondaryButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.secondaryButtonText}>
          ♥ View Favorites
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#0D1117',
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: '#FF9F66',
  },
  title: {
    marginTop: 8,
    fontSize: 46,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 8,
    maxWidth: 300,
    fontSize: 16,
    lineHeight: 23,
    color: '#98A2AF',
  },
  heroCard: {
    marginTop: 30,
    padding: 22,
    borderWidth: 1,
    borderColor: '#2A313B',
    borderRadius: 24,
    backgroundColor: '#171C23',
  },
  heroEmoji: {
    fontSize: 36,
  },
  heroTitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  heroText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: '#8F99A6',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  statCard: {
    flex: 1,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#FF9F66',
  },
  statLabel: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: '#5B2B12',
  },
  statValue: {
    marginTop: 6,
    fontSize: 26,
    fontWeight: '800',
    color: '#32180B',
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: '#FF9F66',
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FF9F66',
    borderRadius: 16,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#32180B',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FF9F66',
  },
});

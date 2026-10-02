import { router } from 'expo-router';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PlaceCard } from '../../components/PlaceCard';
import { useFavorites } from '../../context/FavoritesContext';
import { PLACES } from '../../data/places';

export default function PlacesScreen() {
  const {
    favoriteIds,
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  return (
    <FlatList
      data={PLACES}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => (
        <PlaceCard
          place={item}
          favorite={isFavorite(item.id)}
          onToggleFavorite={() =>
            toggleFavorite(item.id)
          }
          onPress={() =>
            router.push({
              pathname: '/places/[id]',
              params: {
                id: item.id,
                from: 'places',
              },
            })
          }
        />
      )}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.eyebrow}>
            YOUR WISHLIST
          </Text>

          <Text style={styles.title}>
            Places
          </Text>

          <Text style={styles.subtitle}>
            A few places worth keeping on your radar.
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.summary}>
              <Text style={styles.summaryLabel}>
                SAVED SPOTS
              </Text>

              <Text style={styles.summaryValue}>
                {PLACES.length}
              </Text>
            </View>

            <View style={styles.summary}>
              <Text style={styles.summaryLabel}>
                FAVORITES
              </Text>

              <Text style={styles.summaryValue}>
                {favoriteIds.length}
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => router.push('/favorites')}
            style={({ pressed }) => [
              styles.favoritesButton,
              pressed &&
                styles.favoritesButtonPressed,
            ]}
          >
            <Text style={styles.favoritesButtonText}>
              ♥ View Favorites
            </Text>
          </Pressable>

          <Text style={styles.sectionTitle}>
            Explore your list
          </Text>
        </View>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          <Text style={styles.footerEmoji}>
            📍
          </Text>

          <Text style={styles.footerText}>
            Save the spots you don't want to forget.
          </Text>
        </View>
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    backgroundColor: '#0D1117',
  },
  header: {
    marginBottom: 16,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: '#FF9F66',
  },
  title: {
    marginTop: 8,
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 22,
    color: '#98A2AF',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  summary: {
    flex: 1,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#FF9F66',
  },
  summaryLabel: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: '#5B2B12',
  },
  summaryValue: {
    marginTop: 6,
    fontSize: 26,
    fontWeight: '800',
    color: '#32180B',
  },
  favoritesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#FF9F66',
    borderRadius: 15,
  },
  favoritesButtonPressed: {
    opacity: 0.7,
  },
  favoritesButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FF9F66',
  },
  sectionTitle: {
    marginTop: 28,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  separator: {
    height: 12,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerEmoji: {
    fontSize: 28,
  },
  footerText: {
    marginTop: 8,
    fontSize: 13,
    color: '#737D8B',
  },
});

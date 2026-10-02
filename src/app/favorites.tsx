import { router } from 'expo-router';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PlaceCard } from '../components/PlaceCard';
import { useFavorites } from '../context/FavoritesContext';
import { PLACES } from '../data/places';

export default function FavoritesScreen() {
  const {
    favoriteIds,
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const favoritePlaces = PLACES.filter((place) =>
    favoriteIds.includes(place.id),
  );

  return (
    <FlatList
      data={favoritePlaces}
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
                from: 'favorites',
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
            SAVED FOR LATER
          </Text>

          <Text style={styles.title}>
            Favorites
          </Text>

          <Text style={styles.subtitle}>
            The places you really don't want to forget.
          </Text>

          <View style={styles.summary}>
            <Text style={styles.summaryLabel}>
              FAVORITES
            </Text>

            <Text style={styles.summaryValue}>
              {favoritePlaces.length}
            </Text>
          </View>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>
            ♡
          </Text>

          <Text style={styles.emptyTitle}>
            No favorites yet
          </Text>

          <Text style={styles.emptyText}>
            Save a place and it will appear here.
          </Text>

          <Pressable
            onPress={() => router.push('/places')}
            style={({ pressed }) => [
              styles.emptyButton,
              pressed && styles.emptyButtonPressed,
            ]}
          >
            <Text style={styles.emptyButtonText}>
              Explore Places
            </Text>
          </Pressable>
        </View>
      }
      ListFooterComponent={
        favoritePlaces.length > 0 ? (
          <View style={styles.footer}>
            <Text style={styles.footerEmoji}>
              ♥
            </Text>

            <Text style={styles.footerText}>
              Your favorite spots in one place.
            </Text>
          </View>
        ) : null
      }
      contentContainerStyle={[
        styles.container,
        favoritePlaces.length === 0 &&
          styles.emptyContainer,
      ]}
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
  emptyContainer: {
    flexGrow: 1,
  },
  header: {
    marginBottom: 18,
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
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FF9F66',
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#5B2B12',
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#32180B',
  },
  separator: {
    height: 12,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyEmoji: {
    fontSize: 52,
    color: '#FF9F66',
  },
  emptyTitle: {
    marginTop: 16,
    fontSize: 21,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  emptyText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#8F99A6',
  },
  emptyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    marginTop: 24,
    paddingHorizontal: 24,
    borderRadius: 14,
    backgroundColor: '#FF9F66',
  },
  emptyButtonPressed: {
    opacity: 0.75,
  },
  emptyButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#32180B',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerEmoji: {
    fontSize: 28,
    color: '#FF9F66',
  },
  footerText: {
    marginTop: 8,
    fontSize: 13,
    color: '#737D8B',
  },
});

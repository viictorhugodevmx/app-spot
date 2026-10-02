import {
  router,
  Stack,
  useLocalSearchParams,
} from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useFavorites } from '../../context/FavoritesContext';
import { PLACES } from '../../data/places';

type PlaceDetailsParams = {
  id: string;
  from?: 'places' | 'favorites';
};

export default function PlaceDetailsScreen() {
  const {
    id,
    from,
  } = useLocalSearchParams<PlaceDetailsParams>();

  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const place = PLACES.find(
    (currentPlace) =>
      currentPlace.id === id,
  );

  if (!place) {
    return (
      <>
        <Stack.Screen
          options={{
            title: 'Place not found',
          }}
        />

        <View style={styles.screen}>
          <View style={styles.notFound}>
            <Text style={styles.notFoundEmoji}>
              🧭
            </Text>

            <Text style={styles.notFoundTitle}>
              Place not found
            </Text>

            <Text style={styles.notFoundText}>
              This spot is not in your wishlist.
            </Text>

            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.backButtonPressed,
              ]}
            >
              <Text style={styles.backButtonText}>
                Go Back
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }

  const favorite = isFavorite(place.id);

  const openedFrom =
    from === 'favorites'
      ? 'Favorites'
      : 'Places';

  return (
    <>
      <Stack.Screen
        options={{
          title: place.name,
        }}
      />

      <View style={styles.screen}>
        <Text style={styles.eyebrow}>
          PLACE DETAILS
        </Text>

        <Text style={styles.emoji}>
          {place.emoji}
        </Text>

        <Text style={styles.title}>
          {place.name}
        </Text>

        <Text style={styles.location}>
          📍 {place.location}
        </Text>

        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {place.category}
          </Text>
        </View>

        <Pressable
          onPress={() =>
            toggleFavorite(place.id)
          }
          style={({ pressed }) => [
            styles.favoriteButton,
            favorite &&
              styles.favoriteButtonActive,
            pressed &&
              styles.favoriteButtonPressed,
          ]}
        >
          <Text
            style={[
              styles.favoriteButtonText,
              favorite &&
                styles.favoriteButtonTextActive,
            ]}
          >
            {favorite
              ? '♥ Saved to Favorites'
              : '♡ Add to Favorites'}
          </Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.label}>
            WHY IT'S ON THE LIST
          </Text>

          <Text style={styles.description}>
            {place.description}
          </Text>
        </View>

        <View style={styles.navigationCard}>
          <Text style={styles.routeLabel}>
            OPENED FROM
          </Text>

          <Text style={styles.navigationValue}>
            {openedFrom}
          </Text>

          <Text style={styles.routeLabel}>
            ROUTE PARAMETER
          </Text>

          <Text style={styles.routeValue}>
            {id}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    backgroundColor: '#0D1117',
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: '#FF9F66',
  },
  emoji: {
    marginTop: 26,
    fontSize: 54,
  },
  title: {
    marginTop: 16,
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  location: {
    marginTop: 8,
    fontSize: 15,
    color: '#98A2AF',
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: '#382319',
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FF9F66',
  },
  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#FF9F66',
    borderRadius: 16,
  },
  favoriteButtonActive: {
    backgroundColor: '#FF9F66',
  },
  favoriteButtonPressed: {
    opacity: 0.7,
  },
  favoriteButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FF9F66',
  },
  favoriteButtonTextActive: {
    color: '#32180B',
  },
  card: {
    marginTop: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: '#2A313B',
    borderRadius: 20,
    backgroundColor: '#171C23',
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#737D8B',
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 23,
    color: '#C0C6CF',
  },
  navigationCard: {
    marginTop: 14,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#12171D',
  },
  routeLabel: {
    marginTop: 8,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.3,
    color: '#66707D',
  },
  navigationValue: {
    marginTop: 6,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  routeValue: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '700',
    color: '#FF9F66',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundEmoji: {
    fontSize: 42,
  },
  notFoundTitle: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  notFoundText: {
    marginTop: 8,
    fontSize: 14,
    color: '#8F99A6',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    marginTop: 24,
    paddingHorizontal: 24,
    borderRadius: 14,
    backgroundColor: '#FF9F66',
  },
  backButtonPressed: {
    opacity: 0.75,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#32180B',
  },
});

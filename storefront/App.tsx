import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const categories = ['Sneakers', 'Fashion', 'Beauty', 'Tech'];

const featuredProducts = [
  {
    id: '1',
    name: 'Nova Runner',
    price: '$129',
    rating: '4.9',
    accent: '#FFE3D7',
    icon: '👟',
  },
  {
    id: '2',
    name: 'Aura Headset',
    price: '$89',
    rating: '4.7',
    accent: '#DDF4FF',
    icon: '🎧',
  },
  {
    id: '3',
    name: 'Glow Kit',
    price: '$59',
    rating: '4.8',
    accent: '#F5E6FF',
    icon: '💄',
  },
  {
    id: '4',
    name: 'Urban Pack',
    price: '$74',
    rating: '4.6',
    accent: '#E5F9E7',
    icon: '🎒',
  },
];

const flashDeals = [
  {
    title: 'Weekend Drop',
    subtitle: 'Up to 40% off on curated picks',
    badge: 'Limited',
  },
  {
    title: 'Free Delivery',
    subtitle: 'On orders above $60 today',
    badge: 'Hot',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Hi, Shopper 👋</Text>
              <Text style={styles.heading}>Find your next favorite product</Text>
            </View>
            <View style={styles.cartBubble}>
              <Text style={styles.cartText}>🛒</Text>
            </View>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.heroTextBlock}>
              <Text style={styles.heroEyebrow}>TRENDING COLLECTION</Text>
              <Text style={styles.heroTitle}>
                Fresh styles, smart gadgets, beauty bestsellers.
              </Text>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaText}>Shop now</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.heroEmoji}>✨</Text>
          </View>
        </View>

        <View style={styles.bodySection}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔎</Text>
            <TextInput
              placeholder="Search products, brands, or categories"
              placeholderTextColor="#8E8AA7"
              style={styles.searchInput}
            />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>

          <View style={styles.categoryRow}>
            {categories.map((category) => (
              <TouchableOpacity key={category} style={styles.categoryChip}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured products</Text>
            <Text style={styles.sectionLink}>Popular</Text>
          </View>

          <View style={styles.productGrid}>
            {featuredProducts.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <View style={[styles.productVisual, { backgroundColor: product.accent }]}>
                  <Text style={styles.productEmoji}>{product.icon}</Text>
                </View>
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.productMeta}>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <Text style={styles.productRating}>⭐ {product.rating}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Flash deals</Text>
            <Text style={styles.sectionLink}>Today</Text>
          </View>

          {flashDeals.map((deal) => (
            <View key={deal.title} style={styles.dealCard}>
              <View>
                <Text style={styles.dealBadge}>{deal.badge}</Text>
                <Text style={styles.dealTitle}>{deal.title}</Text>
                <Text style={styles.dealSubtitle}>{deal.subtitle}</Text>
              </View>
              <TouchableOpacity style={styles.dealButton}>
                <Text style={styles.dealButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.bottomNav}>
            <Text style={styles.navActive}>Home</Text>
            <Text style={styles.navItem}>Wishlist</Text>
            <Text style={styles.navItem}>Orders</Text>
            <Text style={styles.navItem}>Profile</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#6C3CF0',
  },
  content: {
    paddingBottom: 36,
  },
  topSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 26,
  },
  bodySection: {
    backgroundColor: '#F6F3FF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  greeting: {
    color: '#E6DEFF',
    fontSize: 14,
    marginBottom: 6,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    maxWidth: 250,
    lineHeight: 34,
  },
  cartBubble: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF22',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF33',
  },
  cartText: {
    fontSize: 24,
  },
  heroCard: {
    backgroundColor: '#1D1A3C',
    borderRadius: 28,
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTextBlock: {
    maxWidth: '76%',
  },
  heroEyebrow: {
    color: '#FFB86B',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0.8,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 31,
    marginBottom: 18,
  },
  heroEmoji: {
    fontSize: 54,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF7A59',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
  },
  ctaText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 22,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#201A3B',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#201A3B',
    fontSize: 20,
    fontWeight: '700',
  },
  sectionLink: {
    color: '#7B61FF',
    fontWeight: '600',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  categoryChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  categoryText: {
    color: '#443B66',
    fontWeight: '600',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 14,
    marginBottom: 14,
  },
  productVisual: {
    height: 118,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  productEmoji: {
    fontSize: 42,
  },
  productName: {
    color: '#201A3B',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  productMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    color: '#7B61FF',
    fontWeight: '700',
  },
  productRating: {
    color: '#6E678A',
    fontSize: 12,
    fontWeight: '600',
  },
  dealCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dealBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFE8DF',
    color: '#FF7A59',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
    marginBottom: 12,
  },
  dealTitle: {
    color: '#201A3B',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
  },
  dealSubtitle: {
    color: '#6E678A',
    maxWidth: 200,
    lineHeight: 20,
  },
  dealButton: {
    backgroundColor: '#201A3B',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
  },
  dealButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginTop: 10,
  },
  navActive: {
    color: '#7B61FF',
    fontWeight: '700',
  },
  navItem: {
    color: '#8C86A3',
    fontWeight: '600',
  },
});

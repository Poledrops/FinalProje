import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { categories, products } from '../data/mockData';

const { width } = Dimensions.get('window');

export const HomeScreen = ({ navigation }: any) => {
    const hotDeals = products.filter((p) => p.isNew || p.discount);
    const bestSellers = products.slice(0, 6);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hoş geldin! 👋</Text>
                    <Text style={styles.subtitle}>Ürünleri keşfet</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.bell}>🔔</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Categories */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Kategoriler</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Tümü</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.categoriesGrid}>
                        {categories.map((category) => (
                            <View key={category.id} style={styles.categoryItem}>
                                <CategoryCard
                                    category={category}
                                    onPress={() => navigation.navigate('Category', { category })}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                {/* Fırsatlar */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>🔥 Fırsatlar</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={hotDeals}
                        renderItem={({ item }) => (
                            <View style={styles.hotItem}>
                                <ProductCard
                                    product={item}
                                    onPress={() => navigation.navigate('ProductDetail', { product: item })}
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Çok Satanlar */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>⭐ Çok Satanlar</Text>
                    </View>

                    <View style={styles.productsGrid}>
                        {bestSellers.map((product) => (
                            <View key={product.id} style={styles.productItem}>
                                <ProductCard
                                    product={product}
                                    onPress={() => navigation.navigate('ProductDetail', { product })}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
    },
    header: {
        backgroundColor: '#8B5CF6',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#FFF',
        opacity: 0.9,
        marginTop: 4,
    },
    bell: {
        fontSize: 24,
    },
    content: {
        flex: 1,
    },
    section: {
        marginTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    seeAll: {
        fontSize: 14,
        color: '#8B5CF6',
        fontWeight: 'bold',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    categoryItem: {
        width: (width - 32) / 3,
    },
    hotItem: {
        width: width * 0.42,
        marginLeft: 8,
    },
    productsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 8,
    },
    productItem: {
        width: (width - 24) / 2,
    },
});

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';

const { width } = Dimensions.get('window');

export const CategoryScreen = ({ route, navigation }: any) => {
    const { category } = route.params;

    // Kategoriye göre ürünleri filtrele
    const categoryProducts = products.filter((p) =>
        p.category.toLowerCase() === category.name.toLowerCase()
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Geri</Text>
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.title}>{category.icon} {category.name}</Text>
                    <Text style={styles.subtitle}>{categoryProducts.length} ürün</Text>
                </View>
                <View style={{ width: 60 }} />
            </View>

            {/* Ürün Listesi */}
            <FlatList
                data={categoryProducts}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <ProductCard
                            product={item}
                            onPress={() => navigation.navigate('ProductDetail', { product: item })}
                        />
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyIcon}>📦</Text>
                        <Text style={styles.emptyText}>Bu kategoride ürün yok</Text>
                    </View>
                }
            />
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
    backButton: {
        fontSize: 18,
        color: '#FFF',
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#FFF',
        opacity: 0.9,
        marginTop: 4,
    },
    list: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
    productItem: {
        width: (width - 24) / 2,
    },
    empty: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },
    emptyIcon: {
        fontSize: 80,
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
        marginTop: 16,
    },
});

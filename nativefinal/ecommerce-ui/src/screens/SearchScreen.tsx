import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';

export const SearchScreen = ({ navigation }: any) => {
    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Arama fonksiyonu
    const handleSearch = (text: string) => {
        setSearchText(text);

        if (text === '') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Geri</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ürün Ara</Text>
                <View style={{ width: 50 }} />
            </View>

            {/* Search Input */}
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Ürün adı yazın..."
                    placeholderTextColor="#999"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>

            {/* Sonuçlar */}
            <View style={styles.results}>
                <Text style={styles.resultText}>
                    {filteredProducts.length} ürün bulundu
                </Text>
            </View>

            {/* Ürün Listesi */}
            <FlatList
                data={filteredProducts}
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
                        <Text style={styles.emptyText}>😕</Text>
                        <Text style={styles.emptyMessage}>Ürün bulunamadı</Text>
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
    headerTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    searchBox: {
        padding: 16,
        backgroundColor: '#8B5CF6',
    },
    input: {
        backgroundColor: '#1E293B',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        color: '#FFF',
    },
    results: {
        padding: 16,
    },
    resultText: {
        fontSize: 14,
        color: '#999',
    },
    list: {
        paddingHorizontal: 8,
    },
    productItem: {
        width: '50%',
        padding: 4,
    },
    empty: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
    },
    emptyText: {
        fontSize: 60,
    },
    emptyMessage: {
        fontSize: 16,
        color: '#999',
        marginTop: 16,
    },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ProductCard = ({ product, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.container}>
            <View style={styles.card}>
                {/* Ürün Resmi */}
                <View style={styles.imageBox}>
                    {product.image ? (
                        <Image
                            source={{ uri: product.image }}
                            style={styles.productImage}
                        />
                    ) : (
                        <Ionicons name="image-outline" size={40} color="#888" />
                    )}

                    {/* YENİ Badge */}
                    {product.isNew && (
                        <View style={styles.newBadge}>
                            <Text style={styles.badgeText}>YENİ</Text>
                        </View>
                    )}

                    {/* İndirim Badge */}
                    {product.discount && (
                        <View style={styles.discountBadge}>
                            <Text style={styles.badgeText}>%{product.discount}</Text>
                        </View>
                    )}
                </View>

                {/* Ürün Bilgileri */}
                <View style={styles.info}>
                    <Text style={styles.brand}>{product.brand}</Text>
                    <Text style={styles.name} numberOfLines={2}>
                        {product.name}
                    </Text>

                    {/* Yıldız */}
                    <View style={styles.rating}>
                        <Ionicons name="star" size={14} color="#FBBF24" />
                        <Text style={styles.ratingText}>{product.rating}</Text>
                    </View>

                    {/* Fiyat */}
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>${product.price}</Text>
                        {product.originalPrice && (
                            <Text style={styles.oldPrice}>${product.originalPrice}</Text>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
    },
    card: {
        backgroundColor: '#1E293B',
        borderRadius: 12,
        overflow: 'hidden',
    },
    imageBox: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#0F172A',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    newBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#10B981',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    discountBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
    info: {
        padding: 12,
    },
    brand: {
        fontSize: 11,
        color: '#94A3B8',
        textTransform: 'uppercase',
    },
    name: {
        fontSize: 14,
        color: '#F8FAFC',
        marginTop: 4,
        fontWeight: '600',
        height: 36,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingText: {
        fontSize: 12,
        color: '#F8FAFC',
        marginLeft: 4,
        fontWeight: '600',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    price: {
        fontSize: 18,
        color: '#F8FAFC',
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 14,
        color: '#94A3B8',
        textDecorationLine: 'line-through',
        marginLeft: 8,
    },
});

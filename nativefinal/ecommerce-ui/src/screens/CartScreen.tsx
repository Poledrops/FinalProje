import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button } from '../components/Button';
import { cartItems as initialCartItems } from '../data/mockData';

export const CartScreen = ({ navigation }: any) => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Miktar artır
    const increaseQuantity = (id: string) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Miktar azalt
    const decreaseQuantity = (id: string) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    // Toplam fiyat hesapla
    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sepetim 🛒</Text>
                <Text style={styles.itemCount}>{cartItems.length} ürün</Text>
            </View>

            {/* Sepet Listesi */}
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        {/* Ürün Resmi */}
                        <View style={styles.imageBox}>
                            {item.product.image ? (
                                <Image source={{ uri: item.product.image }} style={styles.image} />
                            ) : (
                                <Text style={styles.noImage}>📷</Text>
                            )}
                        </View>

                        {/* Ürün Bilgileri */}
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.product.name}</Text>
                            <Text style={styles.brand}>{item.product.brand}</Text>
                            <Text style={styles.price}>${item.product.price}</Text>
                        </View>

                        {/* Miktar */}
                        <View style={styles.quantityBox}>
                            <TouchableOpacity
                                style={styles.quantityBtn}
                                onPress={() => decreaseQuantity(item.id)}
                            >
                                <Text style={styles.quantityBtnText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity
                                style={styles.quantityBtn}
                                onPress={() => increaseQuantity(item.id)}
                            >
                                <Text style={styles.quantityBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyIcon}>🛒</Text>
                        <Text style={styles.emptyText}>Sepetiniz boş</Text>
                    </View>
                }
            />

            {/* Alt Kısım - Toplam ve Ödeme */}
            {cartItems.length > 0 && (
                <View style={styles.footer}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Toplam:</Text>
                        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
                    </View>
                    <Button
                        title="Ödemeye Geç"
                        onPress={() => {
                            alert('Ödeme sayfası yakında!');
                        }}
                        fullWidth
                    />
                </View>
            )}
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
    },
    headerTitle: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    itemCount: {
        fontSize: 14,
        color: '#FFF',
        opacity: 0.9,
        marginTop: 4,
    },
    list: {
        padding: 16,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#1E293B',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    imageBox: {
        width: 80,
        height: 80,
        backgroundColor: '#0F172A',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    noImage: {
        fontSize: 30,
    },
    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    brand: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
    },
    price: {
        fontSize: 18,
        color: '#8B5CF6',
        fontWeight: 'bold',
        marginTop: 4,
    },
    quantityBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityBtn: {
        width: 30,
        height: 30,
        backgroundColor: '#8B5CF6',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityBtnText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        color: '#FFF',
        marginHorizontal: 12,
        fontWeight: 'bold',
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
    footer: {
        padding: 16,
        backgroundColor: '#1E293B',
        borderTopWidth: 1,
        borderTopColor: '#334155',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 24,
        color: '#8B5CF6',
        fontWeight: 'bold',
    },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CartItem = ({ item, onAdd, onRemove, onDelete }: any) => {
    const total = item.product.price * item.quantity;

    return (
        <View style={styles.container}>
            {/* Ürün Resmi */}
            <View style={styles.image}>
                <Ionicons name="image-outline" size={32} color="#888" />
            </View>

            {/* Ürün Bilgileri */}
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={2}>
                    {item.product.name}
                </Text>

                {item.selectedColor && (
                    <Text style={styles.detail}>Renk: {item.selectedColor}</Text>
                )}
                {item.selectedSize && (
                    <Text style={styles.detail}>Beden: {item.selectedSize}</Text>
                )}

                <View style={styles.bottom}>
                    <Text style={styles.price}>${total.toFixed(2)}</Text>

                    {/* Adet */}
                    <View style={styles.quantity}>
                        <TouchableOpacity onPress={onRemove} style={styles.btn}>
                            <Ionicons name="remove" size={16} color="#FFF" />
                        </TouchableOpacity>

                        <Text style={styles.qtyText}>{item.quantity}</Text>

                        <TouchableOpacity onPress={onAdd} style={styles.btn}>
                            <Ionicons name="add" size={16} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Sil Butonu */}
            <TouchableOpacity onPress={onDelete} style={styles.delete}>
                <Ionicons name="trash-outline" size={20} color="#EF4444" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1E293B',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: '#0F172A',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        color: '#F8FAFC',
        fontWeight: '600',
    },
    detail: {
        fontSize: 12,
        color: '#94A3B8',
        marginTop: 2,
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 18,
        color: '#F8FAFC',
        fontWeight: 'bold',
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0F172A',
        borderRadius: 8,
        padding: 4,
    },
    btn: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtyText: {
        fontSize: 16,
        color: '#F8FAFC',
        fontWeight: '600',
        marginHorizontal: 12,
        minWidth: 24,
        textAlign: 'center',
    },
    delete: {
        padding: 8,
    },
});

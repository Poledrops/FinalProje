import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { orders } from '../data/mockData';

export const OrdersScreen = () => {
    // Durum renkleri
    const getStatusColor = (status: string) => {
        if (status === 'delivered') return '#10B981';
        if (status === 'shipped') return '#3B82F6';
        return '#F59E0B';
    };

    // Durum metni
    const getStatusText = (status: string) => {
        if (status === 'delivered') return 'Teslim Edildi ✓';
        if (status === 'shipped') return 'Kargoda 📦';
        return 'Hazırlanıyor ⏳';
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Siparişlerim 📋</Text>
                    <Text style={styles.orderCount}>{orders.length} sipariş</Text>
                </View>
            </View>

            {/* Sipariş Listesi */}
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.orderCard}>
                        {/* Sipariş Numarası ve Tarih */}
                        <View style={styles.orderHeader}>
                            <Text style={styles.orderNumber}>{item.orderNumber}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>

                        {/* Ürünler */}
                        <View style={styles.products}>
                            {item.items.map((product, index) => (
                                <Text key={index} style={styles.productText}>
                                    • {product.product.name} (x{product.quantity})
                                </Text>
                            ))}
                        </View>

                        {/* Toplam ve Durum */}
                        <View style={styles.footer}>
                            <Text style={styles.total}>${item.total}</Text>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
                                <Text style={styles.statusText}>{getStatusText(item.status)}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyIcon}>📦</Text>
                        <Text style={styles.emptyText}>Henüz sipariş yok</Text>
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
    },
    headerTitle: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    orderCount: {
        fontSize: 14,
        color: '#FFF',
        opacity: 0.9,
        marginTop: 4,
    },
    list: {
        padding: 16,
    },
    orderCard: {
        backgroundColor: '#1E293B',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    orderNumber: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: '#999',
    },
    products: {
        marginBottom: 12,
    },
    productText: {
        fontSize: 14,
        color: '#CCC',
        marginBottom: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#334155',
    },
    total: {
        fontSize: 20,
        color: '#8B5CF6',
        fontWeight: 'bold',
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusText: {
        fontSize: 12,
        color: '#FFF',
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
});

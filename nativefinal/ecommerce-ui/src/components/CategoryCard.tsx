import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CategoryCard = ({ category, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.icon}>{category.icon}</Text>
            <Text style={styles.name}>{category.name}</Text>
            <Text style={styles.count}>{category.count} ürün</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 6,
        padding: 20,
        backgroundColor: '#8B5CF6',
        borderRadius: 16,
        justifyContent: 'space-between',
        minHeight: 130,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    icon: {
        fontSize: 42,
        marginBottom: 4,
    },
    name: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 8,
    },
    count: {
        fontSize: 13,
        color: '#FFF',
        opacity: 0.95,
        marginTop: 4,
    },
});

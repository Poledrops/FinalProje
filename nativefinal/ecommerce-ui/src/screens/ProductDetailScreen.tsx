import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button } from '../components/Button';

export const ProductDetailScreen = ({ route, navigation }: any) => {
    const { product } = route.params;
    const [selectedColor, setSelectedColor] = useState('black');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Geri</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ürün Detayı</Text>
                <TouchableOpacity>
                    <Text style={styles.heart}>❤️</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {/* Ürün Resmi */}
                <View style={styles.imageBox}>
                    {product.image ? (
                        <Image source={{ uri: product.image }} style={styles.image} />
                    ) : (
                        <Text style={styles.noImage}>📷</Text>
                    )}
                </View>

                <View style={styles.content}>
                    <Text style={styles.brand}>{product.brand}</Text>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>

                    <Text style={styles.sectionTitle}>Açıklama</Text>
                    <Text style={styles.description}>
                        Bu harika ürün yüksek kaliteli malzemelerden üretilmiştir. Uzun ömürlü kullanım için tasarlanmıştır.
                    </Text>

                    <Text style={styles.sectionTitle}>Renk Seç</Text>
                    <View style={styles.colors}>
                        {['black', 'white', 'blue'].map((color) => (
                            <TouchableOpacity
                                key={color}
                                style={[
                                    styles.colorBox,
                                    { backgroundColor: color },
                                    selectedColor === color && styles.selectedColor
                                ]}
                                onPress={() => setSelectedColor(color)}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title="Sepete Ekle"
                    onPress={() => navigation.navigate('Cart')}
                    fullWidth
                />
            </View>
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
    heart: {
        fontSize: 24,
    },
    imageBox: {
        width: '100%',
        height: 300,
        backgroundColor: '#1E293B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    noImage: {
        fontSize: 60,
    },
    content: {
        padding: 16,
    },
    brand: {
        fontSize: 12,
        color: '#999',
        textTransform: 'uppercase',
    },
    name: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 4,
    },
    price: {
        fontSize: 28,
        color: '#8B5CF6',
        fontWeight: 'bold',
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#CCC',
        lineHeight: 20,
    },
    colors: {
        flexDirection: 'row',
    },
    colorBox: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedColor: {
        borderColor: '#8B5CF6',
        borderWidth: 3,
    },
    footer: {
        padding: 16,
        backgroundColor: '#0F172A',
        borderTopWidth: 1,
        borderTopColor: '#1E293B',
    },
});

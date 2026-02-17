import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';

export const CheckoutScreen = ({ navigation }: any) => {
    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
        <View style={styles.container}>
            {/* Başlık */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.title}>Ödeme</Text>
                <View style={styles.backBtn} />
            </View>

            <ScrollView style={styles.content}>
                {/* Adres */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Teslimat Adresi</Text>
                    <View style={styles.card}>
                        <TextInput style={styles.input} placeholder="Ad Soyad" placeholderTextColor="#888" />
                        <TextInput style={styles.input} placeholder="Telefon" placeholderTextColor="#888" keyboardType="phone-pad" />
                        <TextInput style={styles.input} placeholder="Adres" placeholderTextColor="#888" />
                        <View style={styles.row}>
                            <TextInput style={[styles.input, styles.half]} placeholder="Şehir" placeholderTextColor="#888" />
                            <TextInput style={[styles.input, styles.half]} placeholder="Posta Kodu" placeholderTextColor="#888" />
                        </View>
                    </View>
                </View>

                {/* Ödeme Yöntemi */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ödeme Yöntemi</Text>

                    <TouchableOpacity
                        style={[styles.paymentOption, paymentMethod === 'card' && styles.paymentActive]}
                        onPress={() => setPaymentMethod('card')}
                    >
                        <View style={styles.paymentLeft}>
                            <Ionicons name="card-outline" size={24} color="#FFF" />
                            <Text style={styles.paymentText}>Kredi Kartı</Text>
                        </View>
                        <View style={[styles.radio, paymentMethod === 'card' && styles.radioActive]}>
                            {paymentMethod === 'card' && <View style={styles.radioDot} />}
                        </View>
                    </TouchableOpacity>

                    {paymentMethod === 'card' && (
                        <View style={styles.card}>
                            <TextInput style={styles.input} placeholder="Kart Numarası" placeholderTextColor="#888" keyboardType="number-pad" />
                            <View style={styles.row}>
                                <TextInput style={[styles.input, styles.half]} placeholder="AA/YY" placeholderTextColor="#888" />
                                <TextInput style={[styles.input, styles.half]} placeholder="CVV" placeholderTextColor="#888" keyboardType="number-pad" secureTextEntry={true} />
                            </View>
                        </View>
                    )}

                    <TouchableOpacity
                        style={[styles.paymentOption, paymentMethod === 'paypal' && styles.paymentActive]}
                        onPress={() => setPaymentMethod('paypal')}
                    >
                        <View style={styles.paymentLeft}>
                            <Ionicons name="logo-paypal" size={24} color="#FFF" />
                            <Text style={styles.paymentText}>PayPal</Text>
                        </View>
                        <View style={[styles.radio, paymentMethod === 'paypal' && styles.radioActive]}>
                            {paymentMethod === 'paypal' && <View style={styles.radioDot} />}
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Özet */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sipariş Özeti</Text>
                    <View style={styles.card}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.label}>Ara Toplam</Text>
                            <Text style={styles.value}>$739.97</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.label}>Kargo</Text>
                            <Text style={styles.value}>ÜCRETSİZ</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryRow}>
                            <Text style={styles.totalLabel}>Toplam</Text>
                            <Text style={styles.totalValue}>$739.97</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Alt Buton */}
            <View style={styles.footer}>
                <Button
                    title="Siparişi Tamamla"
                    onPress={() => navigation.navigate('OrdersTab')}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 48,
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: '#1E293B',
    },
    backBtn: {
        padding: 8,
        width: 40,
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600',
    },
    content: {
        flex: 1,
    },
    section: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '600',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#1E293B',
        borderRadius: 12,
        padding: 16,
    },
    input: {
        backgroundColor: '#0F172A',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#FFF',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: -6,
    },
    half: {
        flex: 1,
        marginHorizontal: 6,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1E293B',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    paymentActive: {
        borderColor: '#6366F1',
    },
    paymentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
        marginLeft: 12,
    },
    radio: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#475569',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioActive: {
        borderColor: '#6366F1',
    },
    radioDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#6366F1',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        color: '#CBD5E1',
    },
    value: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#334155',
        marginVertical: 12,
    },
    totalLabel: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '600',
    },
    totalValue: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#1E293B',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#334155',
    },
});

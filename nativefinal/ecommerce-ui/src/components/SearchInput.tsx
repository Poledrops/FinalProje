import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const SearchInput = ({ placeholder, value, onChangeText, editable }: any) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#999"
            value={value}
            onChangeText={onChangeText}
            editable={editable}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1E293B',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        color: '#FFF',
    },
});

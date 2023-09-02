import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';

const uri = 'https://previews.123rf.com/images/dny3d/dny3d1403/dny3d140300114/26750166-3d-hombre-minera-de-oro-miner%C3%ADa-en-el-fondo-blanco.jpg';

function FormPrincipal() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />

            <TouchableOpacity onPress={() => navigation.navigate('FormHours')} style={styles.button}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'blue' }}>Registro de horas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FormNov')} style={styles.button}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'blue' }}>Registro de novedades</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    button: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#D7E1E180',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    }
});

export default FormPrincipal;

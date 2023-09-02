import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';

function FormNov() {
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFin, setFechaFin] = useState(new Date());
    const [tipoNovedad, setTipoNovedad] = useState(''); 
    const [diasCalculados, setDiasCalculados] = useState(null);
  
    const calcularDias = () => {
      const diferenciaEnDias = Math.ceil(
        (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)
      );
    switch (tipoNovedad) {
      case 'Vacaciones':
        if ( (diferenciaEnDias)>=1 && (diferenciaEnDias)<=15){
          setDiasCalculados(diferenciaEnDias);
        } else {
          Alert.alert('Las Vacaciones deben ser minimo 1 dia y maximo 15 ');
        setDiasCalculados(null);
        }
        break;
      case 'Licencia':
        if (diferenciaEnDias<= 8) {
          setDiasCalculados(diferenciaEnDias);
        } else {
          Alert.alert('Las Licencias no deben ser superiores a 8 días  ');
          setDiasCalculados(null);
      }
        break;
      case 'Incapacidad':
        setDiasCalculados(diferenciaEnDias)
      break; 
       } 
    }
    return (
      <View style ={styles.container}>
        <ScrollView>
          <View>
            <Text>Seleccione el tipo de novedad:</Text>
            <TouchableOpacity
              style={[styles.button, tipoNovedad === 'Incapacidad' && styles.selectedButton]}
              onPress={() => setTipoNovedad('Incapacidad')}
            >
              <Text>Incapacidad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, tipoNovedad === 'Licencia' && styles.selectedButton]}
              onPress={() => setTipoNovedad('Licencia')}
            >
              <Text>Licencia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, tipoNovedad === 'Vacaciones' && styles.selectedButton]}
              onPress={() => setTipoNovedad('Vacaciones')}
            >
              <Text>Vacaciones</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Fecha de inicio:</Text>
            <DatePicker
              mode="date"
              date={fechaInicio}
              onDateChange={date => setFechaInicio(date)}
            />
          </View>
          <View>
            <Text>Fecha de fin:</Text>
            <DatePicker
              mode="date"
              date={fechaFin}
              onDateChange={date => setFechaFin(date)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcularDias()}
          >
            <Text>Calcular días</Text>
          </TouchableOpacity>
          {diasCalculados !== null && (
            <Text>Días calculados: {diasCalculados}</Text>
          )}
        </ScrollView>
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
    },
    selectedButton: {
      backgroundColor: 'blue', 
    },
  });


export default FormNov;

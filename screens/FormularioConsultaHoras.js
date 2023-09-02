import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FormularioConsultaHoras = ({ route }) => {
  const { formData } = route.params;
  const [registrosHoras, setRegistrosHoras] = useState([]);
  const agregarRegistroHoras = () => {
    setRegistrosHoras([...registrosHoras, formData]);
  };
  function ListaDeRegistros({ registrosHoras }) {
    return (
      <View style={styles.container}>
        {registrosHoras.map((registrosHoras, index) => (
          <View key={index}>
            <Text style={styles.Text}>Fecha: {registrosHoras.date}</Text>
      <Text style={styles.Text}>Hora de inicio: {registrosHoras.timeInit}</Text>
      <Text style={styles.Text}>Hora de salida: {registrosHoras.timeFinal}</Text>
      <Text style={styles.Text}>Total de horas trabajadas: {registrosHoras.totalHours}</Text>
          </View>
        ))}
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Button title="Agregar Registro de Horas" onPress={agregarRegistroHoras} />
      <ListaDeRegistros registrosHoras={registrosHoras} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D7E1E180',
      
    },
    Text: {
      fontSize: 24,
      marginBottom: 20,
      color: '#000000',
    },
});


export default FormularioConsultaHoras;
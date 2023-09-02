import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-modern-datepicker';

function FormHours() {
  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [timeInit, setTimeInit] = useState('');
  const [timeFinal, setTimeFinal] = useState('');
  const [totalHours, setTotalHours] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    timeInit: '',
    timeFinal: '',
    totalHours: null,
  });
  const calculateHoursDifference = () => {
    if (timeInit && timeFinal) {
      const initTime = new Date(`2023-01-01T${timeInit}`);
      const finalTime = new Date(`2023-01-01T${timeFinal}`);
      const differenceInMilliseconds = finalTime - initTime;
      const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
      setTotalHours(differenceInHours);
      setFormData({
        date: date,
        timeInit: timeInit,
        timeFinal: timeFinal,
        totalHours: differenceInHours,
      });

    }
  };


  return (
    <View>
      <ScrollView>
        <View>
          <Text>
            Elija la fecha de ingreso :
          </Text>
          <DatePicker
            mode="date"
            date={date ? new Date(date) : new Date()}
            onDateChange={selectedDate => setDate(selectedDate)}
          />
        </View>
        <View>
          <Text>
            Ingrese la hora de entrada:
          </Text>
          <DatePicker
            mode="time"
            minuteInterval={3}
            onTimeChange={selectedTime => setTimeInit(selectedTime)}
          />
        </View>
        <View>
          <Text>
            Ingrese la hora de salida:
          </Text>
          <DatePicker
            mode="time"
            minuteInterval={3}
            onTimeChange={selectedTime => setTimeFinal(selectedTime)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={calculateHoursDifference}>
            <Text>Calcular Horas Trabajadas</Text>
          </TouchableOpacity>
        </View>
        {totalHours !== null && (
          <View>
            <Text>El total de las horas trabajadas es: {totalHours} horas</Text>
          </View>
        )}
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormularioConsultaHoras', { formData })}>
            <Text>Consultar Horas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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

export default FormHours;
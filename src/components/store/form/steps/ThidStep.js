import React  from 'react'
import { Form, Radio, Select } from 'antd'

const { Option } = Select;

const optionsSubway = [
  { value: 1, label: 'Linea 1' },
  { value: 2, label: 'Linea 2' },
  { value: 3, label: 'Linea 3' }
]

const weekDays = [
  { value: 1, label: 'Lunes' },
  { value: 2, label: 'Martes' },
  { value: 3, label: 'Miercoles' },
  { value: 4, label: 'Jueves' },
  { value: 5, label: 'Viernes' },
  { value: 6, label: 'Sabado' },
  { value: 7, label: 'Domingo' }
]

const optionsL1 = [
  { value: 1, label: 'Los dominicos' },
  { value: 2, label: 'Hernando de Magallanes' },
  { value: 3, label: 'Manquehue' }
]

const optionsL2 = [
  { value: 1, label: 'Grecia' },
  { value: 2, label: 'Los Orientales' },
  { value: 3, label: 'Plaza Egaña' }
]

const optionsL3 = [
  { value: 1, label: 'Grecia' },
  { value: 2, label: 'Los Orientales' },
  { value: 3, label: 'Plaza Egaña' }
]

const optionsL4 = [
  { value: 1, label: 'Grecia' },
  { value: 2, label: 'Los Orientales' },
  { value: 3, label: 'Plaza Egaña' }
]

const optionsL5 = [
  { value: 1, label: 'Grecia' },
  { value: 2, label: 'Los Orientales' },
  { value: 3, label: 'Plaza Egaña' }
]

const optionsL6 = [
  { value: 1, label: 'Grecia' },
  { value: 2, label: 'Los Orientales' },
  { value: 3, label: 'Plaza Egaña' }
]

let stationOptions = []

const getStationOfSubway = ({target}) => {
  switch (target.value) {
    case 1:
      stationOptions = optionsL1
      break;
    case 2:
      stationOptions = optionsL2
      break;
    case 3:
      stationOptions = optionsL3
      break;
    case 4:
     stationOptions = optionsL4
     break;
    case 5:
      stationOptions = optionsL5
      break;
    case 6:
      stationOptions = optionsL6
      break;
    default:
      break;
  }
}

const ThirdStep = ({ getFieldDecorator, getFieldValue }) => (
  <div>
    <Form.Item label="Dias">
      {getFieldDecorator('deliveryDays', {
        rules: [{ required: true, message: 'Please select your industry!' }],
      })(
        <Select
          mode="multiple"
          placeholder="Seleccione Una estacion"
        >
          {weekDays.map(day => <Option key={day.value} value={day.value}>{day.label}</Option>)}
        </Select>,
      )}
    </Form.Item>
    <Form.Item label="Linea">
      {getFieldDecorator('deliverySubways', {
        rules: [{ required: true, message: 'Please select your industry!' }],
      })(
        <Radio.Group onChange={getStationOfSubway}>
          {optionsSubway.map(subway => <Radio key={subway.value} value={subway.value}>{subway.label}</Radio>)}
        </Radio.Group>,
      )}
    </Form.Item>
    <Form.Item label="Estaciones">
      {getFieldDecorator('deliveryStations', {
        rules: [{ required: true, message: 'Please select your industry!' }],
      })(
        <Select
          mode="multiple"
          placeholder="Seleccione Una estacion"
        >
          {stationOptions.map(station => <Option key={station.value} value={station.value}>{station.label}</Option>)}
        </Select>,
      )}
    </Form.Item>
  </div>
)

export default ThirdStep
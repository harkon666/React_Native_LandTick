import React from 'react';
import {
  Datepicker,
  Icon,
  Autocomplete,
  Layout,
  Button,
  Text,
} from '@ui-kitten/components';

const DATA = [
  {
    id: 1,
    title: 'Jakarta',
  },
  {
    id: 2,
    title: 'Bandung',
  },
  {
    id: 3,
    title: 'Semarang',
  },
  {
    id: 4,
    title: 'Purwokerto',
  },
  {
    id: 5,
    title: 'Surabaya',
  },
];

export const AutocompleteSimpleUsageShowcase = ({navigation}) => {
  const [valueStart, setValueStart] = React.useState(null);
  const [valueEnd, setValueEnd] = React.useState(null);
  const [start, setStart] = React.useState(DATA);
  const [end, setEnd] = React.useState(DATA);
  const [date, setDate] = React.useState(null);

  const CalendarIcon = style => <Icon {...style} name="calendar" />;

  const onSelectStart = ({title}) => {
    setValueStart(title);
  };

  const onSelectEnd = ({title}) => {
    setValueEnd(title);
  };

  const onChangeStart = query => {
    setValueStart(query);
    setStart(
      DATA.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const onChangeEnd = query => {
    setValueEnd(query);
    setEnd(
      DATA.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <Layout style={{flex: 1}}>
      <Layout style={{flex: 1, flexDirection: 'column-reverse'}}>
        <Text style={{alignSelf: 'center', fontSize: 36, paddingTop: 50}}>
          Pilih Jadwal Ticket
        </Text>
      </Layout>
      <Layout level="1" style={{flex: 5, justifyContent: 'center'}}>
        <Text style={{marginVertical: 5, marginHorizontal: 10}}>
          Destinasi Awal
        </Text>
        <Autocomplete
          style={{marginVertical: 5, marginHorizontal: 10}}
          placeholder="Start Station"
          value={valueStart}
          data={start}
          onChangeText={onChangeStart}
          onSelect={onSelectStart}
        />
        <Text style={{marginVertical: 5, marginHorizontal: 10}}>
          Destinasi Akhir
        </Text>
        <Autocomplete
          style={{marginVertical: 5, marginHorizontal: 10}}
          placeholder="Destination"
          value={valueEnd}
          data={end}
          onChangeText={onChangeEnd}
          onSelect={onSelectEnd}
        />
        <Text style={{marginVertical: 5, marginHorizontal: 10}}>
          Pilih Tanggal
        </Text>
        <Datepicker
          style={{marginVertical: 5, marginHorizontal: 10}}
          placeholder="Pick Date"
          date={date}
          onSelect={setDate}
          icon={CalendarIcon}
        />
        <Button
          style={{marginVertical: 15, marginHorizontal: 10}}
          onPress={() => navigation.navigate('Drawer')}>
          Cari Ticket{' '}
        </Button>
      </Layout>
    </Layout>
  );
};

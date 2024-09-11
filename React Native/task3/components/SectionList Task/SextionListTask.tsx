import { SectionList, View, Text, Image } from 'react-native';
import { ContactItem } from './ContactItem';

export const SectionListTask = () => {
  const CONTACTS = [
    {
      id: '01',
      sectionName: 'a',
      data: [
        {
          id: '01',
          name: 'Ahmed Hesham',
        },
        {
          id: '02',
          name: 'Ahmed Khalid',
        },
        {
          id: '03',
          name: 'Abdallah Saeed',
        },
      ],
    },
    {
      id: '02',
      sectionName: 'M',
      data: [
        {
          id: '01',
          name: 'Mahmoud Elmaghraby',
        },
        {
          id: '02',
          name: 'Mohamed Khalid',
        },
        {
          id: '03',
          name: 'Mohanad Emad',
        },
      ],
    },
    {
      id: '03',
      sectionName: 'O',
      data: [
        {
          id: '01',
          name: 'Omar',
        },
        {
          id: '02',
          name: 'Osama Ibrahim',
        },
        {
          id: '03',
          name: 'Omar Fathy',
        },
      ],
    },
  ];
  return (
    <SectionList
      sections={CONTACTS}
      renderSectionHeader={({ section }) => (
        <View style={{ backgroundColor: '#DDDDDD', padding: 14 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {section.sectionName.toUpperCase()}
          </Text>
        </View>
      )}
      SectionSeparatorComponent={() => <View style={{ height: 12 }}></View>}
      ItemSeparatorComponent={() => <View style={{ height: 18 }}></View>}
      renderItem={({ item: data }) => <ContactItem name={data.name} />}
      ListEmptyComponent={
        <Text style={{ textAlign: 'center' }}>Nothing in here.</Text>
      }
    />
  );
};

import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';

export default function LastVisitListScreen() {
  return (
    <View className="flex-1">
      <View style={{backgroundColor: '#f0f0f0', padding: 16}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>My Items</Text>
        <View
          style={{marginTop: 16, flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderRadius: 5,
              padding: 8,
            }}
            placeholder="Search items..."
            keyboardType="default"
          />
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 16}}>
          <Item
            title="Item 1"
            description="This is a description of the first item in the list."
          />
          <Item
            title="Item 2"
            description="This is a description of the second item in the list."
          />
          <Item
            title="Item 3"
            description="This is a description of the third item in the list."
          />
          <Item
            title="Item 4"
            description="This is a description of the fourth item in the list."
          />
          <Item
            title="Item 5"
            description="This is a description of the fifth item in the list."
          />
          <Item
            title="Item 6"
            description="This is a description of the sixth item in the list."
          />
        </View>
      </ScrollView>
    </View>
  );
}

function Item({title, description}) {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
      <View style={{backgroundColor: '#f0f0f0', borderRadius: 5, padding: 12}}>
        {/* Hier können Sie das Icon hinzufügen */}
      </View>
      <View style={{flex: 1, marginLeft: 16}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color: '#666666'}}>{description}</Text>
      </View>
    </View>
  );
}

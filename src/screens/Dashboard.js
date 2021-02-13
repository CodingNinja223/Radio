import React from 'react';
import {Button,Text,View} from 'react-native';
const Dashboard = (props) => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Button title="click" onPress={props.openDrawer}>
            <Text>Hello</Text>
            </Button>
        </View>
    );
  }

  export default Dashboard;

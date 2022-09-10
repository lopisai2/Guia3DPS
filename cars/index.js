import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {Text, View, SafeAreaView, FlatList, StatusBar, StyleSheet, Image} from 'react-native'

//Datos en JSON
const DATA=[
    {
        id:'1',
        title:'Toyota',
        src:require('./src/imgs/toyota.jpg'),
    },
    {
        id:'2',
        title:'Mazda',
        src:require('./src/imgs/mazda.jpg')
    },
    {
        id:'3',
        title:'Mitsubishi',
        src:require('./src/imgs/mitsubishi.jpg')
    },    
];

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight ||0,
    },
    item:{
        backgroundColor:'#f9c2ff',
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        alignItems:'center',
    },
    title:{
        fontSize:32,
    },
    image:{
        width:200,
        height:125,
        borderWidth:2,
        borderColor:'#d35674',
        resizeMode:'contain',
        margin:8,        
    }
});

const Item=({title, img})=>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={img}/>
    </View>
)

const App=()=>{

    const renderItem=({item})=>(
        <Item title={item.title} img={item.src} />
    );

    return(
        <SafeAreaView style={styles.container}>

            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            />
        </SafeAreaView>
    )
}

const textosaludo =() =>{

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>"Hola Mundo"</Text>
        </View>
    )

}
    


AppRegistry.registerComponent("cars", () => App);

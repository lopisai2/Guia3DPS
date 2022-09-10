import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ImageBackground } from 'react-native';


const fondo ='./src/empanadas.jpg';

const DATA = [
 {
 id: '1',
 title: 'Las Pupusas',
 descripcion: 'Las pupusas más populares son las “vueltas” rellenas con chicharrón, queso y frijoles. Todas se acompañan con salsa de tomate natural y encurtido',
 src:require('./src/pupusas.jpg'),
 },
 {
 id: '2',
 title: 'El Atol',
 descripcion: 'Se preparan a base de elotes, semillas de marañón, maíz tostado y piña. El más famoso de todos es el atol shuco.',
 src: require('./src/atol.jpg'),
 },
 {
 id: '3',
 title: 'Las Empanadas',
 descripcion: 'Las empanadas se elaboran con una masa hecha a partir de un puré de plátanos maduros, con la que se hacen tortillas redondeadas y rellenas con frijoles molidos, que luego se fríen en abundante aceite.',
 src:require('./src/empanadas.jpg'),
 },
 {
 id: '4',
 title: 'Los Tamales',
 descripcion: 'Se hacen porciones individuales que se rellenan con carne de cerdo, pato o gallina y salsa de tomate natural.',
 src:require('./src/tamales.jpg'),
 },
 {
 id: '5',
 title: 'Las Canoas',
 descripcion: 'Son platanos que se pelan y se abren por la mitad. En la abertura se coloca la crema de relleno elaborada a partir de maicena, leche, huevos y leche condensada. Se adornan con pasas de uvas y canela espolvoreada.',
 src:require('./src/canoas.jpg'),
 },
 {
 id: '6',
 title: 'Las enchiladas',
 descripcion: 'Con la masa se arman tortillas finas que se fríen en una sartén con bastante aceite. Una vez listas, se dejan reposar y se les coloca encurtido, huevo duro, aguacate, queso rallado y salsa natural de tomates.',
 src:require('./src/enchiladas.jpg'),
 },
{
 id: '7',
 title: 'Panes con Gallina',
 descripcion: 'Se preparan a partir de un pan de harina en forma alargada que se rellena con  lechuga, berro, tomate y pepino. Aunque no forma parte de los ingredientes principales, también puede llevar escabeche.',
 src:require('./src/panesgallina.jpg'),
 },
 {
 id: '8',
 title: 'Los Pastelitos',
 descripcion: 'La base de los pasteles fritos es una masa preparada con maíz a la que se le colocan condimentos y achiote. Su forma es de media luna y se rellenan con carne, pollo o vegetales guisados.',
 src:require('./src/pastelitos.jpg'),
 },
{
 id: '9',
 title: 'Yuca frita o Salchochada',
 descripcion: 'La yuca se acompaña de chicharrones, trozos de cerdo o de las “pescadas”, pequeños peces típicos del país que se preparan fritos.',
 src:require('./src/yuca.jpg'),
 },
{
 id: '10',
 title: 'Las quesadillas',
 descripcion: 'Las quesadillas son un postre que se come en todo El Salvador, un pan horneado con queso, crema y leche, que se acompaña con una taza de café',
 src:require('./src/quesadillas.jpg'),
 },
 ];

 const styles = StyleSheet.create({
  container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0, 
  marginBottom: StatusBar.currentHeight ||0,
  padding:0 
  },
  item: {
  padding: 2,
  marginVertical: 2,
  marginHorizontal: 30, 
  },
  title: { 
  textAlign:'center',
  color: 'white', 
  fontSize:18,
  },
  maxtitle: { 
   textAlign:'center',
   color: 'white', 
   fontSize:24,  
   paddingBottom:25,
   },
  img:{
    width:100,
    height:100,
    borderWidth:2,
    borderColor: 'black',
    resizeMode: 'contain',
    marginLeft:0,    
    borderRadius:50,
    borderColor:'green',
  },
  descripcion: {
   textAlign:'justify',
   fontSize:14,
    fontFamily: 'Arial',   
    color: 'white',
    paddingRight:110,       
  }, //Permite poner la imagen a la par de la descripción
  contenedor:{
    display:'flex',
    flex:1,
    flexDirection:'row',
    margin:0,
    paddingBottom:15,
  }
  
 });

const Item = ({ title, descripcion, img }) => (
  <>
  <Text style={styles.title}>{title}</Text>  
 <View style={styles.contenedor}>   
 <Image style={styles.img} source={img} />
 <Text style={styles.descripcion}>{descripcion}</Text> 
 </View>
 </>
 );
 
export default function App() {
  const renderItem = ({ item }) => ( 
 <Item title={item.title} descripcion={item.descripcion} img={item.src} /> 
 );

 return (
  <> 
  
 <SafeAreaView style={styles.container}>  
 <Text style={styles.maxtitle}> Comidas Típicas Salvadoreñas</Text>
 <View> 
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </View>
 </SafeAreaView> 
 </>
 );
}


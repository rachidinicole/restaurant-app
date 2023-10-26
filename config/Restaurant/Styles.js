import { StyleSheet,Dimensions } from "react-native"
const {width,height}=Dimensions.get('window')

const stylesExt= StyleSheet.create({
bottomContainer:{
    justifyContent:'center',
    height: height / 3,

},
Textinput:{
    height:50,
    borderWidth:1,
    marginHorizontal:20,
    marginVertical:10,
    paddingLeft:10,
    borderRadius:20,
    backgroundColor:'#fff'
}
})

export default stylesExt
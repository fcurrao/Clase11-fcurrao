import { StyleSheet , Text} from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator'; 
import { Provider } from 'react-redux';
import store from './src/Store/store'

export default function App() {

  // const [productSelected, setProductSelected] = useState("")
  // const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  //Acá se manejará el estado para seleccionar una category y un producto
  
  return (
    <Provider store={store}>
    <Navigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
})

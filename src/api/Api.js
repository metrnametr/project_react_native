// import AsyncStorage from '@react-native-community/async-storage';
import ExpoFileSystemStorage from './expo-file-system';

class Api{
  static dataName = '';

  static get = async (key) => {
    try {
      // const res =  await ExpoFileSystemStorage.getItem(key);
      console.log('RES', res)
      // if (res !== null) {
        const data = await ExpoFileSystemStorage.setItem(key, '{}');
        // return await data.json();
      // }
      // const data = await res.json();
      // return data;

    } catch(e) {
      throw Error(e);
    }
  };

  // static set = async (key, id, data) => {
  // const res = await  Api.get(key);
  // const idx = res.findIndex(itm => itm.id === id);
  // const newData = {
  //   ...res,
  // }
  // try {
  //   const data =  await AsyncStorage.getItem(key);
  // } catch(e) {
  //   throw Error('Ошибка');
  // }
  // }
}

export default Api;
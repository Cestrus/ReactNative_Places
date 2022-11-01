import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { GlobalStyles } from '../../styles/globalStyles';
import { IAddFormProps } from './AddForm.props';
import Input from './Input/Input';
import Button from '../Button/Button';
import { CompanyData } from '../../types/companyTypes';
import { formFieldValidation } from '../../utils/formValidation';
import { addNewPlace } from '../../store/placesSlice';
import { AddPlaceNavigationProps } from '../../types/routeTypes';

type FormFieldValueType = {
  value: string;
  isValid: boolean;
};

type StateKeysType = {
  [key: string]: FormFieldValueType;
};

interface IState extends StateKeysType {
  // id?: number;
  name: FormFieldValueType;
  title: FormFieldValueType;
  image: FormFieldValueType;
  city: FormFieldValueType;
  state: FormFieldValueType;
  department: FormFieldValueType;
  address: FormFieldValueType;
  postalCode: FormFieldValueType;
  lat: FormFieldValueType;
  lng: FormFieldValueType;
}

const AddForm: React.FC<IAddFormProps> = () => {
  const navigation = useNavigation<AddPlaceNavigationProps>();
  const dispatch = useDispatch();

  const [newPlace, setNewPlace] = useState<IState>({
    name: {
      value: '',
      isValid: true,
    },
    title: {
      value: '',
      isValid: true,
    },
    image: {
      value: '',
      isValid: true,
    },
    city: {
      value: '',
      isValid: true,
    },
    state: {
      value: '',
      isValid: true,
    },
    department: {
      value: '',
      isValid: true,
    },
    address: {
      value: '',
      isValid: true,
    },
    postalCode: {
      value: '',
      isValid: true,
    },
    lat: {
      value: '',
      isValid: true,
    },
    lng: {
      value: '',
      isValid: true,
    },
  });

  const createNewPlace = (): CompanyData => {
    return {
      id: Date.now() + +Math.random().toFixed(5),
      image: newPlace.image.value.trim(),
      address: {
        address: newPlace.address.value.trim(),
        city: newPlace.city.value.trim(),
        state: newPlace.state.value.trim(),
        postalCode: newPlace.postalCode.value.trim(),
        coordinates: {
          lat: parseFloat(newPlace.lat.value.trim()),
          lng: parseFloat(newPlace.lng.value.trim()),
        },
      },
      department: newPlace.department.value.trim(),
      name: newPlace.name.value.trim(),
      title: newPlace.title.value.trim(),
    };
  };

  // useEffect(() => {
  //   if (placeId) {
  //     const place =

  //     const {
  //       id,
  //       image,
  //       company: {
  //         department,
  //         name,
  //         title,
  //         address: {
  //           address,
  //           city,
  //           postalCode,
  //           state,
  //           coordinates: { lat, lng },
  //         },
  //       },
  //     } = place;
  //     setNewPlace({
  //       name,
  //       title,
  //       image,
  //       city,
  //       state,
  //       department,
  //       address,
  //       postalCode,
  //       lat,
  //       lng,
  //     });
  //   }
  // }, [placeId]);

  const changeTextHandler = (type: string, text: string): void => {
    const chengedField = { ...newPlace[type] };
    chengedField.value = text;
    setNewPlace((prev) => ({ ...prev, [type]: chengedField }));
  };

  const cancelHandler = (): void => {
    navigation.goBack();
  };

  const confirmHandler = (): void => {
    const place: IState = JSON.parse(JSON.stringify(newPlace));
    let isValidForm = true;
    for (const key in place) {
      place[key].isValid = formFieldValidation(key, place[key].value);
      if (!place[key].isValid) {
        isValidForm = false;
      }
    }
    setNewPlace(place);

    if (isValidForm) {
      dispatch(addNewPlace(createNewPlace()));
      Alert.alert('Congratulation!', 'New places is added!');

      navigation.navigate('AllPlaces');
    }
    return;
  };

  return (
    <ScrollView style={styles.container}>
      <Input
        label='Name'
        onChangeText={(text): void => changeTextHandler('name', text)}
        value={newPlace.name.value}
        isValid={newPlace.name.isValid}
      />
      <Input
        label='Title'
        onChangeText={(text): void => changeTextHandler('title', text)}
        value={newPlace.title.value}
        isValid={newPlace.title.isValid}
      />
      <Input
        label='Image URL'
        onChangeText={(text): void => changeTextHandler('image', text)}
        value={newPlace.image.value}
        isValid={newPlace.image.isValid}
      />
      <Input
        label='City'
        onChangeText={(text): void => changeTextHandler('city', text)}
        value={newPlace.city.value}
        isValid={newPlace.city.isValid}
      />
      <Input
        label='State'
        onChangeText={(text): void => changeTextHandler('state', text)}
        value={newPlace.state.value}
        isValid={newPlace.state.isValid}
      />
      <Input
        label='Department'
        onChangeText={(text): void => changeTextHandler('department', text)}
        value={newPlace.department.value}
        isValid={newPlace.department.isValid}
      />
      <Input
        label='Address'
        onChangeText={(text): void => changeTextHandler('address', text)}
        value={newPlace.address.value}
        isValid={newPlace.address.isValid}
      />
      <Input
        label='Postal Code'
        keyboardType='number-pad'
        onChangeText={(text): void => changeTextHandler('postalCode', text)}
        value={newPlace.postalCode.value}
        isValid={newPlace.postalCode.isValid}
      />
      <View style={styles.coordContainer}>
        <Text style={styles.text}>Coordinates</Text>
        <View style={styles.wrapper}>
          <View style={styles.localWrap}>
            <Input
              label='lat'
              keyboardType='number-pad'
              onChangeText={(text): void => changeTextHandler('lat', text)}
              value={newPlace.lat.value}
              isValid={newPlace.lat.isValid}
            />
          </View>
          <View style={styles.localWrap}>
            <Input
              label='lng'
              keyboardType='number-pad'
              onChangeText={(text): void => changeTextHandler('lng', text)}
              value={newPlace.lng.value}
              isValid={newPlace.lng.isValid}
            />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.localWrap}>
          <Button onPress={cancelHandler} style={styles.btn}>
            Cancel
          </Button>
        </View>
        <View style={styles.localWrap}>
          <Button onPress={confirmHandler} style={styles.btn}>
            Confirm
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  container: {},
  coordContainer: {
    paddingHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  wrapper: {
    flex: 2,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.primary100,
  },
  localWrap: {
    flex: 1,
  },
  btn: {
    margin: 20,
    height: 40,
    backgroundColor: GlobalStyles.colors.primary300,
    borderColor: GlobalStyles.colors.primary100,
    borderWidth: 2,
  },
});

// this.image = image;
// this.address = {
//   address,
//   city,
//   state,
//   postalCode,
//   coordinates: {
//     lat,
//     lng,
//   },
// };
// this.department = department;
// this.name = name;
// this.title = title;

// const {
//   id,
//   image,
//   company: {
//     department,
//     name,
//     title,
//     address: {
//       address,
//       city,
//       postalCode,
//       state,
//       coordinates: { lat, lng },
//     },
//   },
// } = user;
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
import ImageSourse from './ImageSourse/ImageSourse';

export type FormFieldValueType = {
  value: string;
  isValid: boolean;
};

type StateKeysType = {
  [key: string]: FormFieldValueType;
};

interface IState extends StateKeysType {
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
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const switchState = {
    isEnable: isSwitchOn,
    setIsEnable: setIsSwitchOn,
  };

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

  const changeTextHandler = (type: string, text: string): void => {
    const chengedField = { ...newPlace[type] };
    chengedField.value = text;
    setNewPlace((prev) => ({ ...prev, [type]: chengedField }));
  };

  const setLocationHandler = (): void => {
    navigation.navigate('Map');
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
      <ImageSourse image={newPlace.image} changeTextHandler={changeTextHandler} switchState={switchState} />
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
      <View style={styles.locationContainer}>
        <Text style={styles.text}>Location</Text>
        <Button
          style={[styles.btn, styles.locationBth, (!newPlace.lat.isValid || !newPlace.lng.isValid) && styles.btnErr]}
          onPress={setLocationHandler}
        >
          Set Location
        </Button>
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
  locationContainer: {
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
  locationBth: {
    alignSelf: 'center',
    width: 120,
    marginTop: 0,
  },
  btnErr: {
    borderColor: GlobalStyles.colors.error100,
  },
});

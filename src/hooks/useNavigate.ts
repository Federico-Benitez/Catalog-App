import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../screens';

export const useAppNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();

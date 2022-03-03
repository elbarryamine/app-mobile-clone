import {extendTheme} from 'native-base';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const fontScale = height / 50;
export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  fontSizes: {
    display: Math.round(fontScale * 1.8),
    header: Math.round(fontScale * 1.4),
    body: Math.round(fontScale * 1.2),
    sub: Math.round(fontScale),
    tiny: Math.round(fontScale * 0.8),
  },
  fontConfig: {
    Raleway: {
      100: {
        normal: 'Raleway-ExtraLight',
        italic: 'Raleway-ExtraLightItalic',
      },
      200: {
        normal: 'Raleway-Light',
        italic: 'Raleway-LightItalic',
      },
      300: {
        normal: 'Raleway-Thin',
        italic: 'Raleway-ThinItalic',
      },
      400: {
        normal: 'Raleway-Medium',
        italic: 'Raleway-MediumItalic',
      },
      500: {
        normal: 'Raleway-Medium',
        italic: 'Raleway-MediumItalic',
      },
      600: {
        normal: 'Raleway-Regular',
        italic: 'Raleway-Italic',
      },
      700: {
        normal: 'Raleway-SemiBold',
        italic: 'Raleway-SemiBoldItalic',
      },
      800: {
        normal: 'Raleway-Bold',
        italic: 'Raleway-BoldItalic',
      },
      900: {
        normal: 'Raleway-ExtraBold',
        italic: 'Raleway-ExtraBoldItalic',
      },
    },
  },
  fonts: {
    rale: 'Raleway',
  },
  colors: {
    primary: '#151D3B',
    secondary: '#D82148',
    textPrimary: '#F0F0F0',
    text: '#000',
    subDarker: '#D1D1D1',
    sub: '#EFEFEF',
  },
  components: {
    Text: {
      defaultProps: {
        fontFamily: 'rale',
        fontSize: 'body',
      },
    },
    Button: {
      defaultProps: {
        background: '#151D3B',
      },
    },
  },
});

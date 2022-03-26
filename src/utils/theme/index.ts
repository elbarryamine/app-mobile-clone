import {extendTheme} from 'native-base';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
let unit: number;
if (height >= width) {
  unit = width / height;
} else {
  unit = height / width;
}
console.log(unit);
const fontScale = unit * 30;
export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  fontSizes: {
    display: Math.round(fontScale * 1.8),
    header: Math.round(fontScale * 1.4),
    body: Math.round(fontScale * 1.2),
    sub: Math.round(fontScale),
    tiny: Math.round(fontScale * 0.8),
    micro: Math.round(fontScale * 0.7),
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
  colors: {},
  components: {
    Heading: {
      defaultProps: {
        fontFamily: 'rale',
        fontSize: 'display',
      },
    },
    Text: {
      defaultProps: {
        fontFamily: 'rale',
        fontSize: 'body',
      },
    },
    Button: {
      defaultProps: {
        background: '#398AB9',
        _pressed: {bg: '', opacity: '0.5'},
      },
    },
  },
});

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
    // QuickSand: {
    //   100: {
    //     normal: 'QuickSand-Light',
    //     italic: 'QuickSand-Light',
    //   },
    //   200: {
    //     normal: 'QuickSand-Light',
    //     italic: 'QuickSand-Light',
    //   },
    //   300: {
    //     normal: 'QuickSand-Meduim',
    //     italic: 'QuickSand-Meduim',
    //   },
    //   400: {
    //     normal: 'QuickSand-Medium',
    //     italic: 'QuickSand-Meduim',
    //   },
    //   500: {
    //     normal: 'QuickSand-Regular',
    //     italic: 'QuickSand-Regular',
    //   },
    //   600: {
    //     normal: 'QuickSand-Regular',
    //     italic: 'QuickSand-Regular',
    //   },
    //   700: {
    //     normal: 'QuickSand-SemiBold',
    //     italic: 'QuickSand-SemiBold',
    //   },
    //   800: {
    //     normal: 'QuickSand-SemiBold',
    //     italic: 'QuickSand-SemiBold',
    //   },
    //   900: {
    //     normal: 'QuickSand-Bold',
    //     italic: 'QuickSand-Bold',
    //   },
    // },
  },
  fonts: {
    rale: 'Raleway',
  },
  colors: {
    background: '#F7F7F7',
    primary: '#398AB9',
    secondary: '#D82148',
    textPrimary: '#F0F0F0',
    text: '#000',
    subDarker: '#D1D1D1',
    sub: '#EFEFEF',
  },
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

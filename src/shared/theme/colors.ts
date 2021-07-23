import headerBrown from '@images/header_brown.png'
import headerPink from '@images/header_pink.png'
import logoBrown from '@images/logo_big.png'
import logoPink from '@images/logo_big_pink.png'
import { ImageURISource } from 'react-native'


/**
 * 
 *
 * @author Jan Hellsten <hellsten@live.com>
 *
 * @copyright Jan Hellsten 2021
 */
export type ThemeType = {
  name: string,
  smallLogo: ImageURISource,
  logo: ImageURISource,
  primary: string,
  secondary: string,
  decorative: string,
  support: string
}

// Adding themes here
export default {
    pink: {
        name: 'Pink',
        smallLogo: headerPink,
        logo: logoPink,
        primary: '#FF7BA3',
        secondary: '#7C4403',
        decorative: '#FCFCFC',
        support: '#FDD2FD'
    },
    mint: {
        name: 'Mint',
        smallLogo: headerBrown,
        logo: logoBrown,
        primary: '#ADFCFF',
        secondary: '#7C4403',
        decorative: '#FDD2FD',
        support: '#BF6CFC'
    },
    darkTheme: {
        name: 'Dark',
        smallLogo: headerPink,
        logo: logoPink,
        primary: '#3d3d3d',
        secondary: '#FF7BA3',
        decorative: '#f7f7f7',
        support: '#3d3d3d'
    },
    lightTheme: {
        name: 'Light',
        smallLogo: headerBrown,
        logo: logoBrown,
        primary: '#ffffff',
        secondary: '#3d3d3d',
        decorative: '#797979',
        support: '#f7f7f7'
    }
}

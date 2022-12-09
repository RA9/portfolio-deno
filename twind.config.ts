import { Options } from "$fresh/plugins/twind.ts";
import * as colors from 'twind/colors';


export default {
  selfURL: import.meta.url,
  setup: {
    theme: {
      colors: {
        yellow: colors.yellow,
        transparent: 'transparent',
      },
     extend: {
			screens: {
				'xs': '400px'
			},
			//   colors: {
			//     transparent: 'transparent',
			//     current: 'currentColor',
			//     indigo: colors.amber
			//   }
			colors: {
				sky: colors.sky,
				teal: colors.teal,
				indigo: colors.yellow
			}
		}
    },
  },
} as Options;

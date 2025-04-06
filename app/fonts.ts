import localFont from 'next/font/local'

// Define the Barlow font
export const barlow = localFont({
  src: [
    {
      path: '../fonts/Barlow-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Barlow-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Barlow-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-barlow',
  display: 'swap',
})

// Define the Gloock font
export const gloock = localFont({
  src: '../fonts/Gloock-Regular.ttf',
  variable: '--font-gloock',
  display: 'swap',
})
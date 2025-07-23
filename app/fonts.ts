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

// Define the Kameron font
export const kameron = localFont({
  src: '../fonts/Kameron-SemiBold.ttf',
  variable: '--font-kameron',
  display: 'swap',
})
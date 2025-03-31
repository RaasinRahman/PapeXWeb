import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  // Use a simple colored square as the favicon
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ff9933',
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        P
      </div>
    ),
    size
  );
} 
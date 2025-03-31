import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PapeX - Digital Receipts Revolutionized';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#d0e4f4',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 80,
              color: '#0a3d62',
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            PapeX
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#ff9933',
              textAlign: 'center',
            }}
          >
            Digital Receipts Revolutionized
          </div>
        </div>
      </div>
    ),
    size
  );
} 
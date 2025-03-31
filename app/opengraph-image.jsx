import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
        }}
      >
        <img
          src="https://papex.app/icons/Orange Primary/Orange-Navy.png"
          alt="PapeX Logo"
          width={200}
          height={200}
        />
        <div
          style={{
            fontSize: 60,
            marginLeft: 20,
            color: '#0a3d62',
            fontWeight: 'bold',
          }}
        >
          PapeX
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 
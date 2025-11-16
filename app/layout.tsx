import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Watch Editorial | Upscale Lounge',
  description:
    'Premium product editorial style: luxury watch on marble beside crystal whiskey glass, warm cinematic lighting.',
  openGraph: {
    title: 'Luxury Watch Editorial | Upscale Lounge',
    description:
      'Luxury watch on marble table beside a crystal glass of whiskey. Warm cinematic lighting, macro look.',
    url: 'https://agentic-c86801a6.vercel.app',
    siteName: 'Agentic Showcase',
    images: [
      {
        url:
          'https://source.unsplash.com/1600x900/?luxury%20watch,whiskey,marble%20table,macro,cinematic',
        width: 1600,
        height: 900
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Watch Editorial | Upscale Lounge',
    description:
      'Luxury watch on marble beside whiskey. Premium editorial style, macro, cinematic.',
    images: [
      'https://source.unsplash.com/1600x900/?luxury%20watch,whiskey,marble%20table,macro,cinematic'
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

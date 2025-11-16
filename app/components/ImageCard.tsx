"use client";
import Image from 'next/image';
import { useMemo, useState } from 'react';

const QUERY = encodeURIComponent(
  'luxury watch, whiskey, marble table, macro, cinematic, premium product editorial, polished metal, amber reflections, upscale lounge'
);

export default function ImageCard() {
  const [nonce, setNonce] = useState(0);

  const src = useMemo(
    () => `https://source.unsplash.com/1600x900/?${QUERY}&sig=${nonce}`,
    [nonce]
  );

  return (
    <div className="card" role="figure" aria-label="Luxury watch editorial photograph">
      <div className="header">
        <h1>Luxury Watch ? Editorial</h1>
        <div className="sub">Warm cinematic lighting ? Macro feel</div>
      </div>
      <div className="media">
        {/* We use a plain img to ensure Unsplash random works without optimization constraints */}
        <img
          src={src}
          alt="Luxury watch angled on marble beside a crystal glass of whiskey"
          className="img"
          loading="eager"
        />
      </div>
      <div className="footer">
        <button className="btn" onClick={() => setNonce((n) => n + 1)}>
          Refresh look
        </button>
        <div className="caption">
          Photograph of a luxury watch angled slightly on a marble table beside a
          crystal glass of whiskey, polished metal and amber reflections, premium
          editorial style, warm cinematic lighting, medium format macro look.
        </div>
        <div className="credit">
          Source via <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>
        </div>
      </div>
    </div>
  );
}

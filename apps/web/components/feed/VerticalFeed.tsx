"use client";

import { useMemo } from "react";

const MOCK_VIDEOS = ["v1", "v2", "v3"];

export function VerticalFeed() {
  const videos = useMemo(() => MOCK_VIDEOS, []);

  return (
    <section className="snap-y snap-mandatory h-screen overflow-y-auto">
      {videos.map((id) => (
        <article key={id} className="snap-start h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <p className="text-sm opacity-70">9:16 Video Slot</p>
            <h2 className="text-xl font-semibold">Video {id}</h2>
          </div>
        </article>
      ))}
    </section>
  );
}

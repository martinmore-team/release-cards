import React from "react";

export const ReleaseTitle = ({ version }: { version: string }) => (
  <h1 className="font-bold text-6xl mb-8">
    <span className="underline">PruebaGHA {version} release</span> 🆕
  </h1>
);

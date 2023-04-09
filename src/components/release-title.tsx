import React from "react";

export const ReleaseTitle = ({ 
  version,
  repoName,
}: { 
  version: string;
  repoName: string;
}) => (
  <h1 className="font-bold text-6xl mb-8">
    <span className="underline">{repoName} {version} release</span> 🆕
  </h1>
);

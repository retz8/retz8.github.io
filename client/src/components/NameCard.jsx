import React from "react";

export default function NameCard({ header, subHeader, description }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-5xl font-bold">{header}</h1>
      <h2 className="text-xl">{subHeader}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

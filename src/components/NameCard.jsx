import React from "react";

export default function NameCard() {
  return (
    <div className="flex flex-col items-start gap-2 bg-pink-300">
      <h1 className="text-5xl font-bold">Jioh In</h1>
      <h2 className="text-xl">Software Engineer</h2>
      <p className="text-muted-foreground">
        some short description about me...
      </p>
    </div>
  );
}

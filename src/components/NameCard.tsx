interface NameCardProps {
  header: string;
  subHeader?: string;
  description?: string;
}

export default function NameCard({
  header,
  subHeader,
  description,
}: NameCardProps) {
  return (
    <div className="flex flex-col items-start gap-2 text-left">
      <h1 className="text-5xl font-bold">{header}</h1>
      {subHeader && <h2 className="text-xl font-semibold">{subHeader}</h2>}
      {description && (
        <p className="text-muted-foreground text-sm font-normal">
          {description}
        </p>
      )}
    </div>
  );
}

interface NameCardProps {
  header: string;
  subHeader: string;
  description: string;
}

export default function NameCard({
  header,
  subHeader,
  description,
}: NameCardProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-5xl font-bold">{header}</h1>
      <h2 className="text-xl font-semibold">{subHeader}</h2>
      <p className="text-muted-foreground text-sm font-semibold">
        {description}
      </p>
    </div>
  );
}

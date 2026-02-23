interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col text-center bg-brand-secondary text-brand-primary py-4 px-6 lg:px-16">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-brand-secondary-foreground font-semibold text-lg">
        {subtitle}
      </span>
    </div>
  );
}

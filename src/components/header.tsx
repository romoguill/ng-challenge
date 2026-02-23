import { NgLogo } from "./ng-logo";

export function Header() {
  return (
    <header className="py-4 px-6 lg:px-16 bg-brand-primary text-brand-primary-foreground h-24 flex items-center">
      <NgLogo size={100} />
    </header>
  );
}

import type { PropsWithChildren } from "react";

export function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 flex flex-col">
      {children}
    </div>
  );
}

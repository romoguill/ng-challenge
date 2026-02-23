import type { PropsWithChildren } from "react";

export function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col pt-8 pb-16">
      {children}
    </div>
  );
}

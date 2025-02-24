import { ReactNode } from "react";

const MarginBox = ({ children }: { children: ReactNode }) => {
  return (
    <section className="border border-x-slate-200 border-y-0 mx-16 md:mx-8 sm:mx-0">
      {children}
    </section>
  );
};

export default MarginBox;

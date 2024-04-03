import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <div className="mx-2  bg-slate-50 lg:mx-8">
      <div className="h-screen w-full rounded-xl border border-neutral-400 p-8">
        {children}
      </div>
    </div>
  );
}

import { ReactNode } from 'react';

export default function QuizHeader({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 border-b border-gray-200">
      <div className="flex items-center justify-between">{children}</div>
    </div>
  );
}

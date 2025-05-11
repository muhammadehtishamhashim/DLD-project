import { Sparkles } from "lucide-react";

export default function SmallTitle() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium mb-8 shadow-sm">
      <Sparkles className="h-4 w-4 text-rose-500" />
      <span>Welcome to FG-Pro</span>
    </div>
  );
}

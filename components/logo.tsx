import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link href={"/"}>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-1">
                  <GraduationCap/>
                </div>
                <span className="font-bold text-xl">FG<span className="text-red-600">-</span><span className="text-blue-600">Pro</span></span>
              </div>
            </Link>
  );
}
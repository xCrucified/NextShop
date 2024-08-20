'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { useCategoryStore } from "../../../store/category";

interface Props {
  className?: string;
};

interface CategProps{
  id: number,
  title: string,
}

const categs: CategProps[] = [
  { id: 1, title: 'clothes' },
  { id: 2, title: 'shoes' },
  { id: 3, title: 'accessories' },
  { id: 4, title: 'collections' }
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categs.map(({ title, id }, index) => (
        <a href={`/#${title}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={index}>
          <button type="button">{title}</button>
        </a>
      ))}
    </div>
  );
};
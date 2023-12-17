import * as React from 'react'

import { ScrollArea, ScrollBar } from '@/components/_shadcn/ui/scroll-area'

export interface Artwork {
  name: string
  figure: string
}

export const categories: Artwork[] = [
  {
    name: 'Other',
    figure:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Food',
    figure:
      'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Healthcare',
    figure:
      'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Education',
    figure:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Household',
    figure:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Transport',
    figure:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Entertainment',
    figure:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Shopping',
    figure:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
]

export function CategorySelector() {
  return (
    <div className="my-4 space-y-2 text-center">
      <span className="text-xs">Categories</span>
      <ScrollArea className="mx-auto w-96 whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4">
          {categories.map((category) => (
            <figure key={category.name} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={category.figure}
                  alt={`Photo by ${category.name}`}
                  className="mx-auto aspect-square w-24 rounded-md object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                {category.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

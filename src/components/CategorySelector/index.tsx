'use client'
import * as React from 'react'

import { ScrollArea, ScrollBar } from '@/components/_shadcn/ui/scroll-area'
import { useState } from 'react'
import { categories } from './categoriesArray'

export function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState('Other')

  return (
    <div className="my-4 space-y-2 text-center">
      <span className="text-xs">Categories</span>
      <ScrollArea className="mx-auto whitespace-nowrap rounded-md px-2">
        <div className="mx-auto flex w-max space-x-4">
          {categories.map((category) => (
            <figure
              key={category.name}
              className="shrink-0"
              onClick={() => setSelectedCategory(category.name)}
            >
              <div
                className={`
                ${
                  selectedCategory === category.name
                    ? 'border-2 border-white'
                    : ''
                }
                mx-auto grid aspect-square w-14 place-content-center rounded-md bg-white/10 p-2
              `}
              >
                <category.icon />
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

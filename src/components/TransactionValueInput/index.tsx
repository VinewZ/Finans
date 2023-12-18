'use client'
import { Input } from '@/components/_shadcn/ui/input'
import { useState } from 'react'

export function TransactionValueInput() {
  const [inputValue, setInputValue] = useState<undefined | number>()

  return (
    <div className="mt-8 flex items-center justify-end border-b text-3xl font-bold">
      <span className="text-white">$</span>
      <Input
        className="border-none text-3xl placeholder:text-white/20"
        placeholder="0,00"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
    </div>
  )
}

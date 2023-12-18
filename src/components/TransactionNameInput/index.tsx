'use client'
import { Input } from '@/components/_shadcn/ui/input'
import { useState } from 'react'

export function TransactionNameInput() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="mt-2 flex items-center justify-end border-b border-white/20 text-3xl font-bold">
      <Input
        className="border-none text-right text-xl placeholder:text-white/20"
        placeholder="Transaction name"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  )
}

'use client'
import { Input } from '@/components/_shadcn/ui/input'
import { ChangeEvent, useState } from 'react'

export function TransactionValueInput() {
  const [inputValue, setInputValue] = useState<undefined | number>()
  const [inputWidth, setInputWidth] = useState('1ch')

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value =
      e.target.value.trim() !== '' ? Number(e.target.value) : undefined
    const width =
      value?.toString() === undefined
        ? '1ch'
        : value.toString().length + 1 + 'ch'

    setInputValue(value)
    setInputWidth(width)
  }

  return (
    <div className="mt-8 flex items-center justify-end border-b border-white/20 pr-2 text-3xl font-bold">
      <span
        className={`${
          inputValue?.toString() !== undefined &&
          inputValue?.toString().length > 0
            ? 'text-white'
            : 'text-white/20'
        } pr-2`}
      >
        $
      </span>
      <Input
        className="max-w-[90%] border-none p-0 text-right text-3xl placeholder:text-white/20"
        placeholder="0"
        type="number"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        style={{ width: inputWidth }}
        disabled
      />
    </div>
  )
}

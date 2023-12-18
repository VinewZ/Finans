'use client'
import { transactionValueAtom } from '@/atoms/TransactionValue'
import { Input } from '@/components/_shadcn/ui/input'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

export function TransactionValueInput() {
  const [transactionValue] = useAtom(transactionValueAtom)
  const [inputWidth, setInputWidth] = useState('1ch')

  function handleInputChange() {
    const value = transactionValue || ''
    const width = value.length + 'ch' || '1ch'

    if (value.length > 0) {
      setInputWidth(width)
    }
  }

  useEffect(() => {
    handleInputChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionValue])

  return (
    <div className="mt-8 flex items-center justify-end border-b border-white/20 pr-2 text-3xl font-bold">
      <span
        className={`${
          transactionValue.length > 0
            ? '-mr-1 text-white'
            : 'mr-0 text-white/20'
        } pr-2`}
      >
        $
      </span>
      <Input
        className={`
          ${transactionValue.length > 0 ? 'text-white' : 'text-white/20'}
          max-w-[90%] border-none p-0 text-right text-3xl disabled:opacity-100`}
        placeholder="0"
        type="text"
        value={transactionValue}
        style={{ width: inputWidth }}
        disabled
      />
    </div>
  )
}

'use client'
import { Check, Delete } from 'lucide-react'
import { Button } from '../_shadcn/ui/button'
import { useAtom } from 'jotai'
import { transactionValueAtom } from '@/atoms/TransactionValue'

export function NumPad() {
  const [transactionValue, setTransactionValue] = useAtom(transactionValueAtom)

  function handleTransactionChange(value: string) {
    switch (value) {
      case 'delete':
        transactionValue.length > 0 &&
          setTransactionValue(transactionValue.slice(0, -1))
        break

      case 'sum':
        console.log('sum')
        break

      case 'comma':
        if (transactionValue.includes(',')) return
        setTransactionValue(transactionValue + ',')
        break

      default:
        if (transactionValue.split(',')[1]?.length === 2) return
        transactionValue === ''
          ? setTransactionValue(value)
          : setTransactionValue(transactionValue + value)
        break
    }
  }

  return (
    <div className="mx-auto my-4 grid max-w-sm grid-cols-4 grid-rows-4 space-y-2">
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('7')}
      >
        7
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('8')}
      >
        8
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('9')}
      >
        9
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('delete')}
      >
        <Delete />
      </Button>

      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('4')}
      >
        4
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('5')}
      >
        5
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('6')}
      >
        6
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('sum')}
      >
        +
      </Button>

      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('1')}
      >
        1
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('2')}
      >
        2
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('3')}
      >
        3
      </Button>

      <Button className="row-span-2 mx-auto h-40 w-20 rounded-full bg-emerald-900 text-2xl font-bold">
        <Check />
      </Button>
      <Button
        className="col-span-2 mx-auto h-20 w-full rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('0')}
      >
        0
      </Button>
      <Button
        className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold"
        onClick={() => handleTransactionChange('comma')}
      >
        ,
      </Button>
    </div>
  )
}

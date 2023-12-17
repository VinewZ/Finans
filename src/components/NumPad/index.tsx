import { Check, Delete } from 'lucide-react'
import { Button } from '../_shadcn/ui/button'

export function NumPad() {
  return (
    <div className="mx-auto my-4 grid max-w-sm grid-cols-4 grid-rows-4 space-y-2">
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        7
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        8
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        9
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        <Delete />
      </Button>

      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        4
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        5
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        6
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        +
      </Button>

      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        1
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        2
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        3
      </Button>

      <Button className="row-span-2 mx-auto h-40 w-20 rounded-full bg-emerald-900 text-2xl font-bold">
        <Check />
      </Button>
      <Button className="col-span-2 mx-auto h-20 w-full rounded-full bg-gray-700 text-2xl font-bold">
        0
      </Button>
      <Button className="mx-auto h-20 w-20 rounded-full bg-gray-700 text-2xl font-bold">
        ,
      </Button>
    </div>
  )
}

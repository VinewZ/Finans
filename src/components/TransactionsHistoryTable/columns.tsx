'use client'

import { Database } from '@/lib/supabase/Database'
import { createColumnHelper } from '@tanstack/react-table'

const columnHelper =
  createColumnHelper<
    Database['public']['Tables']['Transactions History']['Row']
  >()

export const columns = [
  columnHelper.accessor('date', {
    header: () => <span>Date</span>,
    cell: (props) => (
      <div className="flex flex-col gap-2">
        <span>
          {new Date(props.getValue()).toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
        <sub className="capitalize">{props.row.original.type}</sub>
      </div>
    ),
  }),
  columnHelper.accessor('amount', {
    header: 'amount',
    cell: (props) => (
      <div className="flex flex-col gap-2">
        <span>$ {props.getValue().toLocaleString()}</span>

        {/* TODO: Change type for category - Needs to update DB first */}
        <sub className="capitalize">{props.row.original.type}</sub>
      </div>
    ),
  }),
]

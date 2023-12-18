import { NavigationMenu } from '@/components/NavigationMenu'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { TransactionsHistoryTable } from '@/components/TransactionsHistoryTable'
import { columns } from '@/components/TransactionsHistoryTable/columns'
import { Database } from '@/lib/supabase/Database'
import { supabaseClient } from '@/lib/supabase/supabaseClient'

async function getData(): Promise<
  Database['public']['Tables']['Transactions History']['Row'][]
> {
  const { data, error } = await supabaseClient
    .from('Transactions History')
    .select('*')

  if (error) throw new Error(error.message)

  console.log(data)

  return data
}

export default async function History() {
  const data = await getData()

  return (
    <main>
      <ThemeSwitcher />
      <TransactionsHistoryTable columns={columns} data={data} />
      <NavigationMenu />
    </main>
  )
}

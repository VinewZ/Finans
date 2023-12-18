import { CategorySelector } from '@/components/CategorySelector'
import { TransactionValueInput } from '@/components/TransactionValueInput'
import { TransactionNameInput } from '@/components/TransactionNameInput'
import { Header } from '@/components/Header'
import { NumPad } from '@/components/NumPad'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Header />
      <TransactionValueInput />
      <TransactionNameInput />
      <CategorySelector />
      <NumPad />
    </main>
  )
}

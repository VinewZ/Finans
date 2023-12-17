import { Header } from '@/components/Header'
import { NumPad } from '@/components/NumPad'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Header />
      <NumPad />
    </main>
  )
}

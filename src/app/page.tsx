import { Header } from '@/components/Header'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Header />
    </main>
  )
}

export function Header() {
  return (
    <header className="space-y-2">
      <div className="text-center">
        <sup>Your balance is</sup>
        <p className="text-4xl font-bold">$ 500,00</p>
      </div>
      <div className="text-center">
        <sub>
          You can spend <span className="font-bold">$16,13/day</span> for the
          next <span className="font-bold">31 days</span>
        </sub>
      </div>
    </header>
  )
}

import "./globals.css"
import { Login } from "./login/login"

export default function Home() {
  return (
    <div className="h-full h-max w-full bg-zinc-100 px-8 py-8">
      <Login />
    </div>
  )
}

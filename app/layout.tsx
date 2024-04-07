import './globals.css'
import { Fira_Sans } from 'next/font/google'
import { NavBar } from '@/app/components/NavBar'
import Link from 'next/link'

const fira = Fira_Sans({ subsets: ['latin'], weight: "400", display: "swap" })

export const metadata = {
  title: {
    default: 'CraftTogetherMC',
    template: '%s | CraftTogetherMC',
  },
  keywords: 'minecraft server vanilla freebuild survival citybuild craft together creeper mobspawn redstone craft attack',
  description: 'CraftTogetherMC ist ein gemütlicher, aufstrebender Minecraft-Server und richtet sich an Freunde des originalgetreuen Minecraft. Gespielt wird \'Survival\' im Freebuild! Es gibt bei uns keine Plots, Claims oder Grundstücke. Der perfekte Server für CraftAttack-Fans.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>

        <NavBar/>

        {children}

        <section id={'footer'} className={`flex flex-col mt-5`}>
          <div className={`relative h-52 left-0 right-0 bg-gradient-to-b from-transparent to-neutral-950`}></div>

          <div className={`relative flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-neutral-950 text-sm text-neutral-300 p-10 pt-16`}>

            <div>
              <p><b><Link href={"/"}>CraftTogetherMC</Link></b> – Freebuild mit Vanilla-Feeling</p>
              <p className={`text-neutral-400`}>We are not affiliated with or endorsed by <Link target="_blank" href={"https://www.minecraft.net/de-de"}>Mojang, AB</Link>.</p>
              <small><Link target="_blank" href="https://cedrik.me">Created with ❤ by Ceddix!</Link></small>
            </div>

            <div>
              <p>
                <Link href={"/impressum"}>Impressum</Link> | <Link href={"/datenschutz"}>Datenschutz</Link>
              </p>
            </div>

          </div>
        </section>

      </body>
    </html>
  )
}

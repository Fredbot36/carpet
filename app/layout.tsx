import './globals.css'
import { Fira_Sans } from 'next/font/google'

const fira = Fira_Sans({ subsets: ['latin'], weight: "400" })

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
      <body className={fira.className}>{children}</body>
    </html>
  )
}

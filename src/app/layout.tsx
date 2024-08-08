import 'highlight.js/styles/github-dark.css'
import type {Metadata} from 'next'

import Root from '@/components/Root'

import './globals.css'

export const metadata: Metadata = {
  title: 'MarkBot',
  description: 'Simple Chat App integrated with OpenAI to Answer Questions as Mark Raspopov',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <Root>{children}</Root>
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

export default function CookiesPage() {
  const filePath = path.join(process.cwd(), 'app/legal/cookies/content.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-gray-800 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            ← BUYEASY
          </Link>
        </div>
      </nav>
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-p:text-justify prose-strong:text-white prose-li:text-gray-400 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline prose-a:transition-colors">
          <h1 className="text-4xl font-bold text-white mb-2">{data.title}</h1>
          {data.lastUpdated && (
            <p className="text-sm text-gray-500 mb-8">Last updated: {data.lastUpdated}</p>
          )}
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
    </div>
  )
}

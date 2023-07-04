import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <header className='flex gap-1 justify-between items-center'>
      <h1 className='text-2xl'>Todo</h1>
      <Link className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none' href={'/new'}>New</Link>
    </header>
  )
}

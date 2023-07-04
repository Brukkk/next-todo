import { TodoItem } from '@/components/TodoItem'
import { prisma } from '@/db'
import Link from 'next/link'

async function toggleTodo(id: string, complete: boolean){
  "use server"
  await prisma.todo.update({ where: { id }, data: { complete }})
}

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await getTodos()
  return (
    <>
      <header className='flex gap-1 justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todo</h1>
        <Link className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none' href={'/new'}>New</Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>

  )
}

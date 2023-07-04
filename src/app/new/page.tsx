import Link from "next/link";

export default function Page() {
    return(
        <>
            <h1 className='text-2xl mb-4'>New</h1>
            <form className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="title"
                    className="border bg-transparent border-slate-300 rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
                <div className="flex gap-2 justify-end">
                    <Link className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none' href="..">Cancel</Link>
                    <button className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none' type="submit">Create</button>
                </div>
            </form>
        </>
    )
}
export default function Events() {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
                Eventos Diários
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                    <h3 className="text-yellow-400 font-bold">Arena Boss</h3>
                    <p className="text-zinc-400">21:00</p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                    <h3 className="text-yellow-400 font-bold">Arena PvP</h3>
                    <p className="text-zinc-400">11:30 e 21:30</p>
                </div>
            </div>
        </section>
    )
}

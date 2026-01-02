export default function ArenaBoss() {
    return (
        <section className="mt-16">
            <h2 className="text-xl font-semibold mb-6">
                Arena Boss
            </h2>

            <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-6 space-y-4">
                {/* DESCRIÇÃO */}
                <p className="text-zinc-300">
                    Prepare-se para enfrentar os temíveis bosses que dominam esta arena.
                </p>

                <p className="text-sm text-red-400 font-semibold">
                    Cada player poderá entrar com apenas 1 personagem no evento.
                </p>

                {/* HORÁRIO */}
                <div className="text-sm text-zinc-300">
                    ⏰ <span className="font-semibold">Horário:</span> 21:00 (todos os dias)
                </div>

                {/* RECOMPENSAS */}
                <div className="text-sm text-zinc-300">
                    🎁 <span className="font-semibold">Recompensas:</span>{' '}
                    Essências, Fragmentos, Caixa da Arena
                </div>

                {/* DROP */}
                <div className="text-sm text-yellow-400 font-semibold">
                    DROP ÉPICO: Cinto HGG
                </div>

                <p className="text-xs text-zinc-400">
                    O cinto pode ser obtido ao abrir a Caixa da Arena.
                </p>

                {/* AGENDA DA SEMANA */}
                <div className="pt-4">
                    <h3 className="text-sm font-semibold text-zinc-200 mb-3">
                        Eventos da Semana
                    </h3>

                    <div className="grid grid-cols-7 gap-2 text-center text-xs">
                        {[
                            'Seg',
                            'Ter',
                            'Qua',
                            'Qui',
                            'Sex',
                            'Sáb',
                            'Dom',
                        ].map(day => (
                            <div
                                key={day}
                                className="bg-zinc-800 border border-zinc-700 rounded-lg py-2"
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

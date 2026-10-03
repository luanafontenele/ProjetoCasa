import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">

      <header className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md rounded-2xl mt-4 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2">
          {/* Espaço para o Logo C.A.S.A */}
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-wide">C.A.S.A</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#projeto" className="hover:text-blue-600 transition-colors">Projeto</a>
          <a href="#equipe" className="hover:text-blue-600 transition-colors">Equipe</a>
          <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            href="/dashboard"
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md hover:shadow-lg shadow-blue-500/20"
          >
            Entrar 
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 flex flex-col gap-16">

          <section 
            className="w-full h-80 rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, #F5AC46 0%, #6586F3 52%, #4D66B8 88%, #3B4E8D 100%)'
            }}
          >
            <div className="text-center text-white p-6">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-sm">
                Marketing / Banner Principal
              </h1>
              <p className="text-white/90 font-medium max-w-lg mx-auto drop-shadow-sm">
                Espaço reservado para a chamada principal do sistema C.A.S.A.
              </p>
            </div>
          </section>

        <section id="sobre" className="flex flex-col items-center text-center gap-8 py-4">
          <h2 className="text-2xl font-bold text-slate-900">Sobre o Projeto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="h-48 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">Box 1</div>
              <p className="text-sm text-slate-500">Detalhe / Recurso 1</p>
            </div>

            <div className="h-48 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">Box 2</div>
              <p className="text-sm text-slate-500">Detalhe / Recurso 2</p>
            </div>

            <div className="h-48 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">Box 3</div>
              <p className="text-sm text-slate-500">Detalhe / Recurso 3</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        <section id="projeto" className="flex flex-col items-center text-center gap-8">
          <h2 className="text-2xl font-bold text-slate-900">Carousel do Projeto + Botão de Download</h2>
          
          <div className="w-full max-w-xl h-64 bg-slate-200/70 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-4 p-6">
            <span className="text-slate-500 font-medium">Área de Exibição do Carousel / Imagens</span>
            <button className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all shadow-md">
              Baixar App / Documentação
            </button>
          </div>
        </section>

        <hr className="border-slate-200" />

        <section id="equipe" className="flex flex-col items-center text-center gap-8">
          <h2 className="text-2xl font-bold text-slate-900">Carousel da Equipe</h2>
          
          <div className="flex items-center justify-center gap-6 w-full max-w-3xl">
            <div className="w-1/4 h-36 bg-slate-200/60 rounded-2xl flex items-center justify-center text-slate-400 text-sm">Membro 1</div>
            <div className="w-1/3 h-48 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-500 font-semibold shadow-sm">Membro Principal</div>
            <div className="w-1/4 h-36 bg-slate-200/60 rounded-2xl flex items-center justify-center text-slate-400 text-sm">Membro 2</div>
          </div>
        </section>

        <hr className="border-slate-200" />

        <section id="contato" className="flex flex-col items-center text-center gap-8 pb-8">
          <h2 className="text-2xl font-bold text-slate-900">Contato</h2>
          
          <div className="w-full max-w-lg h-56 bg-slate-200/80 rounded-2xl flex items-center justify-center text-slate-500 border border-slate-300/60">
            Formulário de Contato / Informações
          </div>
        </section>

      </main>

      <footer className="w-full bg-slate-200/70 border-t border-slate-300 py-10 text-center text-slate-600 text-sm font-medium">
        Rodapé Informativo • Projeto C.A.S.A
      </footer>

    </div>
  );
}
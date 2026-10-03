'use client';

import { 
  Home, 
  Grid, 
  BarChart2, 
  History, 
  Settings, 
  Bell, 
  Cpu, 
  Info, 
  Power, 
  LogOut,
  ChevronDown 
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex font-sans">
      
      {/* 1. SIDEBAR LATERAL */}
      <aside className="w-64 bg-white border-r border-slate-100 p-6 flex flex-col justify-between min-h-screen shadow-sm">
        <div className="flex flex-col gap-8">
          
          {/* Logo C.A.S.A */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#5F7DE3]/10 flex items-center justify-center text-[#5F7DE3] font-bold text-lg border border-[#5F7DE3]/20">
              🏠
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-tight">C.A.S.A</span>
            </div>
          </div>

          {/* Menu de Navegação */}
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#5F7DE3] text-white font-medium text-sm shadow-md shadow-[#5F7DE3]/25 transition-all">
              <Home className="w-5 h-5" />
              Início
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all">
              <Grid className="w-5 h-5" />
              Categorias
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all">
              <BarChart2 className="w-5 h-5" />
              Desempenho
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all">
              <History className="w-5 h-5" />
              Histórico
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all">
              <Settings className="w-5 h-5" />
              Configurações
            </button>
          </nav>
        </div>

        {/* Perfil do Utilizador & Botão Desconectar */}
        <div className="flex flex-col gap-3 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#5F7DE3] text-white flex items-center justify-center font-bold text-sm">
                Z
              </div>
              <span className="font-semibold text-sm text-slate-700">Zeus Alves</span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>

          <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-500 hover:bg-slate-600 text-white text-xs font-semibold transition-all shadow-sm">
            <LogOut className="w-4 h-4" />
            Desconectar
          </button>
        </div>
      </aside>

      {/* 2. CONTEÚDO PRINCIPAL DA DASHBOARD */}
      <main className="flex-1 p-8 flex flex-col gap-8 max-w-6xl mx-auto">
        
        {/* Cabeçalho Superior (Sino de Notificação) */}
        <div className="flex justify-end items-center">
          <button className="p-2.5 rounded-2xl bg-white border border-slate-100 text-[#5F7DE3] hover:bg-slate-50 transition-all shadow-sm relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400"></span>
          </button>
        </div>

        {/* Banner do Utilizador ("Olá, Zeus!") */}
        <section 
          className="w-full h-44 rounded-3xl p-8 flex flex-col justify-center text-white shadow-lg relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #F5AC46 0%, #6586F3 52%, #4D66B8 88%, #3B4E8D 100%)'
          }}
        >
          <h1 className="text-3xl font-extrabold mb-2 drop-shadow-sm">Olá, Zeus!</h1>
          <p className="text-white/90 font-normal text-sm max-w-md drop-shadow-sm">
            Personalize o seu dispositivo C.A.S.A ao seu estilo e acompanhe tudo em tempo real.
          </p>
        </section>

        {/* Secção Visão Geral */}
        <section className="flex flex-col gap-4">
          <h2 className="text-center font-bold text-slate-700 text-lg">Visão Geral</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Dispositivos Conectados */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-600 font-semibold text-xs">
                <Cpu className="w-4 h-4 text-slate-400" />
                Dispositivos Conectados
              </div>
              
              <div className="flex flex-col items-center gap-1 my-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  ESP32
                </div>
                <span className="text-[11px] text-slate-400">Conectado com ESP32</span>
              </div>

              <button className="w-full py-2 rounded-xl bg-[#5F7DE3] hover:bg-[#4d6bd3] text-white text-xs font-semibold transition-all shadow-sm">
                Mais Detalhes
              </button>
            </div>

            {/* Card 2: Informações Gerais */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-600 font-semibold text-xs">
                <Info className="w-4 h-4 text-slate-400" />
                Informações Gerais
              </div>

              <div className="flex flex-col items-center gap-1 my-2">
                <span className="text-xs text-slate-700 font-bold">100%</span>
                <span className="text-[11px] text-slate-400">Conectado com rede_1</span>
              </div>

              <button className="w-full py-2 rounded-xl bg-[#5F7DE3] hover:bg-[#4d6bd3] text-white text-xs font-semibold transition-all shadow-sm">
                Mais Detalhes
              </button>
            </div>

            {/* Card 3: Último Acionamento */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-600 font-semibold text-xs">
                <Power className="w-4 h-4 text-slate-400" />
                Último Acionamento de Botão
              </div>

              <div className="flex flex-col items-center gap-1 my-2">
                <span className="text-xs text-slate-700 font-medium">Botão 2: Beber água</span>
                <span className="text-[11px] text-slate-400">Tempo: 20:30</span>
              </div>

              <button className="w-full py-2 rounded-xl bg-[#5F7DE3] hover:bg-[#4d6bd3] text-white text-xs font-semibold transition-all shadow-sm">
                Ver mais
              </button>
            </div>

          </div>
        </section>

        {/* Secção Feedback */}
        <section className="flex flex-col gap-3 mt-2">
          <h3 className="font-bold text-slate-700 text-sm">Feedback:</h3>
          
          <div className="w-full bg-slate-100/70 border border-slate-200/60 rounded-3xl p-6 flex flex-col gap-2 text-xs text-slate-600">
            <p><strong className="text-slate-800">OBS:</strong> O botão menos utilizado é o de música da categoria escola</p>
            <p><strong className="text-slate-800">Última vez:</strong> 20/08/2026 - 17:00</p>
            <p><strong className="text-slate-800">Sugestão:</strong> Substitua este tema do botão por outro</p>
          </div>
        </section>

      </main>

    </div>
  );
}
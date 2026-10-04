'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Home, 
  Grid, 
  BarChart2, 
  History, 
  Settings, 
  Bell, 
  LogOut,
  ChevronDown,
  X,
  FileText,
  Info,
  HelpCircle,
  Moon,
  Trash2,
  Plus,
  Minus,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function Configuracoes() {
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(10);

  const aumentarFonte = () => setTamanhoFonte((prev) => Math.min(prev + 1, 20));
  const diminuirFonte = () => setTamanhoFonte((prev) => Math.max(prev - 1, 8));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex font-sans relative">
      
      <aside className="w-64 bg-white border-r border-slate-100 p-6 flex flex-col justify-between min-h-screen shadow-sm">
        <div className="flex flex-col gap-8">
          
          <div className="flex justify-center w-full px-2">
            <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
              <Image 
                src="/logo.png" 
                alt="Logo C.A.S.A" 
                width={96} 
                height={96} 
                className="object-contain"
                priority 
              />
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <Link 
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer"
            >
              <Home className="w-5 h-5" />
              Início
            </Link>

            <Link 
              href="/categoria"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer"
            >
              <Grid className="w-5 h-5" />
              Categorias
            </Link>

            <Link 
              href="/desempenho"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer"
            >
              <BarChart2 className="w-5 h-5" />
              Desempenho
            </Link>

            <Link 
              href="/historico"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer"
            >
              <History className="w-5 h-5" />
              Histórico
            </Link>

            <Link 
              href="/configuracoes"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#5F7DE3] text-white font-medium text-sm shadow-md shadow-[#5F7DE3]/25 transition-all cursor-pointer"
            >
              <Settings className="w-5 h-5" />
              Configurações
            </Link>
          </nav>
        </div>

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

          <Link href="/" className="w-full">
            <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-500 hover:bg-slate-600 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer">
              <LogOut className="w-4 h-4" />
              Desconectar
            </button>
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-8 flex flex-col gap-6 max-w-5xl mx-auto relative">
        
        <div className="flex justify-between items-center">
          <Link 
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 text-slate-600 hover:text-[#5F7DE3] font-medium text-xs transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#5F7DE3]" />
            <span>Voltar ao Dashboard</span>
          </Link>

          <button 
            onClick={() => setShowNotificationsModal(!showNotificationsModal)}
            className="p-2.5 rounded-2xl bg-white border border-slate-100 text-[#5F7DE3] hover:bg-slate-50 transition-all shadow-sm relative cursor-pointer"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400"></span>
          </button>
        </div>

        <section 
          className="w-full h-28 rounded-3xl p-8 flex items-center justify-center text-white shadow-lg relative overflow-hidden text-center"
          style={{
            background: 'linear-gradient(90deg, #F5AC46 0%, #6586F3 52%, #4D66B8 88%, #3B4E8D 100%)'
          }}
        >
          <h1 className="text-3xl font-extrabold drop-shadow-sm">Configurações</h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 items-start">
          
          <div className="flex flex-col gap-3">
            <h2 className="text-center font-bold text-slate-600 text-sm">Sistema</h2>

            <div className="bg-[#FAF8FC] border border-purple-100/80 rounded-3xl p-6 flex flex-col gap-5 shadow-xs">
              
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-slate-400">Ativar/Desativar</span>
                <div className="bg-white/90 border border-purple-100 rounded-2xl p-3.5 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-slate-600" />
                    <span className="text-xs font-semibold text-slate-700">Notificações</span>
                  </div>
                  
                  <button 
                    onClick={() => setNotificacoesAtivas(!notificacoesAtivas)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                      notificacoesAtivas ? 'bg-slate-600' : 'bg-slate-300'
                    }`}
                  >
                    <div 
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        notificacoesAtivas ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-slate-400">Termos e Regras</span>
                
                <div className="flex flex-col gap-2.5">
                  <button className="bg-white/90 border border-purple-100 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs hover:bg-slate-50 transition-all cursor-pointer text-left">
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span className="text-xs font-semibold text-slate-700">Termos de privacidade</span>
                  </button>

                  <button className="bg-white/90 border border-purple-100 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs hover:bg-slate-50 transition-all cursor-pointer text-left">
                    <Info className="w-4 h-4 text-slate-600" />
                    <span className="text-xs font-semibold text-slate-700">Informações</span>
                  </button>

                  <button className="bg-white/90 border border-purple-100 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs hover:bg-slate-50 transition-all cursor-pointer text-left">
                    <HelpCircle className="w-4 h-4 text-slate-600" />
                    <span className="text-xs font-semibold text-slate-700">Suporte</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-3">
              <h2 className="text-center font-bold text-slate-600 text-sm">Acessibilidade</h2>

              <div className="bg-[#FAF8FC] border border-purple-100/80 rounded-3xl p-6 flex flex-col gap-5 shadow-xs">
                
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium text-slate-400">Modo Claro/Escuro</span>
                  <div className="bg-white/90 border border-purple-100 rounded-2xl p-3.5 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <Moon className="w-4 h-4 text-slate-600" />
                      <span className="text-xs font-semibold text-slate-700">Modo Escuro</span>
                    </div>

                    <button 
                      onClick={() => setModoEscuro(!modoEscuro)}
                      className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        modoEscuro ? 'bg-slate-600' : 'bg-slate-300'
                      }`}
                    >
                      <div 
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          modoEscuro ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium text-slate-400">Legenda</span>
                  <div className="bg-white/90 border border-purple-100 rounded-2xl p-3.5 flex items-center justify-between shadow-xs">
                    <span className="font-extrabold text-slate-700 text-sm">Tt</span>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={aumentarFonte}
                        className="w-7 h-7 rounded-lg bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-xs font-medium text-slate-400 px-3 py-1 bg-slate-50 border border-slate-100 rounded-md min-w-12 text-center">
                        {tamanhoFonte}px
                      </span>

                      <button 
                        onClick={diminuirFonte}
                        className="w-7 h-7 rounded-lg bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-center font-bold text-slate-600 text-sm">Conta</h2>

              <div className="bg-[#FAF8FC] border border-purple-100/80 rounded-3xl p-6 shadow-xs">
                <button className="w-full bg-white/90 border border-rose-100/80 rounded-2xl p-3.5 flex items-center justify-center gap-2 text-rose-500 hover:bg-rose-50 transition-all cursor-pointer shadow-xs">
                  <Trash2 className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-semibold text-rose-600">Excluir conta</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {showNotificationsModal && (
          <div className="absolute top-20 right-8 w-80 bg-[#F3EFF5] rounded-3xl p-6 shadow-2xl border border-indigo-100 z-50 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold text-[#5F7DE3]">Notificações</h4>
              <button 
                onClick={() => setShowNotificationsModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white p-3.5 rounded-2xl shadow-sm flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  Dispositivo Conectado
                </span>
              </div>
              <span className="text-[10px] text-purple-500 font-medium">Agora</span>
            </div>

            <div className="text-center">
              <button className="text-xs text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                Alterar
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
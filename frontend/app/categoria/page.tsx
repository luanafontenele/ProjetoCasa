'use client';

import { useState } from 'react';
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
  Search,
  Filter,
  Plus,
  Pencil,
  Trash2,
  LayoutGrid
} from 'lucide-react';
import Link from 'next/link';

export default function Categoria() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');

  const [categoriasList, setCategoriasList] = useState([
    { id: 1, nome: 'Escola', slug: 'escola' },
    { id: 2, nome: 'Casa', slug: 'casa' },
    { id: 3, nome: 'Objetos', slug: 'objetos' },
  ]);

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;

    const newCat = {
      id: Date.now(),
      nome: newCategoryName,
      slug: newCategoryName.toLowerCase().replace(/\s+/g, '-')
    };

    setCategoriasList([...categoriasList, newCat]);
    setNewCategoryName('');
    setShowAddModal(false);
  };

  const handleDeleteCategory = (id: number) => {
    setCategoriasList(categoriasList.filter(cat => cat.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex font-sans relative">
      
      {/* 1. SIDEBAR LATERAL */}
      <aside className="w-64 bg-white border-r border-slate-100 p-6 flex flex-col justify-between min-h-screen shadow-sm">
        <div className="flex flex-col gap-8">
          
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#5F7DE3]/10 flex items-center justify-center text-[#5F7DE3] font-bold text-lg border border-[#5F7DE3]/20">
              🏠
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-tight">C.A.S.A</span>
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
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#5F7DE3] text-white font-medium text-sm shadow-md shadow-[#5F7DE3]/25 transition-all cursor-pointer"
            >
              <Grid className="w-5 h-5" />
              Categorias
            </Link>

            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer text-left">
              <BarChart2 className="w-5 h-5" />
              Desempenho
            </button>

            <Link 
              href="/historico"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer"
            >
              <History className="w-5 h-5" />
              Histórico
            </Link>

            <Link 
              href="/configuracoes"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-[#5F7DE3] font-medium text-sm transition-all cursor-pointer"
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

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-8 flex flex-col gap-6 max-w-6xl mx-auto relative">
        <div className="flex justify-end items-center">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
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
          <h1 className="text-3xl font-extrabold drop-shadow-sm">Categorias</h1>
        </section>

        <p className="text-center text-slate-400 text-xs max-w-md mx-auto leading-relaxed font-medium">
          Crie, edite ou elimine categorias. Em cada uma, pode personalizar o que será exibido nos botões.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
            <div className="relative">
              <select className="appearance-none bg-white border border-slate-200 rounded-2xl px-10 py-3 text-xs font-medium text-slate-500 pr-10 cursor-pointer focus:outline-none shadow-xs">
                <option value="">Filtrar por</option>
                <option value="recentes">Mais recentes</option>
                <option value="az">A-Z</option>
              </select>
              <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            <div className="relative flex-1 max-w-md">
              <input 
                type="text" 
                placeholder="Busque por uma categoria...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>

            <button className="px-6 py-3 bg-[#8FA1D0] hover:bg-[#7e92c5] text-white text-xs font-semibold rounded-2xl transition-all cursor-pointer shadow-xs">
              Buscar
            </button>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#2589F5] hover:bg-[#1d78dc] text-white text-xs font-semibold rounded-2xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Adicionar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {categoriasList.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-[#F3F4F8] border border-slate-200/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-700 text-sm">
                  <span>{cat.nome}</span>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>
                
                <button 
                  onClick={() => handleDeleteCategory(cat.id)}
                  className="w-8 h-8 rounded-full border border-rose-200 bg-white flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer shadow-xs"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <Link href={cat.slug === 'escola' ? '/categoria/escola' : '#'} className="w-full">
                <button className="w-full py-2.5 rounded-2xl bg-[#5F7DE3] hover:bg-[#4d6bd3] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer">
                  Acessar
                </button>
              </Link>
            </div>
          ))}
        </div>

        {showNotifications && (
          <div className="absolute top-20 right-8 w-80 bg-[#F3EFF5] rounded-3xl p-6 shadow-2xl border border-indigo-100 z-50 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold text-[#5F7DE3]">Notificações</h4>
              <button 
                onClick={() => setShowNotifications(false)}
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

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-[#F3EFF5] w-full max-w-md rounded-3xl p-8 shadow-2xl border border-indigo-100 relative flex flex-col items-center text-center">
            <button 
              onClick={() => setShowAddModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <LayoutGrid className="w-6 h-6 text-[#5F7DE3]" />
              <h3 className="text-xl font-bold text-[#5F7DE3]">
                Adicionar <span className="text-amber-500">Categoria</span>
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-xs mb-6 leading-relaxed font-medium">
              Informe o que se pede para adicionar uma nova categoria.
            </p>
            <form onSubmit={handleAddCategory} className="w-full flex flex-col gap-5">
              <div className="flex flex-col items-start gap-2 w-full">
                <label className="text-xs font-bold text-slate-700">
                  Nome da Categoria:
                </label>
                <input 
                  type="text" 
                  placeholder="Exemplo: Escola..."
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full bg-white/90 border border-purple-200/80 rounded-2xl px-4 py-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#5F7DE3] shadow-xs transition-all"
                  autoFocus
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-[#5F7DE3] hover:bg-[#4d6bd3] text-white font-semibold text-sm transition-all shadow-md shadow-[#5F7DE3]/25 cursor-pointer mt-2"
              >
                Adicionar
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
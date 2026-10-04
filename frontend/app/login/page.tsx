'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans relative">
      
      <Link 
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-md text-slate-700 font-semibold text-xs transition-all shadow-md hover:scale-105 border border-slate-200/60 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-[#5F7DE3]" />
      </Link>

      <div 
        className="hidden md:flex md:w-5/12 lg:w-1/2 flex-col justify-center items-center text-white p-12 relative overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, #F5AC46 0%, #6586F3 52%, #4D66B8 88%, #3B4E8D 100%)'
        }}
      >
        <div className="flex flex-col items-center text-center gap-6 max-w-sm z-10">
          <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-sm">
            Ainda não tem uma conta?
          </h2>
          
          <Link href="/cadastro">
            <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95">
              <span>Cadastra-se</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 bg-white">
        
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          
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

          <div className="text-center flex flex-col gap-1.5">
            <h1 className="text-3xl font-extrabold text-[#5F7DE3]">
              Entrar
            </h1>
            <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
              Para acessar a sua conta, insira os seus dados abaixo
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="w-full bg-[#FAF8FC] border border-purple-100/80 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-xs"
          >

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">E-mail:</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
                <input 
                  type="email" 
                  placeholder="ana@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-purple-100 rounded-2xl pl-11 pr-4 py-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#5F7DE3] shadow-xs transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">Senha:</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full bg-white border border-purple-100 rounded-2xl pl-11 pr-20 py-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#5F7DE3] shadow-xs transition-all"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-[#5F7DE3] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showPassword ? 'Ocultar' : 'Mostrar'}</span>
                </button>
              </div>
            </div>

            <Link href="/dashboard" className="w-full mt-2">
              <button 
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#94A7EB] to-[#6A81D6] hover:from-[#8196E6] hover:to-[#5770C9] text-white font-semibold text-sm transition-all shadow-md shadow-[#5F7DE3]/20 cursor-pointer"
              >
                Acessar
              </button>
            </Link>

            <div className="text-center mt-1">
              <Link 
                href="/esqueci-senha"
                className="text-xs font-semibold text-[#5F7DE3] hover:underline transition-all cursor-pointer"
              >
                Esqueci a minha senha
              </Link>
            </div>

          </form>

          <div className="md:hidden text-center mt-2">
            <span className="text-xs text-slate-500">Ainda não tem uma conta? </span>
            <Link href="/cadastro" className="text-xs font-bold text-[#5F7DE3] hover:underline">
              Cadastra-se
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
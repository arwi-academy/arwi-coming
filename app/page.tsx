import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Globe, Users, BookOpen, Briefcase } from 'lucide-react'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-600/15"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), 
                     radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.12) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Enhanced Floating Elements with varied blur */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/25 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-600/25 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Additional layered blur elements */}
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-cyan-400/15 rounded-full blur-[100px] animate-pulse delay-3000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-blue-300/20 rounded-full blur-[80px] animate-pulse delay-4000"></div>

      <div className="relative z-10 backdrop-blur-[1px]">
        {/* Header with sophisticated blur */}
        <header className="container mx-auto px-4 py-6 backdrop-blur-sm bg-white/5">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ARWI
              </span>
            </div>
            <Badge variant="outline" className="border-blue-600 text-blue-600 bg-white/90 backdrop-blur-lg shadow-lg">
              Coming Soon
            </Badge>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section with layered blur */}
            <div className="mb-16 backdrop-blur-[0.5px]">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
                ARWI
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">
                Akademi Remote Work Indonesia
              </h2>
              <p className="text-lg md:text-xl text-blue-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Mempersiapkan talenta Indonesia untuk masa depan kerja remote yang lebih baik. 
                Platform pembelajaran dan sertifikasi terdepan untuk remote work skills.
              </p>
              
              {/* Countdown with enhanced blur */}
              <div className="mb-12">
                <div className="text-4xl font-bold text-blue-600 mb-2">2025</div>
                <div className="text-xl text-blue-700">Launching Soon</div>
              </div>
            </div>

            {/* Email Signup with sophisticated blur layering */}
            <div className="max-w-md mx-auto mb-16">
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Dapatkan Notifikasi Peluncuran</h3>
                <p className="text-blue-600 mb-6">Jadilah yang pertama tahu ketika ARWI diluncurkan</p>
                <form className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Masukkan email Anda" 
                    className="bg-white/90 border-blue-300/70 text-blue-900 placeholder:text-blue-500 focus:border-blue-500 focus:bg-white backdrop-blur-md focus:backdrop-blur-lg transition-all duration-300"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info with subtle blur */}
            <div className="border-t border-blue-200 pt-12 backdrop-blur-[0.5px]">
              <h3 className="text-xl font-semibold mb-6 text-blue-800">Hubungi Kami</h3>
              <div className="flex flex-wrap justify-center gap-8 text-blue-600">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/20 px-4 py-2 rounded-full border border-white/30">
                  <Mail className="w-5 h-5" />
                  <span>arwi.idn@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/20 px-4 py-2 rounded-full border border-white/30">
                  <Globe className="w-5 h-5" />
                  <span>www.arwi.academy</span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/20 px-4 py-2 rounded-full border border-white/30">
                  <MapPin className="w-5 h-5" />
                  <span>Yogyakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer with enhanced blur */}
        <footer className="container mx-auto px-4 py-8 text-center border-t border-blue-200 backdrop-blur-sm bg-white/5">
          <p className="text-blue-600">
            © 2025 ARWI - Akademi Remote Work Indonesia. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

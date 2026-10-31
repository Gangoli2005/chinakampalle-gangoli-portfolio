import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        {/* Sections will be mounted here in order */}
      </main>
      <Footer />
    </div>
  )
}

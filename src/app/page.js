import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* We'll add more sections here */}
      <div className="h-96 bg-black flex items-center justify-center text-white">
        <p>Rules sections will go here...</p>
      </div>
    </div>
  );
}
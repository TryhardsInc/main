export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold mb-4">$ whoami</h1>
        <p className="text-xl">Miłosz Jankiewicz • Tech Lead turned Indie Hacker</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="MVP in 4 Weeks" price="$10,000" />
          <ServiceCard title="Landing Page" price="$1,500" />
          <ServiceCard title="Full SaaS" price="Custom" />
        </div>
      </div>
    </div>
  );
}

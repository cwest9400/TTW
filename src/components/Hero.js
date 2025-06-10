export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-wizard-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-wizard-magenta to-wizard-cyan bg-clip-text text-transparent">
              TOWERTOP
            </span>
            <br />
            <span className="bg-gradient-to-r from-wizard-cyan to-wizard-magenta bg-clip-text text-transparent">
              WIZARD
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Spells will fly, towers will crumble, and only one wizard will reign supreme!
          </p>
          
          {/* Description */}
          <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-300">
            A fast-paced tabletop card game of cunning strategy, mischievous magic, and chaotic wizardly disputes. 
            You and up to three other players take on the roles of feuding wizards, each residing in a towering stronghold. 
            Your goal? Be the last wizard standing by unleashing destructive spells, deploying hapless Flunkies to wreak havoc, 
            and out-wizarding your rivals.
          </p>
          
          {/* Testing Badge */}
          <div className="inline-block bg-wizard-pink px-6 py-3 rounded-full text-sm font-bold mb-8 animate-pulse">
            IN TESTING NOW!
          </div>
          
          {/* CTA Button */}
          <div>
            <button className="bg-wizard-cyan hover:bg-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg">
              GET UPDATES
            </button>
          </div>
        </div>
      </section>
    );
  }
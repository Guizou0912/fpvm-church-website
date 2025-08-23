import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-md bg-white/80 rounded-3xl p-12 border border-white/20 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            FPVM FR-MG
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-8">
            TENY FIAINANA
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bienvenue dans notre communauté de foi. Découvrez une église vivante où la Parole de Dieu transforme les vies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Nous Contacter
            </Link>
            
            <button className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Découvrir nos Cultes
            </button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Communauté</h3>
              <p className="text-slate-600">Une famille spirituelle unie dans l'amour du Christ</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Enseignement</h3>
              <p className="text-slate-600">La Parole de Dieu enseignée avec clarté et vérité</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Service</h3>
              <p className="text-slate-600">Servir Dieu et notre prochain avec amour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
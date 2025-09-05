export default function BreakSection() {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "Hoje, grande parte das reclamações da comunidade se perde em grupos de WhatsApp 
              ou nunca chega de forma organizada até os órgãos responsáveis."
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200">
              O Cidadão Mapa resolve isso centralizando informações e dando visibilidade às demandas reais.
            </p>
          </div>
        </div>
      </section>
    );
  }
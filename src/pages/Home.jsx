import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

function Home() {
  const servicos = [
    {
      id: 1,
      titulo: 'Sistema de E-commerce',
      descricao: 'Plataforma completa de vendas online com painel administrativo',
      preco: '2.500',
    },
    {
      id: 2,
      titulo: 'Sistema para Clínicas',
      descricao: 'Gerencie agendamentos, pacientes e atendimentos com facilidade',
      preco: '3.000',
    },
  ]

  return (
    <div className="w-full px-6 py-12 space-y-16">
      {/* Seção Hero */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center space-y-3">
        <h1 className="text-4xl font-bold text-blue-700">Soluções Digitais para o Seu Negócio</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Desenvolvemos sistemas sob medida e também oferecemos projetos prontos para acelerar sua produtividade. Tudo com qualidade e foco no resultado.
        </p>
        <Link
          to="/servicos"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Conheça nossos serviços
        </Link>
      </section>

      {/* Espaço de teste visual */}
      <section className="w-full bg-red-300 border border-red-600 p-4">
        <h1 className="text-white font-bold text-center">Espaço entre section</h1>
      </section>

      {/* Seção Projetos Prontos */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Projetos Prontos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicos.map(servico => (
            <ServiceCard
              key={servico.id}
              titulo={servico.titulo}
              descricao={servico.descricao}
              preco={servico.preco}
              onDetalhes={() => alert(`Visualizar projeto ${servico.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section className="bg-white rounded shadow p-8">
        <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
        <p className="text-gray-700 leading-relaxed">
          Somos uma empresa de desenvolvimento freelancer focada em criar soluções ágeis e eficientes para negócios de todos os tamanhos. Atuamos com desenvolvimento personalizado, entrega rápida e suporte contínuo. Desde pequenos sistemas internos até plataformas completas, estamos prontos para transformar sua ideia em software.
        </p>
      </section>
    </div>
  )
}

export default Home

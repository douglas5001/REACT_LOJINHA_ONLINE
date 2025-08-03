import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiServer, FiGlobe, FiBarChart2, FiActivity, FiGitMerge } from 'react-icons/fi'
import ServiceCard from '../components/ServiceCard'
import FeatureCard from '../components/FeatureCard'
import AboutSection from '../components/AboutSection'
import Faq from '../components/Faq'

const MotionDiv = motion.div
const MotionSection = motion.section
const MotionH2 = motion.h2

function Home() {
  const servicos = [
    { id: 1, titulo: 'Sistema de E-commerce', descricao: 'Plataforma completa de vendas online com painel administrativo', preco: '2.500' },
    { id: 2, titulo: 'Sistema para Clínicas', descricao: 'Gerencie agendamentos, pacientes e atendimentos com facilidade', preco: '3.000' },
  ]

  const features = [
    { id: 'hospedagem', title: 'Configuração de Hospedagem de Site', description: 'Setup de servidor, domínio, SSL, pipeline de deploy e backups.', icon: <FiServer /> },
    { id: 'portfolio', title: 'Criação de Site/Portfólio', description: 'Sites rápidos, responsivos e alinhados à sua identidade visual.', icon: <FiGlobe /> },
    { id: 'dashboards', title: 'Dashboards para Análise e Gestão', description: 'Métricas claras e decisões rápidas com painéis sob medida.', icon: <FiBarChart2 /> },
    { id: 'monitoramento', title: 'Monitoramento de Serviços e Sistemas', description: 'Observabilidade, alertas e alta disponibilidade configurados.', icon: <FiActivity /> },
    { id: 'legados', title: 'Aplicações Legadas e Integrações', description: 'Evolução, correções e integrações entre sistemas com segurança.', icon: <FiGitMerge /> },
  ]

  const faqItems = [
    {
      question: 'Como funciona o processo para contratar?',
      answer: 'Entendemos a necessidade, definimos escopo e entregáveis, propomos cronograma e iniciamos com milestones curtas. A comunicação é contínua e transparente.'
    },
    {
      question: 'Preciso pagar algo para orçamento?',
      answer: 'Não. O diagnóstico inicial e a proposta de escopo são gratuitos.'
    },
    {
      question: 'O pagamento é antes ou depois da entrega?',
      answer: 'Trabalhamos com marcos de entrega. Cada etapa aprovada dispara o próximo pagamento.'
    },
    {
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim. Oferecemos plano de suporte e manutenção contínua com SLA definido.'
    },
    {
      question: 'Vocês atuam em projetos legados e integrações?',
      answer: 'Sim. Atuamos em refatoração, correções e integrações com ERPs, CRMs e serviços externos.'
    },
  ]

  return (
    <div className="w-full px-6 py-12 space-y-16">
      <section className="h-[70vh] flex flex-col items-center justify-center text-center space-y-3">
        <h1 className="text-4xl font-bold text-blue-700">Soluções Digitais para o Seu Negócio</h1>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Desenvolvemos sistemas sob medida e também oferecemos projetos prontos para acelerar sua produtividade. Tudo com qualidade e foco no resultado.
          <Link
            to="/servicos"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Conheça nossos serviços
          </Link>
        </MotionDiv>
      </section>

      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-gradient-to-b from-fuchsia-50 via-white to-white p-8"
      >
        <MotionH2 className="text-3xl font-bold text-center mb-10">Nossos Serviços</MotionH2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard
              key={f.id}
              icon={f.icon}
              title={f.title}
              description={f.description}
              delay={i * 0.08}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/servicos"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </MotionSection>

      <AboutSection />

      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Projetos Prontos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicos.map(s => (
            <ServiceCard
              key={s.id}
              titulo={s.titulo}
              descricao={s.descricao}
              preco={s.preco}
              onDetalhes={() => alert(`Visualizar projeto ${s.id}`)}
            />
          ))}
        </div>
      </section>

      <Faq items={faqItems} />
    </div>
  )
}

export default Home

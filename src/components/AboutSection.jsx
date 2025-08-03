import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiClock } from 'react-icons/fi'

const MotionSection = motion.section
const MotionDiv = motion.div

export default function AboutSection() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl p-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"
    >
      <div className="rounded-3xl bg-white p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Sobre nós</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Unimos produto, design e engenharia para construir soluções digitais objetivas e escaláveis.
              Atuamos do planejamento ao monitoramento em produção, com foco em performance, segurança e experiência do usuário.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <FiCheckCircle className="text-violet-700 text-2xl" />
                <div>
                  <p className="text-sm text-slate-500">Qualidade</p>
                  <p className="font-semibold text-slate-800">Código limpo</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <FiClock className="text-violet-700 text-2xl" />
                <div>
                  <p className="text-sm text-slate-500">Entrega</p>
                  <p className="font-semibold text-slate-800">Rápida e previsível</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <FiAward className="text-violet-700 text-2xl" />
                <div>
                  <p className="text-sm text-slate-500">Parceria</p>
                  <p className="font-semibold text-slate-800">Evolução contínua</p>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden ring-1 ring-black/5"
          >
            <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-8 text-white">
              <p className="text-lg font-semibold">Parceria de ponta a ponta</p>
              <p className="mt-2 text-white/80">
                Planejamento técnico, implementação, observabilidade e refinamentos com base em dados.
              </p>
            </div>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white">
              <div className="rounded-xl border p-5">
                <p className="text-sm text-slate-500">Arquitetura</p>
                <p className="font-semibold text-slate-800">Escalável e segura</p>
              </div>
              <div className="rounded-xl border p-5">
                <p className="text-sm text-slate-500">Observabilidade</p>
                <p className="font-semibold text-slate-800">Monitoramento e alertas</p>
              </div>
              <div className="rounded-xl border p-5">
                <p className="text-sm text-slate-500">UX</p>
                <p className="font-semibold text-slate-800">Foco no resultado</p>
              </div>
              <div className="rounded-xl border p-5">
                <p className="text-sm text-slate-500">Manutenção</p>
                <p className="font-semibold text-slate-800">Evolução contínua</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}

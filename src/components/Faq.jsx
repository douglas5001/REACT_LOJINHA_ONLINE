import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiX } from 'react-icons/fi'

const MotionBody = motion.div

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className={`text-xl md:text-2xl font-semibold ${isOpen ? 'text-slate-800' : 'text-slate-400'}`}>
          {question}
        </span>
        {isOpen ? <FiX className="text-slate-600 text-2xl" /> : <FiPlus className="text-slate-600 text-2xl" />}
      </button>

        <AnimatePresence initial={false}>
        {isOpen && (
            <MotionBody
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
            >
            <div className="pb-8 pr-10 text-slate-600 leading-relaxed">{answer}</div>
            </MotionBody>
        )}
        </AnimatePresence>
    </div>
  )
}

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">FAQ</h2>
      <div className="rounded-3xl bg-white p-4 md:p-8 ring-1 ring-black/5">
        {items.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  )
}

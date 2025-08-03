import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="rounded-2xl shadow-lg overflow-hidden ring-1 ring-black/5 bg-white"
    >
      <div className="bg-gradient-to-br from-purple-900 to-violet-700 text-white p-6 h-32 flex items-start rounded-t-2xl">
        <div className="text-2xl mr-3">{icon}</div>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </div>
      <div className="p-6 text-gray-700">
        <p>{description}</p>
      </div>
    </MotionDiv>
  )
}

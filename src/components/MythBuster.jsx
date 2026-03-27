import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const cards = [
  {
    myth: 'Myth: Financial literacy is just about budgeting.',
    fact: 'Fact: Financial literacy covers navigating complex documents, understanding tenants\' rights, managing credit, accessing benefits, and planning for the future — skills rarely taught in K–12.',
    term: 'Financial Literacy Scope',
    icon: '📚',
    color: 'from-blue-600 to-blue-800',
    backColor: 'from-emerald-600 to-emerald-800',
  },
  {
    myth: 'Myth: Financial stress only affects people with low incomes.',
    fact: 'Fact: 77% of Americans — across all income levels — report feeling anxious about their financial situation. Financial literacy education reduces anxiety at every income level.',
    term: 'Financial Anxiety',
    icon: '😰',
    color: 'from-orange-600 to-red-700',
    backColor: 'from-teal-600 to-teal-800',
  },
  {
    myth: 'Myth: Young people don\'t need to learn about money yet.',
    fact: 'Fact: Credit scores and financial decisions made in young adulthood have lifelong consequences. Youth who receive financial education early are far better prepared for economic stability.',
    term: 'Youth Financial Education',
    icon: '🎓',
    color: 'from-rose-600 to-pink-800',
    backColor: 'from-violet-600 to-violet-800',
  },
  {
    myth: 'Myth: Landlords must always explain lease terms clearly.',
    fact: 'Fact: Many tenants — especially immigrants — are taken advantage of due to complex documents and limited financial literacy. Knowing your rights is as important as knowing your finances.',
    term: 'Tenant Rights',
    icon: '🏠',
    color: 'from-purple-600 to-purple-900',
    backColor: 'from-sky-600 to-sky-800',
  },
  {
    myth: 'Myth: Mental health and finances are separate issues.',
    fact: 'Fact: 86% of people with mental health issues and debt said their financial situation made their mental health problems worse. Financial wellness directly supports overall wellbeing.',
    term: 'Money & Mental Health',
    icon: '🧠',
    color: 'from-slate-600 to-slate-800',
    backColor: 'from-green-600 to-green-800',
  },
  {
    myth: 'Myth: People can figure out finances on their own from the internet.',
    fact: 'Fact: 1 in 4 Americans say they don\'t have someone they can ask for trusted financial guidance. Community-based mentors and structured programs make a critical difference.',
    term: 'Trusted Guidance',
    icon: '🤝',
    color: 'from-cyan-600 to-blue-700',
    backColor: 'from-amber-600 to-orange-700',
  },
];

export default function MythBuster() {
  const [flipped, setFlipped] = useState({});

  const toggle = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-24 bg-slate-50 flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-purple-700 uppercase bg-purple-50 rounded-full mb-4">
            Financial Literacy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Myth-Buster Cards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-3">
            Tap or click any card to reveal the truth behind common financial literacy misconceptions.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <RefreshCw size={14} />
            Click to flip
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.term}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
                onClick={() => toggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(index)}
                aria-label={`Flip card: ${card.term}`}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className={`flip-card-front bg-gradient-to-br ${card.color} text-white`}>
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                      {card.term}
                    </div>
                    <p className="text-sm font-medium leading-snug">{card.myth}</p>
                    <div className="mt-4 text-xs text-white/50">Tap to reveal the truth →</div>
                  </div>
                  {/* Back */}
                  <div className={`flip-card-back bg-gradient-to-br ${card.backColor} text-white`}>
                    <div className="text-2xl mb-3">✅</div>
                    <p className="text-sm font-medium leading-snug">{card.fact}</p>
                    <div className="mt-4 text-xs text-white/50">← Tap to go back</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

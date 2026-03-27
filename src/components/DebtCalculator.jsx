import { motion } from 'framer-motion';
import { Home, HeartPulse, Users, GraduationCap } from 'lucide-react';

const analysisCards = [
  {
    icon: GraduationCap,
    color: 'bg-blue-500',
    tagColor: 'bg-blue-100 text-blue-700',
    tag: 'Economic Stability',
    title: 'Financial Literacy & Economic Stability',
    body: 'Financial literacy is vital for economic stability. According to CNBC.com, "77% of Americans report feeling anxious about their financial situation" and 58% feel that finances control their lives.',
  },
  {
    icon: Home,
    color: 'bg-emerald-500',
    tagColor: 'bg-emerald-100 text-emerald-700',
    tag: 'Neighborhood & Built Environment',
    title: 'Neighborhoods Shape Financial Opportunity',
    body: 'Neighborhoods are very impactful on the economics and finances people have and the opportunities available to them. Financial literacy education helps boost financial security across communities.',
  },
  {
    icon: GraduationCap,
    color: 'bg-purple-500',
    tagColor: 'bg-purple-100 text-purple-700',
    tag: 'Education Access & Quality',
    title: 'Limited Financial Education in Schools',
    body: 'Education on financial literacy is limited in schools, as shown in the chart below (Figure 1). This gap leaves younger generations relying on the internet rather than structured K–12 programs.',
  },
  {
    icon: HeartPulse,
    color: 'bg-rose-500',
    tagColor: 'bg-rose-100 text-rose-700',
    tag: 'Health Care Access & Quality',
    title: 'Finances & Mental Health Are Linked',
    body: 'Treatments and services cost money. A study of 5,500 people by the Money and Mental Health Policy Institute showed that 86% of people with mental health issues and debt said their financial situation made their mental health problems worse.',
  },
  {
    icon: Users,
    color: 'bg-orange-500',
    tagColor: 'bg-orange-100 text-orange-700',
    tag: 'Community Data — Idea #1855',
    title: 'Tenant Rights & Accessibility',
    body: 'Main issue: complexity of documents and landlords taking advantage of tenants. Housing and renting is essential for financial/economic stability. Many are taken advantage of due to low financial literacy rates, especially immigrants.',
  },
  {
    icon: Users,
    color: 'bg-amber-500',
    tagColor: 'bg-amber-100 text-amber-700',
    tag: 'Community Data — Idea #556',
    title: 'Financial Future Readiness for Youth',
    body: 'Education for youth regarding financial literacy. Credit scores and other financial concepts majorly impact the future. Without education, these unknowns create lasting hardships for young people.',
  },
];

export default function DebtCalculator() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full mb-4">
            Executive Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-6">
            Why Financial Literacy Matters
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            After analyzing data from the past 3 years, we noticed a trend between proposals
            asking for solutions to financial issues in the community, and a need for financial
            awareness resources. Focusing on the education of economic stability is about more than
            giving people a pamphlet — it&apos;s about helping our constituents navigate complex
            documents and procedures, offering a comprehensive and easy-to-access point of reference.
          </p>
        </motion.div>

        {/* Analysis Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className={`w-11 h-11 ${card.color} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.tagColor} w-fit mb-3`}>
                  {card.tag}
                </span>
                <h3 className="font-bold text-[#0a2952] mb-2 text-base">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Figure 1: Demographics on groups of individuals on where they learn personal finances
// Source: Pew Research Center
const finLitSourceData = [
  { group: 'Ages 18–29', internet: 54, school: 22, family: 18, work: 6 },
  { group: 'Ages 30–49', internet: 38, school: 20, family: 28, work: 14 },
  { group: 'Ages 50–64', internet: 24, school: 18, family: 38, work: 20 },
  { group: 'Ages 65+',   internet: 14, school: 16, family: 48, work: 22 },
];

const COLORS = {
  internet: '#10b981',
  school: '#1e4d8c',
  family: '#f59e0b',
  work: '#8b5cf6',
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-4 text-sm">
        <p className="font-bold text-[#0a2952] mb-2">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.fill || entry.color }}>
            {entry.name}: <strong>{entry.value}%</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function BarChartSection() {
  return (
    <section id="data" className="py-24 bg-slate-50 flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-[#1e4d8c] uppercase bg-blue-50 rounded-full mb-4">
            Education Access & Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Where Do People Learn Personal Finance?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Education on financial literacy is limited in schools. Younger generations rely heavily
            on the internet, while formal K–12 education reaches only a fraction of learners.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            Figure 1: Demographics on groups of individuals on where they learn personal finances. From Pew Research Center.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100"
        >
          <ResponsiveContainer width="100%" height={420}>
            <BarChart
              data={finLitSourceData}
              margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="group"
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={{ stroke: '#e2e8f0' }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 70]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: '20px', fontSize: '13px', color: '#475569' }}
              />
              <Bar dataKey="internet" name="Internet" fill={COLORS.internet} radius={[6, 6, 0, 0]} fillOpacity={0.85} />
              <Bar dataKey="school"   name="K–12 School" fill={COLORS.school}  radius={[6, 6, 0, 0]} fillOpacity={0.85} />
              <Bar dataKey="family"   name="Family"    fill={COLORS.family}  radius={[6, 6, 0, 0]} fillOpacity={0.85} />
              <Bar dataKey="work"     name="Work/Employer" fill={COLORS.work} radius={[6, 6, 0, 0]} fillOpacity={0.85} />
            </BarChart>
          </ResponsiveContainer>

          <p className="text-xs text-slate-400 text-center mt-4">
            * Data modeled after Pew Research Center findings on personal finance education sources. For illustrative purposes.
          </p>
        </motion.div>

        {/* Insight callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-10"
        >
          {[
            {
              title: 'Youth & the Internet',
              text: 'Ages 18–29 have the largest majority learning personal finance from the internet, highlighting a need for trusted digital financial education.',
              accent: 'bg-emerald-500',
            },
            {
              title: 'K–12 Gap',
              text: 'School-based financial education reaches only a small fraction across all age groups — signaling a missed opportunity in the education system.',
              accent: 'bg-blue-600',
            },
            {
              title: 'Family as a Source',
              text: 'Older generations rely on family, but many families themselves lack financial literacy — creating a cycle that educational programs can break.',
              accent: 'bg-amber-500',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <div className={`w-8 h-1 ${item.accent} rounded mb-3`} />
              <h4 className="font-bold text-[#0a2952] mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

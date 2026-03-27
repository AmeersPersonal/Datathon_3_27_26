import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Figure 2: Information of how Americans feel about finances. From Pew Research Center.
const anxietyData = [
  { name: 'Feel Anxious About Finances', value: 77 },
  { name: 'Feel Financially Secure', value: 23 },
];

const controlData = [
  { name: 'Finances Control Their Lives', value: 58 },
  { name: 'Feel in Control of Finances', value: 42 },
];

const COLORS_ANXIETY = ['#e11d48', '#10b981'];
const COLORS_CONTROL = ['#f59e0b', '#1e4d8c'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-[#0a2952]">{item.name}</p>
        <p style={{ color: item.payload.fill }}>{item.value}% of Americans</p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.06) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartSection() {
  return (
    <section className="py-24 bg-white flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full mb-4">
            Economic Stability
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            How Americans Feel About Their Finances
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Financial literacy is vital for economic stability. The data below shows how widespread
            financial anxiety is — and why education matters.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            Figure 2: Information of how Americans feel about finances. From Pew Research Center.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <PiePanel
            title="Financial Anxiety"
            subtitle="According to CNBC.com"
            data={anxietyData}
            colors={COLORS_ANXIETY}
            accent="text-red-600"
            bg="bg-red-50"
            border="border-red-100"
          />
          <PiePanel
            title="Sense of Financial Control"
            subtitle="Percentage who feel finances control their lives"
            data={controlData}
            colors={COLORS_CONTROL}
            accent="text-amber-600"
            bg="bg-amber-50"
            border="border-amber-100"
          />
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-[#0a2952] to-[#1e4d8c] rounded-2xl p-6 md:p-8 text-white text-center"
        >
          <h3 className="text-xl font-bold mb-3">💡 Key Insight</h3>
          <p className="text-blue-200 max-w-3xl mx-auto">
            &ldquo;77% of Americans report feeling anxious about their financial situation&rdquo; and{' '}
            <strong className="text-white">58% feel that finances control their lives.</strong>{' '}
            Focusing on economic stability education is about more than handing out pamphlets — it&apos;s
            about helping constituents navigate complex documents and offering a comprehensive,
            easy-to-access point of reference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PiePanel({ title, subtitle, data, colors, accent, bg, border }) {
  return (
    <div className={`${bg} border ${border} rounded-2xl p-6`}>
      <div className="text-center mb-4">
        <h3 className={`text-lg font-bold ${accent}`}>{title}</h3>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => (
              <span style={{ color: '#475569', fontSize: '12px' }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

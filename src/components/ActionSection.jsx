import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users, Lightbulb, HandHeart, Globe, Phone } from 'lucide-react';

const recommendations = [
  {
    icon: Lightbulb,
    title: 'Bring Awareness Through Educational Programs',
    description:
      'Target younger demographics impacted by economic stability. Ages 18–29 largely learn personal finances from the internet. Incorporating financial literacy into K–12 and leveraging technology can bring greater awareness to vital money management skills.',
    tag: 'Awareness',
    color: 'bg-emerald-500',
    border: 'border-emerald-100',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: HandHeart,
    title: 'Community-Based Financial Mentorship',
    description:
      '1 in 4 Americans say they don\'t have someone they can ask for trusted financial guidance. Community mentors can teach how to wisely use food stamps, find good income jobs, bank wisely, build credit, and access financial aid.',
    tag: 'Assistance',
    color: 'bg-blue-500',
    border: 'border-blue-100',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: BookOpen,
    title: 'NYC Financial Empowerment Centers',
    description:
      'Free one-on-one financial counseling to help NYC residents tackle debt, build credit, open bank accounts, and navigate complex financial documents.',
    link: 'https://www1.nyc.gov/site/dca/consumers/financial-empowerment-centers.page',
    linkLabel: 'Find a Center',
    tag: 'Free Counseling',
    color: 'bg-purple-500',
    border: 'border-purple-100',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Users,
    title: 'NYC Credit-Building Workshops',
    description:
      'The NYC Department of Consumer and Worker Protection hosts free workshops on credit building and financial planning throughout the year — available to all NYC residents.',
    link: 'https://www1.nyc.gov/site/dca/consumers/get-consumer-help.page',
    linkLabel: 'Find a Workshop',
    tag: 'Workshops',
    color: 'bg-orange-500',
    border: 'border-orange-100',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Globe,
    title: 'Consumer Financial Protection Bureau',
    description:
      'Federal resource for understanding your rights, disputing credit report errors, and filing complaints against predatory lenders and landlords.',
    link: 'https://www.consumerfinance.gov/',
    linkLabel: 'Learn More',
    tag: 'Federal Resource',
    color: 'bg-slate-600',
    border: 'border-slate-200',
    tagColor: 'bg-slate-100 text-slate-700',
  },
  {
    icon: Phone,
    title: 'NYC 311 Financial Assistance',
    description:
      'Call or text 311 to be connected with local financial assistance programs, emergency rental help, tenant rights resources, and debt relief programs.',
    link: 'https://portal.311.nyc.gov/',
    linkLabel: 'Call 311',
    tag: 'Emergency Help',
    color: 'bg-red-500',
    border: 'border-red-100',
    tagColor: 'bg-red-100 text-red-700',
  },
];

const citations = [
  {
    num: 1,
    text: '"Epi Data Briefs and Data Tables." NYC Health, New York City Department of Health and Mental Hygiene.',
    url: 'https://www.nyc.gov/site/doh/data/data-publications/epi-data-briefs-and-data-tables.page',
  },
  {
    num: 2,
    text: '"Why Health and Finances Go Hand in Hand." Enrich.',
    url: 'https://enrich.org/why-health-and-finances-go-hand-in-hand/',
  },
  {
    num: 3,
    text: '"How to Take Control of Your Finances." CNBC Select, CNBC.',
    url: 'https://www.cnbc.com/select/how-to-take-control-of-your-finances/',
  },
  {
    num: 4,
    text: '"Data Visualization." Stanford Institute for Innovation in Developing Economies.',
    url: 'https://ifdm.stanford.edu/dataviz',
  },
  {
    num: 5,
    text: 'The Financial Literacy of College Students. Drexel University.',
    url: 'https://researchdiscovery.drexel.edu/esploro/outputs/doctoral/The-Financial-Literacy-of-College-Students/991021119113204721',
  },
  {
    num: 6,
    text: '"Financial Literacy Statistics." Annuity.org.',
    url: 'https://www.annuity.org/financial-literacy/financial-literacy-statistics/',
  },
  {
    num: 7,
    text: '"Has Pay Kept Up with Inflation?" Brookings.',
    url: 'https://www.brookings.edu/articles/has-pay-kept-up-with-inflation/',
  },
  {
    num: 8,
    text: '"Roughly Half of Americans Are Knowledgeable About Personal Finances." Pew Research Center, 9 Dec. 2024.',
    url: 'https://www.pewresearch.org/short-reads/2024/12/09/roughly-half-of-americans-are-knowledgeable-about-personal-finances/',
  },
  {
    num: 9,
    text: '"Unequal Recovery: Measuring Financial Distress." Federal Reserve Bank of St. Louis, 2019.',
    url: 'https://www.stlouisfed.org/publications/regional-economist/first-quarter-2019/unequal-recovery-measuring-financial-distress',
  },
  {
    num: 10,
    text: '"Money and Mental Health: The Facts." Money and Mental Health Policy Institute. Accessed 27 Mar. 2026.',
    url: 'https://www.moneyandmentalhealth.org/money-and-mental-health-facts/',
  },
];

export default function ActionSection() {
  return (
    <section id="action" className="py-24 bg-white flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full mb-4">
            Actionable Recommendations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Awareness & Assistance
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We want to bring awareness to resources that help people learn to manage their money
            and connect constituents to trusted community-based financial guidance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-white rounded-2xl p-6 border ${resource.border} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}
              >
                <div className={`w-11 h-11 ${resource.color} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${resource.tagColor} w-fit mb-3`}>
                  {resource.tag}
                </span>
                <h3 className="font-bold text-[#0a2952] mb-2 text-base">{resource.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{resource.description}</p>
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e4d8c] hover:text-emerald-600 transition-colors duration-200"
                  >
                    {resource.linkLabel}
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Citations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100"
        >
          <h3 className="text-lg font-bold text-[#0a2952] mb-2">Citations</h3>
          <p className="text-xs text-slate-500 mb-4 italic">
            AI Usage: Generated &amp; Debugged website w/ OpenAI Codex. Used to scrape data as well.
          </p>
          <ol className="space-y-2">
            {citations.map((c) => (
              <li key={c.num} className="text-xs text-slate-600 flex gap-2">
                <span className="font-semibold text-slate-400 flex-shrink-0">{c.num}.</span>
                <span>
                  {c.text}{' '}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e4d8c] hover:text-emerald-600 underline underline-offset-2 break-all"
                  >
                    {c.url}
                  </a>
                </span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

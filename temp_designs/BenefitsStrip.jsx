import React from 'react';
import { ShieldCheck, Truck, HeadphonesIcon, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: ThumbsUp,
    title: 'PREMIUM QUALITY',
    description: 'Carefully selected accessories built for everyday performance and long-lasting durability.',
    colSpan: 'lg:col-span-2'
  },
  {
    icon: ShieldCheck,
    title: 'WHOLESALE ADVANTAGE',
    description: 'Competitive margins and scalable partnership opportunities.',
    colSpan: 'lg:col-span-1'
  },
  {
    icon: Truck,
    title: 'TRUSTED DISTRIBUTOR',
    description: 'Reliable supply chain across Iraq.',
    colSpan: 'lg:col-span-1'
  },
  {
    icon: HeadphonesIcon,
    title: 'DEDICATED SUPPORT',
    description: 'Responsive, localized service focused on building long-term business relationships.',
    colSpan: 'lg:col-span-2'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const BenefitsStrip = () => {
  return (
    <section className="py-24 bg-bz-bg relative z-10">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        <div className="mb-12">
          <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-bz-ink tracking-tight">
            Why choose BestZone?
          </h2>
          <p className="text-bz-text mt-2">The standards we uphold across every product.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`glass-card rounded-[2rem] p-8 sm:p-10 flex flex-col items-start ${benefit.colSpan} hover:-translate-y-1 transition-transform duration-500`}
              >
                <div className="w-14 h-14 bg-bz-surface-subtle border border-bz-border rounded-2xl flex items-center justify-center text-bz-ink mb-6 shadow-sm">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold tracking-widest text-bz-ink mb-3 uppercase">
                  {benefit.title}
                </h3>
                <p className="text-base text-bz-text leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
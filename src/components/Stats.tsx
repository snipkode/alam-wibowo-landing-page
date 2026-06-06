import { Maximize2, Weight, Scissors, Eye, Languages, Calendar } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Maximize2 size={24} />, label: 'Height', value: '175 cm' },
    { icon: <Weight size={24} />, label: 'Weight', value: '75 kg' },
    { icon: <Scissors size={24} />, label: 'Hair', value: 'Black' },
    { icon: <Eye size={24} />, label: 'Eye Color', value: 'Dark Brown' },
    { icon: <Languages size={24} />, label: 'Languages', value: 'ID, Sundanese' },
    { icon: <Calendar size={24} />, label: 'Availability', value: 'Ready' },
  ];

  return (
    <div className="bg-cinematic-gray border-y border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="text-gold mb-3 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                {stat.label}
              </span>
              <span className="text-white font-medium">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

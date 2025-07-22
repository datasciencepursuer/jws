import { contentConfig } from '@/config/content';

export default function Services() {
  const { services } = contentConfig;

  return (
    <section id="services" className="pt-12 pb-20 bg-cream-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blueprint-blue mb-4 structural-accent">{services.title}</h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto font-mono">{services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <div key={index} className="bg-cream-paper rounded-lg p-6 blueprint-border hover:bg-cream-darker transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blueprint-blue mb-3">{service.title}</h3>
              <p className="text-charcoal font-mono">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
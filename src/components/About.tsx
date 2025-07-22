import { contentConfig } from '@/config/content';
import Image from 'next/image';

export default function About() {
  const { about } = contentConfig;

  return (
    <section id="about" className="py-24 paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blueprint-blue mb-6 structural-accent">{about.title}</h2>
          <p className="text-lg text-charcoal mb-8 font-mono">{about.content}</p>
          <div className="bg-cream-darker p-6 rounded-lg blueprint-border inline-block">
            <h3 className="text-2xl font-bold text-blueprint-blue mb-2">{about.experience}</h3>
            <p className="text-charcoal font-mono">Delivering reliable structural engineering solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
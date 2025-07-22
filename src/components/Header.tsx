'use client';

import { contentConfig } from '@/config/content';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { company, navigation } = contentConfig;

  return (
    <header className="fixed top-0 w-full bg-cream-paper/95 backdrop-blur-sm border-b-2 border-blueprint-blue z-50 blueprint-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blueprint-blue structural-accent">{company.name}</h1>
            <p className="text-sm text-charcoal font-mono">{company.tagline}</p>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-blueprint-blue px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blueprint-light font-mono"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-blueprint-blue hover:bg-cream-darker"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream-paper border-t-2 border-blueprint-blue">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-charcoal hover:text-blueprint-blue block px-3 py-2 text-base font-medium border-l-2 border-transparent hover:border-blueprint-light font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
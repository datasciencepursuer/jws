import { contentConfig } from '@/config/content';

export default function Footer() {
  const { footer, company } = contentConfig;

  return (
    <footer className="bg-blueprint-blue text-cream-paper py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 structural-accent">{company.name}</h3>
            <p className="text-cream-paper/80 mb-4 font-mono">{company.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blueprint-light">{footer.contactTitle}</h4>
            <div className="space-y-2 text-cream-paper/80 font-mono">
              <p>{company.phone}</p>
              <p>{company.email}</p>
              <p>{company.address}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-blueprint-light mt-8 pt-8 text-center">
          <p className="text-cream-paper/80 font-mono">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
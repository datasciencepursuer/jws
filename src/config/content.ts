export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ContentConfig {
  company: CompanyInfo;
  navigation: NavigationItem[];
  hero: {
    headline: string;
  };
  about: {
    title: string;
    content: string;
    experience: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submitText: string;
    };
  };
  footer: {
    copyright: string;
    contactTitle: string;
  };
}

export const contentConfig: ContentConfig = {
  company: {
    name: "JWS Consultant & Design LTD",
    tagline: "Structural Engineering",
    description: "Based in Markam, Ontario, JWS Consultant & Design LTD specializes in structural engineering for residential and commercial projects. Our team is dedicated to delivering innovative and reliable solutions tailored to your specific needs.",
    phone: "(555) 123-4567",
    email: "info@jwsconsulting.com",
    address: "123 Engineering Way, Suite 100, City, ST 12345"
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline: "Where Science is an Art"
  },
  about: {
    title: "About JWS Consultant & Design LTD",
    content: "Based in Markam, Ontario, JWS Consultant & Design LTD specializes in structural engineering for residential and commercial projects. Our team is dedicated to delivering innovative and reliable solutions tailored to your specific needs.",
    experience: "MANY+ Years of Excellence"
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive structural engineering solutions tailored to your needs",
    items: [
      {
        title: "Home Renovations",
        description: "Walk out basements, load bearing wall removal, additions, decks, and porches.",
        icon: "🏠"
      },
      {
        title: "Custom Homes",
        description: "Structural engineering for custom homes, laneway suites, and garden suites.",
        icon: "🏘️"
      },
      {
        title: "Commercial Buildings",
        description: "Structural engineering for commercial buildings, spec built warehouses, mezzanine levels, and office fit-out projects.",
        icon: "🏢"
      }
    ]
  },
  contact: {
    title: "Contact Us",
    subtitle: "Ready to discuss your project? Get in touch with our team today.",
    form: {
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Project Description",
      submitText: "Send Message"
    }
  },
  footer: {
    copyright: "© 2025 JWS Consultant & Design LTD. All rights reserved.",
    contactTitle: "Contact Info"
  }
};
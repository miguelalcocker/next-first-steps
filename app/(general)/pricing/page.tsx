import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Esta es la página de contacto de la empresa',
 keywords: ['Pricing Page','Miguel','Information','...']
};

export default function PricingPage() {
    return (
      <>
        <span className="text-7xl">Pricing Page</span>
      </>
    )
  }
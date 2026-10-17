import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PainPoints from './components/PainPoints.jsx';
import Solution from './components/Solution.jsx';
import Products from './components/Products.jsx';
import ServiceIcons from './components/ServiceIcons.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FooterCTA from './components/FooterCTA.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import { fetchContent, FALLBACK } from './api/content.js';

export default function App() {
  const [data, setData] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchContent('all')
      .then((content) => {
        if (!mounted) return;
        if (content) setData({ ...FALLBACK, ...content });
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="site">
      <Header cartCount={0} />
      <main>
        <Hero data={data.hero} />
        <PainPoints items={data.painPoints} />
        <Solution data={data.solution} />
        <Products items={data.products} />
        <ServiceIcons items={data.serviceIcons} />
        <Testimonials items={data.testimonials} />
        <FAQ items={data.faqs} />
        <FooterCTA />
      </main>
      <SiteFooter />
      {loading && <span className="sr-only">Loading…</span>}
    </div>
  );
}
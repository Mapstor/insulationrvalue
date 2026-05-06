import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Insulation Glossary | Building Science Terms Defined',
  description:
    'Plain-English definitions of insulation and building science terms: R-value, U-value, perm rating, ACH50, RESNET grade, thermal bridging, ci, vapor barrier, and 20+ more.',
  alternates: {
    canonical: 'https://insulationrvalues.com/insulation-glossary',
  },
  openGraph: {
    title: 'Insulation Glossary | Building Science Terms Defined',
    description:
      'Definitions of 25+ insulation and building science terms used across the site, with cross-links to detailed guides.',
    url: 'https://insulationrvalues.com/insulation-glossary',
    siteName: 'InsulationRValues.com',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Insulation and Building Science Glossary',
      },
    ],
  },
}

interface Term {
  id: string
  name: string
  short: string
  description: string
  link?: { href: string; label: string }
}

const terms: Term[] = [
  {
    id: 'ach50',
    name: 'ACH50',
    short: 'Air changes per hour at 50 pascals.',
    description:
      'Measure of a building\'s air leakage rate, captured during a blower-door test. The blower depressurises the building to 50 pascals and reports how many times the indoor air volume turns over per hour. Tight new construction targets 1.5-3.0 ACH50; older homes often measure 5.0-10.0 or worse. Lower is better.',
  },
  {
    id: 'astm-c518',
    name: 'ASTM C518',
    short: 'Standardised R-value test method.',
    description:
      'Steady-state thermal-resistance test at 75°F mean temperature using a heat-flow meter. The R-value printed on every insulation bag and product spec comes from this test (or its predecessor ASTM C177). Real-world R-value can differ when temperature, moisture, or installation quality drift from lab conditions.',
  },
  {
    id: 'blowing-agent',
    name: 'Blowing agent',
    short: 'The gas that creates cells in foam insulation.',
    description:
      'Determines a foam\'s R-value per inch, environmental impact, and long-term performance. Closed-cell spray foam and rigid-foam boards rely on blowing agents trapped in cells. Modern HFO (hydrofluoro-olefin) blowing agents have low global warming potential; older HFC blowing agents have GWP of 700-1,400 and are being phased out.',
    link: { href: '/spray-foam-insulation', label: 'Spray foam insulation guide' },
  },
  {
    id: 'cavity-insulation',
    name: 'Cavity insulation',
    short: 'Insulation installed between framing members.',
    description:
      'Goes inside stud bays, joist bays, or rafter bays. Standard fiberglass batts, blown-in cellulose in walls, and spray foam between studs are all cavity insulation. Limited to the depth of the framing (3.5" in 2×4, 5.5" in 2×6). Compare to continuous insulation, which goes outside the framing and is uninterrupted by studs.',
  },
  {
    id: 'climate-zone',
    name: 'Climate zone (IECC)',
    short: 'IECC zones 1 (very hot) through 8 (subarctic).',
    description:
      'The 2021 IECC divides the US into 8 climate zones based on heating and cooling degree days. Each zone has minimum R-value requirements per Table R402.1.3. Marine subzones (3C, 4C) apply to coastal Pacific Northwest and Northern California with milder temperatures but stricter vapor-control rules.',
    link: { href: '/climate-zone-map', label: 'Climate Zone Map' },
  },
  {
    id: 'ci',
    name: 'ci (continuous insulation)',
    short: 'Insulation uninterrupted by framing.',
    description:
      'Rigid foam or mineral-wool board applied over the exterior of the framing (or over interior framing) so heat must pass through the insulation rather than around it through wood studs. Reduces thermal bridging and improves whole-wall R-value. "R-13+5ci" means R-13 cavity insulation plus R-5 of continuous exterior insulation.',
  },
  {
    id: 'closed-cell-foam',
    name: 'Closed-cell spray foam',
    short: 'Dense spray foam with sealed gas-filled cells.',
    description:
      'R-6.0 to R-7.0 per inch. Acts as insulation, air barrier, and vapor barrier in one application. Adds structural rigidity. 2× to 3× more expensive than open-cell. Best for rim joists, basement walls, crawl spaces, and limited-depth cavities where R-value per inch matters.',
    link: { href: '/open-cell-vs-closed-cell-spray-foam', label: 'Open-cell vs closed-cell comparison' },
  },
  {
    id: 'conditioned-space',
    name: 'Conditioned space',
    short: 'Indoor area kept at heated/cooled temperature.',
    description:
      'Living rooms, bedrooms, finished basements - any space served by HVAC. Unconditioned spaces include vented attics, vented crawl spaces, and detached garages. The thermal envelope is the boundary between conditioned and unconditioned space; insulation goes on this boundary.',
  },
  {
    id: 'dew-point',
    name: 'Dew point',
    short: 'Temperature at which water vapor condenses.',
    description:
      'Critical in wall and roof assemblies because if the dew point falls inside the insulation cavity, moisture condenses on framing or sheathing and can cause rot. Vapor retarders and air barriers are placed strategically to keep the dew point in a non-damaging location for the climate.',
  },
  {
    id: 'encapsulation',
    name: 'Crawl space encapsulation',
    short: 'Sealing crawl space and bringing it inside the envelope.',
    description:
      'Seal vents, install heavy-duty vapor barrier on dirt floor and up walls, insulate crawl space walls (closed-cell foam or rigid foam). The crawl space becomes part of the conditioned envelope - eliminates moisture problems, makes ducts in the crawl perform better, costs $3,000-$15,000 depending on size.',
    link: { href: '/crawl-space-insulation', label: 'Crawl space insulation guide' },
  },
  {
    id: 'fsi-sdi',
    name: 'FSI / SDI',
    short: 'Flame Spread Index / Smoke Developed Index.',
    description:
      'Fire-safety ratings for insulation per ASTM E84. Class A insulation has FSI ≤25 and SDI ≤50. Most fiberglass and mineral wool meet Class A. Spray foam typically has FSI ≤75, SDI ≤450 and requires a thermal barrier (½" drywall or equivalent) when exposed in occupied spaces.',
  },
  {
    id: 'hdd-cdd',
    name: 'HDD / CDD',
    short: 'Heating Degree Days / Cooling Degree Days.',
    description:
      'How heating and cooling demand are quantified. HDD measures how cold the climate is across the year (cumulative degrees below 65°F per day); CDD measures heat. The IECC uses HDD and CDD to define climate zones - zone 1 has lots of CDD and few HDD; zone 8 is the opposite.',
  },
  {
    id: 'iecc',
    name: 'IECC',
    short: 'International Energy Conservation Code.',
    description:
      'The model energy code published by the International Code Council. Most US jurisdictions adopt the IECC (sometimes with state amendments) as the legal energy code for new construction. The 2021 IECC bumped attic R-values to R-49 in zones 2-3 and R-60 in zones 4-8.',
    link: { href: '/r-value-calculator', label: 'IECC requirements by ZIP' },
  },
  {
    id: 'ice-dam',
    name: 'Ice dam',
    short: 'Ridge of ice that forms at the eave in winter.',
    description:
      'Caused by heat escaping through the attic, melting snow on the roof above the conditioned space, and the meltwater refreezing at the cold eave. Ice dams back up under shingles and leak into walls. Prevented by adequate attic insulation (especially over the exterior wall top plates), air sealing, and proper attic ventilation.',
    link: { href: '/attic-insulation', label: 'Attic insulation guide' },
  },
  {
    id: 'k-value',
    name: 'K-value (thermal conductivity)',
    short: 'How readily a material conducts heat.',
    description:
      'Inverse of R-value. K-value is per-inch, in BTU·in/(hr·ft²·°F). A material with K-value of 0.25 has R-value per inch of 4.0. R-value is the more common metric for insulation in the US; K-value is used more often in commercial/scientific contexts.',
  },
  {
    id: 'marine-subzone',
    name: 'Marine subzone (3C, 4C)',
    short: 'Coastal Pacific Northwest and Bay Area zones.',
    description:
      'A IECC subdivision applied to climate zones 3 and 4 in coastal areas with mild, wet, low-diurnal-range climates: Seattle, Portland, San Francisco. Marine zones share R-value requirements with their primary zone (3 or 4) but have stricter vapor-control rules - often requiring a Class III vapor retarder or specific assembly types because of high relative humidity and reduced drying potential.',
  },
  {
    id: 'open-cell-foam',
    name: 'Open-cell spray foam',
    short: 'Lighter spray foam with interconnected cells.',
    description:
      'R-3.5 to R-3.8 per inch. Vapor permeable (semi). Cheaper than closed-cell. Acts as an air barrier but not a vapor barrier. Best for interior walls, attic roof decks (in conditioned attics), and cathedral ceilings where you want some drying capability through the foam.',
    link: { href: '/open-cell-vs-closed-cell-spray-foam', label: 'Open-cell vs closed-cell comparison' },
  },
  {
    id: 'perm-rating',
    name: 'Perm rating',
    short: 'How easily water vapor passes through a material.',
    description:
      'Measured in perms (US) or ng/(Pa·s·m²) (SI). Class I vapor retarders (poly sheet) have <0.1 perms - essentially impermeable. Class II (kraft facing) is 0.1-1.0 perms. Class III (latex paint, "smart" retarders) is 1-10 perms. Higher-permeability materials let vapor pass; impermeable materials block it.',
  },
  {
    id: 'r-value',
    name: 'R-value',
    short: 'Thermal resistance - higher is better insulation.',
    description:
      'Measured in h·ft²·°F/BTU in the US. Higher R-value = more resistance to heat flow. R-values are additive across layers: R-13 cavity + R-5 continuous + ~R-1 sheathing/drywall/air-films = ~R-19 wall assembly. The label R-value is tested at 75°F mean temperature; real-world performance varies.',
    link: { href: '/what-is-r-value', label: 'Full R-value explainer' },
  },
  {
    id: 'resnet-grade',
    name: 'RESNET grade (I, II, III)',
    short: 'Insulation installation quality grade.',
    description:
      'Standardised inspection grade. Grade I = perfect fill, no gaps, no compression. Grade II = small defects on a small area. Grade III = visible gaps, voids, or compression on >2% of insulated area. Grade III performance is 30%+ lower than Grade I for the same labelled R-value. Most uninspected installations end up at Grade II or worse.',
  },
  {
    id: 'settled-density',
    name: 'Settled density (for blown-in)',
    short: 'Final density after material settles.',
    description:
      'Loose-fill cellulose settles ~20% in the first year. Manufacturers publish coverage charts in two columns: initial install depth and settled depth. Code compliance is based on settled R-value, so installers over-blow by ~20% to land at the target after settling. Blown fiberglass settles 1-3% (much less).',
  },
  {
    id: 'stack-effect',
    name: 'Stack effect',
    short: 'Buoyancy-driven air movement in buildings.',
    description:
      'Warm interior air rises and escapes through the upper envelope (attic, can lights, top plates), pulling cold outside air in through the lower envelope (rim joists, crawl space). Drives 40-60% of heat loss in older homes. Air sealing - especially at the top plate and attic floor - addresses this.',
    link: { href: '/how-to-air-seal-attic', label: 'How to air seal an attic' },
  },
  {
    id: 'thermal-bridging',
    name: 'Thermal bridging',
    short: 'Heat path through framing around insulation.',
    description:
      'Wood framing conducts heat 3-4× faster than the insulation between studs. In a standard 2×6 wall framed 16" on center, framing is 23-25% of the wall area. This drops a cavity R-23 wall to about R-18 whole-wall. Continuous exterior insulation breaks the thermal bridge: adding R-5 of exterior foam can recover most of the lost R-value.',
    link: { href: '/rigid-foam-insulation', label: 'Rigid foam insulation guide' },
  },
  {
    id: 'type-x-drywall',
    name: 'Type X drywall',
    short: 'Fire-rated drywall (5/8" with glass fibers).',
    description:
      'Required as a thermal barrier over spray foam in occupied spaces, on garage ceilings below living space, and in fire-rated wall assemblies. Type X gypsum has glass fibers that hold the gypsum together longer when exposed to fire. Standard ½" drywall is not Type X; do not substitute.',
  },
  {
    id: 'u-value',
    name: 'U-value (U-factor)',
    short: 'Thermal conductance - inverse of R-value.',
    description:
      'U = 1/R. A wall assembly with R-20 has U = 0.05. Lower U-value = better insulation (opposite of R-value). U-value is more common for windows and whole-assembly performance; R-value is more common for individual insulation materials.',
  },
  {
    id: 'vapor-barrier-vs-retarder',
    name: 'Vapor barrier vs vapor retarder',
    short: 'How easily moisture passes through.',
    description:
      'A vapor barrier (Class I, <0.1 perms) is essentially impermeable - poly sheet, closed-cell foam at sufficient thickness. A vapor retarder slows but doesn\'t stop vapor: Class II (0.1-1.0 perms, e.g., kraft facing) or Class III (1-10 perms, e.g., latex paint, smart retarders). The right class depends on climate zone and assembly type.',
    link: { href: '/faced-vs-unfaced-insulation', label: 'Faced vs unfaced insulation' },
  },
  {
    id: 'whole-wall-r-value',
    name: 'Whole-wall R-value',
    short: 'Real assembly R-value including framing.',
    description:
      'The effective R-value of a wall assembly accounting for thermal bridging through framing, air films, sheathing, drywall, and the cavity insulation. Always lower than the cavity insulation\'s labelled R-value. ORNL\'s whole-wall calculator gives exact values; rough rule: cavity-insulated wall assembly is 75-85% of cavity R-value.',
  },
]

export default function InsulationGlossaryPage() {
  // DefinedTermSet schema with all glossary entries for AI extraction.
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Insulation and Building Science Glossary',
    description:
      'Definitions of 27 insulation and building-science terms referenced across InsulationRValues.com.',
    url: 'https://insulationrvalues.com/insulation-glossary',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.name,
      description: t.description,
      url: `https://insulationrvalues.com/insulation-glossary#${t.id}`,
      inDefinedTermSet: 'https://insulationrvalues.com/insulation-glossary',
    })),
  }

  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Insulation Glossary',
          description:
            'Plain-English definitions of insulation and building science terms used across InsulationRValues.com.',
          url: '/insulation-glossary',
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Glossary', href: '/insulation-glossary' }]} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Insulation &amp; Building Science Glossary
          </h1>
          <p className="text-lg text-text-muted mb-8">
            Plain-English definitions of {terms.length} terms used across the site,
            from R-value to thermal bridging. Each entry links to a deeper guide
            where one exists.
          </p>

          {/* Alphabetical jump links */}
          <nav className="not-prose bg-surface-50 border border-surface-200 rounded-lg p-4 mb-8">
            <p className="text-sm font-medium text-primary mb-3">Jump to a term:</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {terms.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="text-primary hover:underline"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Terms */}
          <div className="not-prose space-y-6">
            {terms.map((t) => (
              <section
                key={t.id}
                id={t.id}
                className="border border-surface-200 rounded-lg p-5 bg-white scroll-mt-20"
              >
                <h2 className="text-xl font-semibold text-primary mb-1">{t.name}</h2>
                <p className="text-sm font-medium text-text mb-3">{t.short}</p>
                <p className="text-text leading-relaxed">{t.description}</p>
                {t.link && (
                  <p className="mt-3 text-sm">
                    <Link
                      href={t.link.href}
                      className="text-primary hover:underline font-medium"
                    >
                      {t.link.label} &rarr;
                    </Link>
                  </p>
                )}
              </section>
            ))}
          </div>

          <p className="mt-12 text-sm text-text-muted">
            Found a term that should be added or corrected?{' '}
            <Link href="/contact">Email us</Link>. Methodology and source list at{' '}
            <Link href="/data-sources">data sources</Link>; corrections log at{' '}
            <Link href="/corrections">corrections</Link>.
          </p>
        </article>
      </div>
    </>
  )
}

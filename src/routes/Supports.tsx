import HeroBar from '@/shared/HeroBar'
import { supportSections } from '@/data/supports'

export default function Supports() {
  return (
    <div>
      <HeroBar src="/assets/Support & Lifelines Header.png" alt="Support & Lifelines" />
      
      <section className="container-xxl pt-10 pb-16">
        {/* Main Title */}
        <h1 className="font-display font-semibold mb-8" style={{ fontSize: '64px', lineHeight: '1.1' }}>
          Support & Lifelines
        </h1>

        {/* Introduction Text */}
        <p className="text-gray-600 mb-16" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px', lineHeight: '1.8' }}>
          This page brings together trusted support and resource links for the LGBTQ+ community, covering mental health, discrimination, healthcare, education, legal rights, and community networks. Our goal is to make it easier to find help, connect with supportive organizations, and feel less alone in facing challenges.
        </p>

        {/* Sections - Alternating Layout with spacing */}
        <div className="space-y-60"> {/* Increased spacing between sections */}
          {supportSections.map((section, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={section.id} className="support-section">
                {/* Alternating Content Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {isEven ? (
                    <>
                      {/* Even rows: Image on left, Title and Text on right */}
                      <div>
                        <img 
                          src={section.image} 
                          alt={section.title}
                          className="w-full rounded-2xl object-cover"
                          style={{ 
                            minHeight: '650px', // Set minimum height
                            maxHeight: '700px', // Set maximum height
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="space-y-6">
                        {/* Section Title - aligned with text on right */}
                        <h2 className="font-display font-bold" style={{ 
                          fontSize: '48px', 
                          lineHeight: '1.1',
                          wordWrap: 'break-word'
                        }}>
                          {section.title}
                        </h2>
                        
                        {/* Challenges Description */}
                        <p className="text-gray-600" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px', lineHeight: '1.6' }}>
                          {section.challenges}
                        </p>

                        {/* Solutions */}
                        <div>
                          <h3 className="font-bold mb-4" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '24px' }}>
                            {section.solutions.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.solutions.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px' }}>
                                <span className="mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Support Resources */}
                        <div>
                          <h3 className="font-bold mb-4" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '24px' }}>
                            {section.supportResources.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.supportResources.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px' }}>
                                <span className="mr-2 mt-1">•</span>
                                <span>
                                  {item.link ? (
                                    <>
                                      {item.text.split('(')[0]}
                                      {item.text.includes('(') && '('}
                                      {item.link.startsWith('http') ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                          {item.link}
                                        </a>
                                      ) : (
                                        <span className="text-blue-600">{item.link}</span>
                                      )}
                                      {item.text.includes(')') && ')'}
                                    </>
                                  ) : (
                                    item.text
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Odd rows: Title and Text on left, Image on right */}
                      <div className="space-y-6">
                        {/* Section Title - aligned with text on left */}
                        <h2 className="font-display font-bold" style={{ 
                          fontSize: '48px', 
                          lineHeight: '1.1',
                          wordWrap: 'break-word'
                        }}>
                          {section.title}
                        </h2>
                        
                        {/* Challenges Description */}
                        <p className="text-gray-600" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px', lineHeight: '1.6' }}>
                          {section.challenges}
                        </p>

                        {/* Solutions */}
                        <div>
                          <h3 className="font-bold mb-4" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '24px' }}>
                            {section.solutions.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.solutions.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px' }}>
                                <span className="mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Support Resources */}
                        <div>
                          <h3 className="font-bold mb-4" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '24px' }}>
                            {section.supportResources.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.supportResources.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '20px' }}>
                                <span className="mr-2 mt-1">•</span>
                                <span>
                                  {item.link ? (
                                    <>
                                      {item.text.split('(')[0]}
                                      {item.text.includes('(') && '('}
                                      {item.link.startsWith('http') ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                          {item.link}
                                        </a>
                                      ) : (
                                        <span className="text-blue-600">{item.link}</span>
                                      )}
                                      {item.text.includes(')') && ')'}
                                    </>
                                  ) : (
                                    item.text
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <img 
                          src={section.image} 
                          alt={section.title}
                          className="w-full rounded-2xl object-cover"
                          style={{ 
                            minHeight: '650px', // Set minimum height
                            maxHeight: '700px', // Set maximum height
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

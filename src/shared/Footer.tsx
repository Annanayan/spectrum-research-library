import { Link } from 'react-router-dom'
import Container from '../components/shared/Container'
import PageViewCounter from '../components/shared/PageViewCounter'

export default function Footer() {
  return (
    <footer className="bg-sr-footer-bg text-sr-footer-text mt-16">
      <Container>
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Site Info */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold text-sr-footer-text">
                Spectrum Research Library
              </h3>
              <p className="text-sm leading-6 text-sr-footer-text opacity-80 max-w-md">
                A digital hub dedicated to LGBTQ+ studies and support. We bring together research-based insights,
                curated support resources, and recommended literature to foster understanding and well-being.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-sr-footer-text mb-4">Navigate</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-sr-footer-text opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="text-sm text-sr-footer-text opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Books & Journals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/supports"
                    className="text-sm text-sr-footer-text opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Support & Lifeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="/challenges/coming-out-anxiety"
                    className="text-sm text-sr-footer-text opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Challenges
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-sr-footer-text mb-4">Connect</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-sr-footer-text opacity-80">
                    <span className="block">Contact:</span>
                    <span>nmgwhmly@gmail.com</span>
                  </p>

                  {/* YanSpace Studio */}
                  <div className="flex items-center mt-2">
                    <img
                      src="/assets/YanSpace.png"
                      alt="YanSpace Studio Logo"
                      className="w-7 h-7 object-contain transition-transform hover:scale-110 mr-2"
                      style={{
                        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))'
                      }}
                    />
                    <span className="text-sm text-sr-footer-text opacity-70">YanSpace</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="text-sr-footer-text opacity-60 hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.93 8.44-9.94z"/>
                    </svg>
                  </span>
                  <a
                    href="https://www.linkedin.com/in/yan-wang-56847a1b3"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sr-footer-text opacity-60 hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.94 6.5A2.44 2.44 0 1 1 6.94 1.6a2.44 2.44 0 0 1 0 4.9zM2.7 8.28h4.49V22H2.7zM15.59 8.06c-2.39 0-3.45 1.31-3.94 2.22V8.28H7.17V22h4.48v-7.28c0-1.92.36-3.78 2.74-3.78 2.35 0 2.39 2.2 2.39 3.9V22h4.49v-7.97c0-3.97-2.11-5.97-5.68-5.97z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <PageViewCounter className="opacity-50" />
            </div>
            <p className="text-sm text-sr-footer-text opacity-60">
              © 2025 Spectrum Research Library. All rights reserved.
            </p>
            <p className="text-xs text-sr-footer-text opacity-50 mt-2">
              This platform is for educational and informational purposes only.
              It is not a substitute for professional medical or mental health advice.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
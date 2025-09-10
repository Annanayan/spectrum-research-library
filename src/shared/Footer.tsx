export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container-xxl grid md:grid-cols-2 gap-8 py-10">
        <div>
          <p className="footer-small footer-pink font-medium">
            Spectrum Research Library is dedicated 
            to advancing LGBTQ+ knowledge, 
            providing accessible resources, and 
            supporting communities through 
            research-based insights.
          </p>
          <p className="mt-4 footer-small footer-pink">
            This platform is for educational and informational purposes only. It is not a substitute for professional medical or mental health advice.
          </p>
          <div className="mt-6 footer-icons flex items-center gap-5 icon-gray">
            <span aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.93 8.44-9.94z"/></svg>
            </span>
            <a aria-label="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/in/yan-wang-56847a1b3" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5A2.44 2.44 0 1 1 6.94 1.6a2.44 2.44 0 0 1 0 4.9zM2.7 8.28h4.49V22H2.7zM15.59 8.06c-2.39 0-3.45 1.31-3.94 2.22V8.28H7.17V22h4.48v-7.28c0-1.92.36-3.78 2.74-3.78 2.35 0 2.39 2.2 2.39 3.9V22h4.49v-7.97c0-3.97-2.11-5.97-5.68-5.97z"/></svg>
            </a>
            <span aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.03 3.03 0 0 0-2.13-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.37.56A3.03 3.03 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.03 3.03 0 0 0 2.13 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.37-.56a3.03 3.03 0 0 0 2.13-2.14c.33-1.87.5-3.73.5-5.8 0-2.07-.17-3.93-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z"/></svg>
            </span>
            <span aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6.01 4.86.07 1.17.06 1.95.24 2.4.41.6.23 1.03.51 1.48.96.45.45.73.88.96 1.48.17.45.35 1.23.41 2.4.06 1.26.07 1.66.07 4.86s-.01 3.6-.07 4.86c-.06 1.17-.24 1.95-.41 2.4a3.84 3.84 0 0 1-.96 1.48 3.84 3.84 0 0 1-1.48.96c-.45.17-1.23.35-2.4.41-1.26.06-1.61.07-4.86.07s-3.6-.01-4.86-.07c-1.17-.06-1.95-.24-2.4-.41a3.84 3.84 0 0 1-1.48-.96 3.84 3.84 0 0 1-.96-1.48c-.17-.45-.35-1.23-.41-2.4C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.86c.06-1.17.24-1.95.41-2.4.23-.6.51-1.03.96-1.48.45-.45.88-.73 1.48-.96.45-.17 1.23-.35 2.4-.41C8.4 2.21 8.8 2.2 12 2.2m0 1.8c-3.15 0-3.52.01-4.76.07-1.02.05-1.58.22-1.95.36-.49.19-.84.41-1.2.77-.36.36-.58.7-.77 1.2-.14.37-.31.93-.36 1.95-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.02.22 1.58.36 1.95.19.49.41.84.77 1.2.36.36.7.58 1.2.77.37.14.93.31 1.95.36 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.02-.05 1.58-.22 1.95-.36.49-.19.84-.41 1.2-.77.36-.36.58-.7.77-1.2.14-.37.31-.93.36-1.95.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.02-.22-1.58-.36-1.95a2.05 2.05 0 0 0-.77-1.2 2.05 2.05 0 0 0-1.2-.77c-.37-.14-.93-.31-1.95-.36-1.24-.06-1.61-.07-4.76-.07zm0 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 2.1a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm5.1-2.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"/></svg>
            </span>
          </div>
        </div>
        <div className="md:text-right">
          <p className="footer-gray">© 2025 Spectrum Research Library. All rights reserved.</p>
          <p className="mt-2 footer-small footer-pink">Contact: <span>nmgwhmly@gmail.com</span></p>
        </div>
      </div>
    </footer>
  )
}

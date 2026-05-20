class AppNavbar extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active-page');

        this.innerHTML = `
      <nav class="fixed w-full z-50 bg-surface-light/95 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-primary/30 transition-colors duration-300">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between h-20 items-center">
                  <a href="index.html" class="flex-shrink-0 flex items-center gap-3">
                      <div class="relative w-12 h-12 flex items-center justify-center">
                          <img src="/assets/favicon.png" alt="FG Finance" class="w-10 h-10 object-contain" />
                      </div>
                      <div class="hidden md:block h-8 w-px bg-secondary/30 dark:bg-secondary/20"></div>
                      <div class="hidden md:flex flex-col justify-center">
                          <span class="text-xs font-semibold tracking-widest uppercase text-primary/70 dark:text-secondary/70">Finance</span>
                          <span class="text-xs font-semibold tracking-widest uppercase text-primary/70 dark:text-secondary/70">Limited</span>
                      </div>
                  </a>
                  <div class="hidden md:flex items-center space-x-8">
                      <a class="${activePage === 'home' ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary font-medium transition'}" href="index.html">Home</a>
                      <a class="${activePage === 'about' ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary font-medium transition'}" href="about.html">About Us</a>
                      <a class="${activePage === 'services' ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary font-medium transition'}" href="services.html">Our Services</a>
                      <a class="${activePage === 'resources' ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary font-medium transition'}" href="resources.html">Resources</a>
                      <a class="${activePage === 'contact' ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary font-medium transition'}" href="contact.html">Contact</a>
                  </div>
                  <div class="flex items-center space-x-4">
                      <button class="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition theme-toggle">
                          <span class="material-icons dark:hidden">dark_mode</span>
                          <span class="material-icons hidden dark:block">light_mode</span>
                      </button>
                      <a class="hidden sm:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-primary hover:bg-secondary dark:bg-secondary dark:hover:bg-primary shadow-lg shadow-primary/30 hover:shadow-secondary/35 transition-all duration-300 transform hover:-translate-y-0.5"
                          href="https://crm.fgfinance.co.nz" target="_blank" rel="noopener noreferrer">
                          Broker Login
                      </a>
                  </div>
                  <div class="md:hidden flex items-center">
                      <button class="text-gray-500 dark:text-gray-300 hover:text-secondary focus:outline-none mobile-menu-btn">
                          <span class="material-icons text-3xl">menu</span>
                      </button>
                  </div>
              </div>
          </div>
          <!-- Mobile Menu -->
          <div class="md:hidden hidden bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-primary/20 mobile-menu">
              <div class="px-4 py-4 space-y-3">
                  <a class="${activePage === 'home' ? 'block text-secondary font-semibold py-2' : 'block text-gray-700 dark:text-gray-300 hover:text-secondary py-2'}" href="index.html">Home</a>
                  <a class="${activePage === 'about' ? 'block text-secondary font-semibold py-2' : 'block text-gray-700 dark:text-gray-300 hover:text-secondary py-2'}" href="about.html">About Us</a>
                  <a class="${activePage === 'services' ? 'block text-secondary font-semibold py-2' : 'block text-gray-700 dark:text-gray-300 hover:text-secondary py-2'}" href="services.html">Our Services</a>
                  <a class="${activePage === 'resources' ? 'block text-secondary font-semibold py-2' : 'block text-gray-700 dark:text-gray-300 hover:text-secondary py-2'}" href="resources.html">Resources</a>
                  <a class="${activePage === 'contact' ? 'block text-secondary font-semibold py-2' : 'block text-gray-700 dark:text-gray-300 hover:text-secondary py-2'}" href="contact.html">Contact</a>
                  <a class="block bg-primary text-white text-center px-6 py-2.5 rounded-full font-semibold mt-2 hover:bg-secondary dark:bg-secondary dark:hover:bg-primary transition"
                      href="https://crm.fgfinance.co.nz" target="_blank" rel="noopener noreferrer">Broker Login</a>
              </div>
          </div>
      </nav>
    `;

        // Re-initialize event listeners for this instance
        const themeToggleBtn = this.querySelector('.theme-toggle');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            });
        }

        const mobileMenuBtn = this.querySelector('.mobile-menu-btn');
        const mobileMenu = this.querySelector('.mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

customElements.define('app-navbar', AppNavbar);

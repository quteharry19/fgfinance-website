class AppFamily extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="py-24 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-12">Part of the Family</h2>
                    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <a href="https://fgis.co.nz" target="_blank" rel="noopener noreferrer"
                            class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/60 transition-all hover:shadow-lg text-left">
                            <div class="flex items-center justify-between mb-4">
                                <div class="h-20 w-44 flex items-center shrink-0">
                                    <img src="/assets/fgis_logo.png" alt="FGIS Insurance Services"
                                        class="max-h-20 max-w-44 w-auto dark:hidden" />
                                    <img src="/assets/fgis_logo_dark.png" alt="FGIS Insurance Services"
                                        class="hidden max-h-20 max-w-44 w-auto dark:block" />
                                </div>
                                <svg aria-hidden="true" class="w-7 h-7 text-primary dark:text-accent group-hover:translate-x-1 transition-transform"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">Providing comprehensive insurance brokerage
                                services for tailored protection.</p>
                            <span class="text-primary dark:text-accent font-medium text-sm">Visit FGIS →</span>
                        </a>
                        <a href="https://fglife.co.nz" target="_blank" rel="noopener noreferrer"
                            class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/60 transition-all hover:shadow-lg text-left">
                            <div class="flex items-center justify-between mb-4">
                                <div class="h-20 w-44 flex items-center overflow-hidden shrink-0">
                                    <img src="/assets/fglife.png" alt="FG Life"
                                        class="w-44 h-20 object-cover dark:hidden" />
                                    <img src="/assets/fglife_logo_dark.png" alt="FG Life"
                                        class="hidden w-44 h-20 object-cover dark:block" />
                                </div>
                                <svg aria-hidden="true" class="w-7 h-7 text-primary dark:text-accent group-hover:translate-x-1 transition-transform"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">Life and health insurance solutions designed to
                                secure your family's future.</p>
                            <span class="text-primary dark:text-accent font-medium text-sm">Visit FG Life →</span>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('app-family', AppFamily);

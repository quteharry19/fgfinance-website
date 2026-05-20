class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="bg-background-dark text-white border-t border-primary/20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div>
                      <div class="flex items-center gap-2 mb-6">
                          <img src="/assets/favicon.png" alt="FG Finance" class="w-10 h-10 object-contain" />
                          <div class="h-6 w-px bg-secondary/30"></div>
                          <div class="flex flex-col">
                              <span class="text-[10px] font-semibold tracking-widest uppercase text-secondary">Finance</span>
                              <span class="text-[10px] font-semibold tracking-widest uppercase text-secondary">Limited</span>
                          </div>
                      </div>
                      <p class="text-gray-400 text-sm leading-relaxed mb-6">
                          FG Finance Limited provides secure, flexible premium funding solutions for businesses across New Zealand.
                      </p>
                      <div class="flex space-x-4">
                          <a class="text-gray-400 hover:text-secondary transition" href="#"><span class="material-icons">facebook</span></a>
                          <a class="text-gray-400 hover:text-secondary transition" href="#"><span class="material-icons">link</span></a>
                      </div>
                  </div>
                  <div>
                      <h3 class="text-lg font-bold mb-4 font-serif text-secondary">Quick Links</h3>
                      <ul class="space-y-3 text-sm text-gray-400">
                          <li><a class="hover:text-secondary transition" href="about.html">About Us</a></li>
                          <li><a class="hover:text-secondary transition" href="services.html">Our Services</a></li>
                          <li><a class="hover:text-secondary transition" href="resources.html">Resources & Library</a></li>
                          <li><a class="hover:text-secondary transition" href="https://crm.fgfinance.co.nz" target="_blank" rel="noopener noreferrer">Broker Login</a></li>
                          <li><a class="hover:text-secondary transition" href="contact.html">Contact Support</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="text-lg font-bold mb-4 font-serif text-secondary">Legal & Policies</h3>
                      <ul class="space-y-3 text-sm text-gray-400">
                          <li><a class="hover:text-secondary transition" href="privacy.html">Privacy Policy</a></li>
                          <li><a class="hover:text-secondary transition" href="terms.html">Terms and Conditions</a></li>
                          <li><a class="hover:text-secondary transition" href="tmd.html">Target Market Determination</a></li>
                          <li><a class="hover:text-secondary transition" href="fees.html">Fee Schedule</a></li>
                          <li><a class="hover:text-secondary transition" href="complaints.html">Resolving Complaints Guide</a></li>
                          <li><a class="hover:text-secondary transition" href="direct-debit.html">Direct Debit Agreement</a></li>
                          <li><a class="hover:text-secondary transition" href="hardship.html">Financial Hardship Policy</a></li>
                          <li><a class="hover:text-secondary transition" href="code-of-practice.html">Code of Practice</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="text-lg font-bold mb-4 font-serif text-secondary">Contact</h3>
                      <ul class="space-y-3 text-sm text-gray-400">
                          <li class="flex items-start gap-3">
                              <span class="material-icons text-secondary text-sm mt-1">place</span>
                              <span>430 Ulster Street, Beerescourt<br />Hamilton 3200, Waikato<br />New Zealand</span>
                          </li>
                          <li class="flex items-center gap-3">
                              <span class="material-icons text-secondary text-sm">email</span>
                              <a class="hover:text-secondary transition" href="mailto:admin@fgfinance.co.nz">admin@fgfinance.co.nz</a>
                          </li>
                          <li class="flex items-center gap-3">
                              <span class="material-icons text-secondary text-sm">phone</span>
                              <a class="hover:text-secondary transition" href="tel:0800344700">0800 344 700</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="border-t border-primary/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                  <p>&copy; 2026 FG Finance Limited. All rights reserved.</p>
                  <div class="flex items-center gap-2 mt-4 md:mt-0">
                      <span class="material-icons text-lg text-secondary">verified_user</span>
                      <span>Registered Financial Service Provider (FSP) | Member of FSCL Dispute Scheme</span>
                  </div>
              </div>
          </div>
      </footer>
    `;
    }
}

customElements.define('app-footer', AppFooter);

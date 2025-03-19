// Using export default directly to avoid TypeScript issues
export default {
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  
  // Google Analytics and Search Console Configuration
  app: {
    head: {
      meta: [
        // Replace the content value with your Google Search Console verification code
        { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' }
      ],
      script: [
        {
          // Replace G-XXXXXXXXXX with your actual Google Analytics measurement ID
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
          type: 'text/javascript'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
          async: true
        }
      ]
    }
  }
}

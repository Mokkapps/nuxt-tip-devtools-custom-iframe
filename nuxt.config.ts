// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: {
    enabled: true,
  },
  modules: [
    '@nuxt/devtools',
    (inlineOptions, nuxt) => {
      nuxt.hook('devtools:customTabs', (tabs) => {
        tabs.push({
          // unique identifier
          name: 'doom',
          // title to display in the tab
          title: 'Doom',
          // any icon from Iconify, or a URL to an image
          icon: 'carbon:apps',
          // iframe view
          view: {
            type: 'iframe',
            src: 'https://silentspacemarine.com/',
          },
        });
      });
    },
  ],
});

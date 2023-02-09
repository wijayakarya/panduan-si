// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Panduan S.I.',
  tagline: 'Dokumentasi pekerjaan di Sistem Informasi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wijayakarya.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/panduan-si/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wijayakarya', // Usually your GitHub org/user name.
  projectName: 'panduan-si', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wijayakarya/panduan-si/edit/main/',
          routeBasePath: '/', // Serve the docs at the site's root, rename index.js to index_disabled.js in src/pages
          sidebarCollapsed: false, // Whether sidebar categories are collapsed by default
          showLastUpdateAuthor: true, // Whether to display the author who last updated the doc
          showLastUpdateTime: true, // Whether to display the last date the doc was updated
        },
        blog: false, // Optional: disable the blog plugin
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wijayakarya/panduan-si/edit/main/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true, // Make the entire sidebar hideable
        },
      },
      navbar: {
        title: 'panduan',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wijayakarya/panduan-si',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Media Sosial',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/ptwijayakarya',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/ptwika',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PTWijayaKarya',
              },
            ],
          },
          {
            title: 'Lainnya',
            items: [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: 'Helpdesk',
                href: 'https://sla.wika.co.id',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wijayakarya/panduan-si',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sistem Informasi. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

import { p } from '@antfu/utils'
import { defineConfig } from 'vitepress'

const sidebar = {
  '/': [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'API',
      children: [{ text: 'Doc', link: '/doc/' }],
    },
  ],
}

export default defineConfig({
  lang: 'en-US',
  title: 'Ts lib template',
  description: 'Ts lib template.',
  themeConfig: {
    repo: 'abmatrix/ts-lib-template',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    },
    sidebar: sidebar,
  },
})

import { defineConfig } from 'vitepress'
import mdItCustomAttrs  from 'markdown-it-custom-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tech Notes",
  lang: 'zh',
  srcDir: './docs',
  description: "A VitePress Site",
  markdown:{
    lineNumbers: true, 
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
          'data-fancybox': "gallery"
      });
    }
  },
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  rewrites: {
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Java', link: '/java/thread', activeMatch: '/java/' },
      { text: 'Mysql', link: '/mysql/', activeMatch: '/mysql/' },
      { text: '示例', link: '/example/markdown-examples', activeMatch: '/example/' }
    ],

    logo: '/images/favicon.png',

    sidebar: {
      '/java/':  [
        {
          text: 'Java',
          collapsed: false,
          items: [
            { text: '多线程', link: '/java/thread' },
          ]
        }
      ],
      '/mysql/':  [
        {
          text: 'Mysql',
          collapsed: false,
          items: [
            { text: 'Mysql索引', link: '/mysql/' },
            { text: 'Mysql优化', link: '/mysql/optimize' },
            { text: 'Explain', link: '/mysql/explain' },
          ]
        }
      ],
      '/example/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/example/markdown-examples' },
            { text: 'Runtime API Examples', link: '/example/api-examples' }
          ]
        }
      ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    returnToTopLabel: "返回顶部",

    sidebarMenuLabel:"菜单",

    outline: {
      level: [2, 6],
      label:"导航"
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    search: {
      provider: 'local',
      options: {

        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }

  }
})

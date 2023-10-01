module.exports = {
    title: "DaCore Docs",
    description: "DaCore manual",
    base:'/DaCoreDocs',
    locales: {
        '/': {
            lang: 'en-US',
            title: "DaCore Docs",
            description: "DaCore Docs Static Site Generator"
        },
        '/zh-CN/': {
            lang: 'zh-CN',
            title: "DaCore Docs",
            description: "DaCore Docs Static Site Generator"
        },
        '/zh-TW/': {
            lang: 'zh-TW',
            title: "DaCore Docs"
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'v1.x', link: '/en-US/v1/', ariaLabel: 'v1' }
                ],
                sidebar: {
                    '/': [/* ... */],
                    '/en-US/v1/': [/* ... */]
                }
            },
            '/zh-CN/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: 'v1.x', link: '/zh-CN/v1/' }
                ],
                sidebar: {
                    '/zh-CN/': [/* ... */],
                    '/zh-CN/v1/': [/* ... */]
                }
            },
            '/zh-TW/': {
                // 多语言下拉菜单的标题
                selectText: '選擇語系',
                // 该语言在下拉菜单中的标签
                label: '繁體中文',
                // 编辑链接文字
                editLinkText: '在GitHub上編輯此頁',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "發現新內容可用.",
                        buttonText: "重整"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: 'v1.x', link: '/zh-TW/v1/' }
                ],
                sidebar: {
                    '/zh-TW/': [/* ... */],
                    '/zh-TW/v1/': [/* ... */]
                }
            }
        }
    },
    "copyright":"@sohophp"
}
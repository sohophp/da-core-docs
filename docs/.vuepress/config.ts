import {defaultTheme} from 'vuepress';

export default {
    title: "DaCore Docs",
    description: "DaCore manual",
    base: '/da-core-docs/',
    locales: {
        '/zh-CN/': {
            lang: 'zh-CN',
        },
        '/zh-TW/': {
            lang: 'zh-TW',
        }
    },
    "copyright": "@sohophp",
    // displayFooter: true,
    theme: defaultTheme({
        locales: {
            '/zh-CN/': {
                selectLanguageName: '简体中文',
            },
            '/zh-TW/': {
                selectLanguageName: '繁體中文',
            },
        },
        navbar: [
            {
                text: '指南@v1.x',
                children: [
                    '/zh-CN/v1/guide/guide-1',
                    '/zh-CN/v1/guide/guide-2',
                    '/zh-CN/v1/guide/guide-3',
                ]
            },
            {
                text: '参考@v1.x',
                children: [
                    '/zh-CN/v1/reference/cli.md',
                    '/zh-CN/v1/reference/composer.md',
                    '/zh-CN/v1/reference/configuration.md',
                    '/zh-CN/v1/reference/controller.md',
                    '/zh-CN/v1/reference/directory-structure.md',
                    '/zh-CN/v1/reference/entity.md',
                    '/zh-CN/v1/reference/git.md',
                    '/zh-CN/v1/reference/migration.md',
                    '/zh-CN/v1/reference/model.md',
                    '/zh-CN/v1/reference/module.md',
                    '/zh-CN/v1/reference/powershell.md',
                    '/zh-CN/v1/reference/response.md',
                    '/zh-CN/v1/reference/routing.md',
                    '/zh-CN/v1/reference/template-twig.md',
                    '/zh-CN/v1/reference/view.md'
                ]
            }
        ],

    })
}

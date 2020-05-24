module.exports = {
    base: "/blog/",
    title: "VuePress Blog",
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.svg' }]
    ],
    themeConfig: {
        logo: "/img/logo.png",
        nav: [
            {text: 'Java', link: '/java/'},
            {text: 'Spring', link: ''},
            {text: 'Tags', link: '/tag/'},
        ],
        displayAllHeaders: true,
        sidebar: 'auto',
        smoothScroll: true
    },
    markdown: {
        lineNumbers: true,
    },
};

// vuepress config 설정 파
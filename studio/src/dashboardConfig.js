export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea05e73f66f9aef5d86a3f0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6oks2pxr',
                  apiId: '72db6c26-da2e-4107-a5d9-9eec311e5919'
                },
                {
                  buildHookId: '5ea05e735b92d0645abdabe9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7yjxsfe1',
                  apiId: '7c58a33d-8520-45bd-a9f5-2ffdb9ae3b52'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yaseen1989/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7yjxsfe1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

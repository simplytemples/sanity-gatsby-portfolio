export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed7ee017726868e431cbed5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1w2qp37i',
                  apiId: '6d294ac3-a004-421b-8bd1-68e14ffc9629'
                },
                {
                  buildHookId: '5ed7ee01deec0601b9a94c30',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-av4rowtf',
                  apiId: '3167c6bc-fa12-4aae-ad06-44fa4bb853e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simplytemples/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-av4rowtf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

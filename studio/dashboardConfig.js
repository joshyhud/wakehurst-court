export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6235911865daf31a96b25137',
                  title: 'Sanity Studio',
                  name: 'wakehurst-court-studio',
                  apiId: '84391de3-ec04-45ed-8589-b1098f348b69'
                },
                {
                  buildHookId: '623591181ce5760b76865d3b',
                  title: 'Landing pages Website',
                  name: 'wakehurst-court',
                  apiId: 'b53b757f-6e26-4252-9516-b2bed79fa46c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshyhud/wakehurst-court',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://wakehurst-court.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

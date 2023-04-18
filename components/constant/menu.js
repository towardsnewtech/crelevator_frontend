export const MENUITEMS = [
   {
      title: 'Home', type: 'link', path: '/'
   },
   {
      title: 'Products', type: 'sub', children: [
         {
            title: 'COMMECIAL', type: 'sub', children: [
               { path: '/product-details/right_sidebar', title: 'Shat Components', type: 'link' },
               { path: '/product-details/no-sidebar', title: 'Doors', type: 'link' },
               { path: '/product-details/right_sidebar', title: 'Safety', type: 'link' },
               { path: '/product-details/no-sidebar', title: 'Safety', type: 'link' },
               { path: '/product-details/1', title: 'Electric', type: 'link' },
            ]
         },
         {
            title: "RESIDENTIAL", type: "sub", children: [
               { path: '/product-details/right_sidebar', title: 'Shat Components', type: 'link' },
               { path: '/product-details/no-sidebar', title: 'Doors', type: 'link' },
               { path: '/product-details/right_sidebar', title: 'Safety', type: 'link' },
               { path: '/product-details/no-sidebar', title: 'Safety', type: 'link' },
               { path: '/product-details/1', title: 'Electric', type: 'link' },
            ]
         },
      ]
   },
   {
      title: 'ABOUT US', type: 'link', path: '/page/about-us'
   },
   {
      title: 'CONTACT US', type: 'link', path: '/page/contact-us'
   },
   {
      title: 'FAQ', type: 'link', path: '/page/faq'
   },
]


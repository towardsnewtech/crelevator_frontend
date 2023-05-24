export const MENUITEMS = [
   {
      title: 'ABOUT US', type: 'link', path: '/about-us'
   },
   {
      title: 'Products', type: 'sub', path: '/products', children: []
   },
   {
      title: 'RESOURCES', type: 'sub', path: '/resources' , children: [
         {title: 'Technical Support', type: 'sub', children: [
            {title: 'Training Videos', type: 'link', path: '/resources/technical-support/training-videos'},
            {title: 'PDFs Materials', type: 'link', path: '/resources/technical-support/pdfs-materials'}
         ]},
         {title: 'Forms', type: 'link', path: '/resources/forms'},
         {title: 'FAQ', type: 'link', path: '/resources/faq'}
      ]
   },
   {
      title: 'CONTACT US', type: 'sub', path: '/contact-us', children: [
         {title: 'Quote Request', type: 'link', path: '/contact-us/quote-request'},
         {title: 'CRES Information', type: 'link', path: '/contact-us/cres-information'},
         {title: 'News', type: 'link', path: '/contact-us/news'}
      ]
   },
   {
      title: 'REQUEST A QUOTE', type: 'link', path: '/contact-us/quote-request'
   },
]


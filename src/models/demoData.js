//Demo user data
const users = [{
        id: '1',
        name: 'zaher',
        email: 'zaher@example.com',
        age: 23
    },
    {
        id: '2',
        name: 'arun',
        email: 'arun@example.com'
    },
    {
        id: '3',
        name: 'sarah',
        email: 'sarah@example.com',
        age: 19
    },

]
const posts = [{
        id: '1',
        title: 'Cillum tempor fugiat veniam aute deserunt culpa in commodo sit.',
        body: 'Proident Lorem commodo ad voluptate pariatur ea nostrud minim. Id id reprehenderit do ipsum. Duis adipisicing est ullamco irure est tempor in enim aliquip id. Aliqua nisi anim elit laboris. Magna qui sunt tempor in est ea minim est mollit sit Lorem sint.',
        published: true,
        author: '1'
    },
    {
        id: '2',
        title: 'Enim quis sit non cupidatat.',
        body: 'Fugiat laboris dolor amet elit adipisicing dolor ullamco magna velit adipisicing irure do exercitation. Eu aliquip anim labore deserunt ad esse laborum enim amet cillum officia ad veniam tempor. Esse qui magna enim cillum sint pariatur eiusmod aute aliquip in. Proident nostrud officia anim enim elit est id laborum ipsum consequat sit. Veniam ullamco nulla aliqua laborum sint. Excepteur quis velit eiusmod ut labore excepteur.',
        published: false,
        author: '1'
    },
    {
        id: '3',
        title: 'Laborum occaecat ullamco voluptate dolore nostrud in Lorem nulla nisi fugiat Lorem culpa veniam do.',
        body: 'Incididunt nostrud minim fugiat nulla commodo. Dolor sit cupidatat ad Lorem minim consequat occaecat exercitation occaecat elit deserunt aliqua. Officia do eu dolore pariatur dolor sint qui. Aute incididunt non culpa voluptate.',
        published: true,
        author: '3'
    },

]
const comments = [{
        id: '1',
        text: 'Ipsum culpa consectetur fugiat commodo ullamco non ipsum culpa ut enim voluptate quis.',
        author: '2',
        post: '1'
    },
    {
        id: '2',
        text: 'Consectetur occaecat laborum sit aliquip do non ea eiusmod.',
        author: '2',
        post: '1'
    },
    {
        id: '3',
        text: 'Ex laboris sint enim veniam eiusmod deserunt enim.',
        author: '1',
        post: '3'
    },
    {
        id: '4',
        text: 'Et nostrud laborum ex eiusmod mollit anim.',
        author: '3',
        post: '2'
    }
]
export {
    users,
    posts,
    comments
}
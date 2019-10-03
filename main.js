const org1_depts = [
    {
        name:'accounting',
        children:[
            {name: 'accounting payable', children:[]},
            {name: 'accounting recieivable', children:[]},
        ],
    },
    {
        name: 'finance',
        children: [],
    },
] 

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children:[]},
            {name: 'accounts receivable',
            children:[{name: 'cash', children: []}, {name: 'check', children:[]}],
            },
        ],
    },
    {
        name: 'finance',
        children: [{name: 'investment', children: []}],
    },
]

var OpenBullet = document.querySelector('ul.OpenBullet');
var SquareBullet = document.querySelector('ul.SquareBullet');

function PrintDepts(org1_depts, org2_depts){
    OpenBullet.style.display = 'block';
    SquareBullet.style.display = 'block';

    return org1_depts, org2_depts  
}
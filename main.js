

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

function PrintDepts(depts, parent){
    if(depts.length > 0) {
        var ul = document.createElement('ul');
        parent.appendChild(ul);
    }

    for (var i = 0; i < depts.length; i++){
        var li = document.createElement('li');
        li.innerHTML = depts[i].name;
        ul.appendChild(li);

    if (depts[i].children){
        PrintDepts(depts[i].children, li);
    } 
    }
    
}
const org1 = document.getElementById("org1");
const org2 = document.getElementById("org2");

PrintDepts(org1_depts, org1);
PrintDepts(org2_depts, org2);

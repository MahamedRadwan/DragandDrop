
// toggle the dashboard 
let editbutton = document.getElementById('edit-btn');
editbutton.addEventListener('click', () => {
    $(".edit-content").fadeToggle(1000,)
});

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    
});
//add draggable attribute to the html elements that should be dragged
$('.item').attr('draggable', "true");
// drop zone elements
$('.bSlot').attr('dropzone', "move");
$('.mSlot').attr('dropzone', "move");
$('.sSlot').attr('dropzone', "move");


let items = document.querySelectorAll('.item');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('dragstart', dragstart)
    items[i].addEventListener('dragend', dragend)

}
function dragstart() {
    this.classList.add('dragging');

}
function dragend() {
    this.classList.remove('dragging');
}

let bSlot = document.querySelectorAll('.bSlot');
let mSlot = document.querySelectorAll('.mSlot');
let sSlot = document.querySelectorAll('.sSlot');
for (let i = 0; i < bSlot.length; i++) {
    bSlot[i].addEventListener('dragenter', dragEnter);
    bSlot[i].addEventListener('dragleave', dragLeave);
    bSlot[i].addEventListener('dragover', dragOver);
    bSlot[i].addEventListener('drop', dragDrop);
}
for (let i = 0; i < mSlot.length; i++) {
    mSlot[i].addEventListener('dragenter', dragEnter);
    mSlot[i].addEventListener('dragleave', dragLeave);
    mSlot[i].addEventListener('dragover', dragOver);
    mSlot[i].addEventListener('drop', dragDrop);

}
for (let i = 0; i < sSlot.length; i++) {
    sSlot[i].addEventListener('dragenter', dragEnter);
    sSlot[i].addEventListener('dragleave', dragLeave);
    sSlot[i].addEventListener('dragover', dragOver);
    sSlot[i].addEventListener('drop', dragDrop);

}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered')
}
function dragLeave() {
    this.classList.remove('hovered')
    this.classList.add('brdr')

}
function dragOver(e) {
    e.preventDefault();

}

function dragDrop(e) {
    const draggable = document.querySelector('.dragging');
    this.classList.remove('hovered')
    this.classList.remove('brdr')
    this.appendChild(draggable,);
    console.log(e);
}


//chart data//////////////////////////////////////////////////////////////////////////////////
var chartjson = {
    "title": "Students Scores",
    "data": [{
        "name": "Kerry",
        "score": 20
    }, {
        "name": "Teegan",
        "score": 73
    }, {
        "name": "Jamalia",
        "score": 20
    }, {
        "name": "Quincy",
        "score": 89
    }, {
        "name": "Darryl",
        "score": 24
    }, {
        "name": "Jescie",
        "score": 86
    }, {
        "name": "Quemby",
        "score": 96
    }, {
        "name": "McKenzie",
        "score": 71
    }],
    "xtitle": "Secured Marks",
    "ytitle": "Marks",
    "ymax": 100,
    "ykey": 'score',
    "xkey": "name",
    "prefix": "%"
}

//chart colors
var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];

//constants
var TROW = 'tr',
    TDATA = 'td';

var chart = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');
//create the title row
var titlerow = document.createElement(TROW);
//create the title data
var titledata = document.createElement(TDATA);
//make the colspan to number of records
titledata.setAttribute('colspan', chartjson.data.length + 1);
titledata.setAttribute('class', 'charttitle');
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);

chart.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
    barrow.setAttribute('class', 'bars');
    var prefix = chartjson.prefix || '';
    //create the bar data
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    bar.setAttribute('class', colors[i]);
    bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
    bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('colspan', chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
    var legbox = document.createElement('span');
    legbox.setAttribute('class', 'legbox');
    var barname = document.createElement('span');
    barname.setAttribute('class', colors[i] + ' xaxisname');
    var bartext = document.createElement('span');
    bartext.innerText = chartjson.data[i][chartjson.xkey];
    legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

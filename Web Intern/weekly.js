const data = {

week1:{
title:"Introduction",
content:"Started testing system. Met with tester and handed over TCD."
},

week2:{
title:"Week 2",
content:"Supported testing activities and reported issues to dev team."
},

week3:{
title:"Week 3",
content:"Prepared backup test data and improved communication."
},

week4:{
title:"Week 4",
content:"All testing completed successfully."
}

};


document.getElementById("weekSelect").addEventListener("change",function(){

let week=this.value;

if(data[week]){

document.getElementById("weekTitle").innerText=data[week].title;
document.getElementById("weekContent").innerText=data[week].content;

}

});
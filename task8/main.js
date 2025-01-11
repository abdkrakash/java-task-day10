async function newData(){ 
    let response = await fetch("https://api.github.com/users/abdkrakash/repos", { 
    method: "GET",
  });
  
  let data = await response.json();
  
  for(var i=0; i< data.length; i++){
    console.log(data[i].name)
  
  }
  }
   
  newData();

function drawGrid(range) {
    if(Math.sqrt(range)%1!=0){return;}
    let parentContainer = document.getElementById('parentContainer');
    let dimentions = parentContainer.getBoundingClientRect();
    let half = Math.sqrt(range);
    let width = dimentions.width/half;
    let reverse = false;
    let colorArr = ['primary', 'secondary', 'success','danger','warning', 'info', 'light', 'dark'];
    let boxArray = [];
    let j= range;
    let helperArr = [];
    for(let i=j; i>=1; i--){        
        let number = document.createTextNode(i);
        let box = document.createElement("div");
        box.setAttribute("class", `box text-center d-flex justify-content-center align-items-center bg-${colorArr[Math.ceil(Math.random()*colorArr.length)]}`);
        box.style.width = width+'px';
        box.style.height = width+'px';
        box.id=`box-${i}`
        box.appendChild(number);

        helperArr.push(box);
        
        if(i!==range && (i-1)%half===0){
            if(reverse){
                boxArray.push(...helperArr.reverse());
            }else{
                boxArray.push(...helperArr);
            }
            helperArr = [];
            reverse=!reverse;
        }
    }


    
    
        console.log(boxArray);
        // parentContainer.style.height = dimentions.width+'px';
        parentContainer.append(...boxArray);
  }
  drawGrid(100);
  function createDiv(reverse, rowcount, range, parentContainer) {
    while (range > 0) {
      let div = document.createElement("div");
      div.textContent = range;
      div.className = "box";
      container.appendChild(div);
      range--;
    }
  
    reverse = !reverse;
    rowcount++;
    if (rowcount < range) {
      createDiv(reverse, rowcount, range);
    }
  }
  // drawGrid(2);
  
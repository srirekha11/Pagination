function pagination(){
    let size = (contact.length)/10;
        let pageDiv = document.getElementById('pg-Div');

// Previous Button
     let prev = document.createElement('li');
    prev.className = 'page-item';
    prev.id = 'previous';
    prev.innerHTML = `<button class="btn btn-sm btn btn-info" id="previous" onclick="prev()">Prev</button>`;
    pageDiv.appendChild(prev);


//Pagination
    for(let i=1;i<=size;i++){
        let li = document.createElement('li');
        li.className = 'page-item';
        li.innerHTML = `<button class="btn btn-sm btn btn-info" id="${i}" onclick="data(id)">${i}</button>`;
        pageDiv.appendChild(li);
    }


//Next Button
    let next = document.createElement('li');
    next.className = 'page-item'
    next.id = 'Next';
    next.innerHTML = `<button class="btn btn-sm btn btn-info" id="Next" onclick="next()">Next</button>`;
    pageDiv.appendChild(next);
} 

function data(pageNo){
    localStorage.setItem('page',pageNo);
    let j = (pageNo-1)*10;
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';
    for(let i=1;i<=8;i++){
        let tr = document.createElement('tr'); 
          
        let th = document.createElement('th'); 
        th.setAttribute('scope','col')  
        
        th.innerText = contact[j].id;    

        let td1 = document.createElement('td');
        td1.innerText = contact[j].name;

        let td2 = document.createElement('td'); 
        td2.innerText = contact[j].email;

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tBody.appendChild(tr);
        j+=1;
    }
} 

//Prev Button
 function prev(){
    currentPage = localStorage.getItem('page');
    if(currentPage>1){
        data(currentPage-1);
    }else{
        document.getElementById('previous').disabled = true
    }
    
}

//Next Button
function next(){
    currentPage = localStorage.getItem('page');
    if(currentPage==(contact.length/10)){
        document.getElementById('Next').disabled = true
    }
    else{
        data(++currentPage);
    }
    
} 
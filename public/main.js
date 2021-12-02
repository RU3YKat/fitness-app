document.addEventListener('DOMContentLoaded', function () {
    paintTotalCalories();
    let addButton = document.querySelector(".add-btn");
    let delButton = document.querySelector(".delete-btn");
    let updateButton = document.querySelector(".update-btn");
    let backButton = document.querySelector(".back-btn");
    let clearButton = document.querySelector(".clear-btn");
    let li = document.querySelector("#item-list");
    let currentId;
    console.log(li);

    addButton.addEventListener('click', (e) => {
        // send an AJAX request to the APIs  
        paintItem();
        paintTotalCalories();
        //e.preventDefault();
    });

    li.addEventListener('click', (e)=>{
        if(e.target.classList.contains('edit-item')){
            // edit button clicked!
            let idString = e.target.parentElement.parentElement.id;
            let caloriesString = e.target.parentElement.previousElementSibling.innerHTML;
            let calories = caloriesString.substr(0,caloriesString.indexOf(' '));
            let itemName = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;
            document.querySelector("#item-name").value = itemName;
            document.querySelector("#item-calories").value = calories;
            let idArray = idString.split('-');
            currentId = idArray[1];
        }
    });

    delButton.addEventListener('click', (e)=>{
        // delete item
        deleteItem(currentId);
        //e.preventDefault();
    });

    updateButton.addEventListener('click', (e)=>{
        // update button
        let itemName = document.querySelector("#item-name").value;
        let itemCalorie = document.querySelector("#item-calories").value;
        updateItem(currentId, itemName, itemCalorie);
        //e.preventDefault();
    });

    backButton.addEventListener('click', (e)=>{
        clearFields();
    });

    clearButton.addEventListener('click', (e)=>{
        deleteAll();
    })

});

function deleteAll(){
    const delAll = fetch(`/api/foods`, {
        method : 'delete'
    });

    delAll.then((response)=>{
        location.reload();
        console.log(response);
    }, (reject)=>{
        console.log(reject);
    });
}

function clearFields(){
    document.querySelector("#item-name").value = '';
    document.querySelector("#item-calories").value = '';
}

function updateItem(id, meal, calorie){
    const updateItem = fetch(`/api/foods/${id}`,{
        method : 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id : id, food_name : meal, calories:calorie})
    });

    updateItem.then((response)=>{
        location.reload();
        console.log(response);
    },(reject)=>{
        console.log(reject);
    })
}

function deleteItem(id){
    console.log(id)
    const delItem = fetch(`/api/foods/${id}`, {
        method : 'delete'
    });

    delItem.then((response)=>{
        location.reload();
        console.log(response);
    }, (reject)=>{
        console.log(reject);
    });
}

function paintTotalCalories() {
    const getcaloriesResponse = fetch("/api/foods");
    getcaloriesResponse.then((response) => {
        response.json().then((data) => {
            console.log(data[0].sum);
            document.querySelector(".total-calories").textContent = data[0].sum;
        }, (fail) => {
            console.log(fail, 'notworking');
        })
    }, (reason) => {
        console.log(reason);
    });
}




function paintItem() {
    console.log('Hello')
    const params = {
        foodName: document.querySelector("#item-name").value,
        calories: document.querySelector("#item-calories").value
    }
    const postResponse = fetch('/api/foods', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    postResponse.then((response) => {
        location.reload();
        console.log(response);
    }, (reason) => {
        console.log(reason);
    });
}
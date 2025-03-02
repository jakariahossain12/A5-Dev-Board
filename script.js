const myDate = new Date();

console.log(myDate.getDay('en-GB'))



let totalTask = parseInt(document.getElementById('total-task').innerText);
let inCompletTask = parseInt(document.getElementById('incomplet-task').innerText);

const CompletedBtn = document.getElementsByClassName('Completed-btn');




for(let i = 0; i< CompletedBtn.length; i++){
    
    const completedBtn = CompletedBtn[i];

    completedBtn.addEventListener('click' , function(event){

        alert('Board updated Successfully')
        const copBtn = event.target;

        if(inCompletTask === 1){
            alert('congrates!!! You have completed all the current task')
        }

        completedBtn.setAttribute('disabled',true)

       

        inCompletTask = inCompletTask - 1;

        document.getElementById('incomplet-task').innerText= inCompletTask;

        totalTask = totalTask + 1;

        document.getElementById('total-task').innerText = totalTask;

       

       console.log(copBtn.parentElement.parentElement.firstElementChild.nextElementSibling.innerText)

    })
}













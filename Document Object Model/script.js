function loadData(){
    document.getElementById('section-1').innerHTML = "<a href='https://www.youtube.com/'>YouTube</a>";
    fetch('feedback.html')
    .then(response => {
        if(!response.ok){
            console.error("Error in Fetching the Content");
        }
        return response.text();
    }).then(data => {
        document.getElementById('section-1').innerHTML=data;
    });
}

function fetch_data(){
    const usertype = document.getElementById('username').value;
    const classType = document.getElementById('classType').value;
    const data = {
        user : usertype,
        classType : classType
    };
    console.log(data);
    console.log(data.user);
}
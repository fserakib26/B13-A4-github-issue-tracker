const allIssues = () =>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res)=>res.json())
        .then((data)=>displayAllIssues(data.data));    
};

const displayAllIssues=(issues)=>{
    // console.log(issues);

    const allIssuesContainer = document.getElementById('all-issues-container');
    allIssuesContainer.innerHTML = "";


    for(let issue of issues){
        const issueCard = document.createElement('div')
        issueCard.innerHTML = `
            
        `;
        allIssuesContainer.appendChild(issueCard);
    }
    
};

allIssues();
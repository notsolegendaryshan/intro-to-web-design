function ClearForm(){
    document.getElementById("contactForm").reset();
}

function hidePTags(){
    let pTags = document.getElementsByTagName('p');
    for(let item of pTags){
        // item.style.visibility = 'hidden';
        item.style.display = 'none';
    }
}

$('#jqueryBtn').click(function(){
    $('p').hide();
})
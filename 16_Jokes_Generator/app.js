$('#btn').click(function () {
    let number = $('#number').val();
    $.ajax({
        method : 'GET',
        url : `http://api.icndb.com/jokes/random/${number}`,
        dataType : 'json',
        success : function(data) {
            let jokes = data.value;
            displayJokes(jokes);
        }
    });
});


let displayJokes = (jokesList) => {
    let jokeCard = '';
    for(let jokeItem of jokesList){
        jokeCard += `
                    <div class="col-md-12">
                                <div class="card mt-2">
                                    <div class="card-body bg-primary text-white">
                                        <p class="lead">
                                            ${jokeItem.joke}
                                        </p>
                                    </div>
                                </div>
                            </div>`;
    }
    $('#card-row').empty().append(jokeCard);

};
 
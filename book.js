document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
  
    if (searchText == '') {
        // please write something to display
    }
    else {

        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));

    }
}


const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}


const displaySearchResult = docs => {

    const searchResult = document.getElementById('search-result');
     docs.forEach(doc => {


        if (doc.length === 0) {
            warningMessage("Search result not found");
        }
         else {
          
                document.getElementById("error").innerHTML = `
                <h2 class="text-dark">Search results found = ${doc.numFound} books</h2>`;

                           
                            const div = document.createElement('div');
                            div.classList.add('col');
                            div.innerHTML = `
                            <div class="card h-100">
                            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="  w-50 h-50 card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Book-Title= ${doc.title}</h5>
                                <h5 class="card-text"> Author Name =${doc.author_name} </h5>
                                <h5 class="card-text"> Book-publisher =${doc.publisher} </h5>
                                <h5 class="card-text"> First-publish-year=${doc.first_publish_year} </h5>
                              
                            </div>
                            </div>
                            `;

                            searchResult.appendChild(div);

               }
    });

};



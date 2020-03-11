let newArray = [];
let newsPerPage = 20;
let datatime;
let callAPI = async() => {
    let apiKey = "4c1d61bba62f4839b305f2d07a598061";
    let url = `https://newsapi.org/v2/everything?q=korea&pageSize=${newsPerPage}&apiKey=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    let newArray = result.articles;


    // console.log(data);
    // console.log(result);z
    console.log(newArray);
    render(newArray);
}

let render = (array) => {
    let htmlfornews = array.map((item) => {
        return ` <div class="card mb-3" width="100%">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${item.urlToImage}" class="card-img" height="100%" style="object-fit: cover;  lt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <div><button class="btn btn-outline-primary"><a href="${item.url}">Read more...</a></button></div>
                    <p class="card-text">${item.source.name}</p>
                    <p class="card-text">${item.author}</p>
                    <p class="card-text"><small class="text-muted">${moment(item.publishedAt).format("MMM Do YYYY")}</small></p>
                </div>
            </div>
        </div>
    </div>`
    }).join("")
    document.getElementById("NewsArea").innerHTML = htmlfornews
}

callAPI();

let ViewMore = () => {
    newsPerPage += 20;
    callAPI();
    document.getElementById("buttonViewMore").innerHTML = `View more (${newsPerPage})`;
    if (newsPerPage > 100) { alert("you have reached maximum number of news per page") };
}
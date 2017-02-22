// define global variables for apis and columns
var profileURL = 'https://api.github.com/users/mkhira2'
var repoURL = 'https://api.github.com/users/mkhira2/repos'
var profile_column = document.querySelector('.profile_column')
var repo_column = document.querySelector('.repo_column')

// profile promise
var promise = $.getJSON(profileURL)

// this function will run once the profile promise is fulfilled
var responseHandler = function(profileObj) {
    var profilePic = profileObj.avatar_url
    var name = profileObj.name
    var username = profileObj.login
    var bio = profileObj.bio
    var locationEl = profileObj.location
    var website = profileObj.html_url
    var blog = profileObj.blog

    // building string for profile
    var profileStr = ''
    profileStr += '<img class="profilePic" src=' + '"' + profilePic + '">'
    profileStr += '<h1 class="name">' + name + '</h1>'
    profileStr += '<p class="username">' + '<i class="fa fa-id-card-o" aria-hidden="true"></i>' + ' ' + username + '</p>'
    profileStr += '<p class="bio">' + bio + '</p>'
    profileStr += '<button type="button" class="follow">FOLLOW</button>'
    profileStr += '<p class="badUser">Block or Report User</p>'
    profileStr += '<hr>'
    profileStr += '<p class="location">' + '<i class="fa fa-map-marker" aria-hidden="true"></i>' + ' ' + locationEl + '</p>'
    profileStr += '<p class="website">' + '<i class="fa fa-github" aria-hidden="true"></i>' + ' ' + '<a href="' + website + '">' + website + '</a></p>'
    profileStr += '<p class="blog">' + '<i class="fa fa-external-link" aria-hidden="true"></i>' + ' ' + '<a href="' + blog + '">' + blog + '</a></p>'

    // getting built string for profile
    profile_column.innerHTML = profileStr
}

// once promise is fulfilled, run responseHandler function
promise.then(responseHandler)

// repo promise
var promiseTwo = $.getJSON(repoURL)

// this function will run once the repo promise is fulfilled
var responseHandlerTwo = function(repoArray) {
    for (var i = 0; i < repoArray.length; i++) {
        var repoNode = document.createElement('div')
        var currentObj = repoArray[i]
        var repoURL = repoArray[i].html_url
        repoNode.innerHTML += '<h1><a class="repo_title" href="' + repoURL + '">' + currentObj.name + '</a></h1>'
        repoNode.innerHTML += '<p class="repo_description">' + currentObj.description + '</p>'
        repoNode.innerHTML += '<p class="repo_language"><ul><li><span>' + currentObj.language + '</span></li></ul></p>'
        repoNode.innerHTML += '<hr></div><br />'
        repo_column.appendChild(repoNode)
    }
}

// once promise is fulfilled, run responseHandlerTwo function
promiseTwo.then(responseHandlerTwo)

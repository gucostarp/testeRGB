$(document).ready(function(){
    let photos = [
        {
        src: 'assets/img/img1.png',
        description: 'blabla',
        tweetCount: 20,
        likeCount: 30
    },
        {
        src: 'assets/img/img1.png',
        description: 'blabla',
        tweetCount: 20,
        likeCount: 30
    },
        {
        src: 'assets/img/img1.png',
        description: 'blabla',
        tweetCount: 20,
        likeCount: 30
    },
        {
        src: 'assets/img/img1.png',
        description: 'blabla',
        tweetCount: 20,
        likeCount: 30
    },
        {
        src: 'assets/img/img1.png',
        description: 'blabla',
        tweetCount: 20,
        likeCount: 30
    },
]

// $("#teste").html("TESTEasdasdas")

photos.forEach((photo)=>{
    let img = $("<img></img>").attr('src',photo.src)
    let span = $("<span></span>").html(photo.description)
    let tweet = $("<button>Tweetar</button>").addClass("tweet")
    let like = $("<button><i class='far fa-thumbs-up'></i>Curtir</button>").addClass("like")
    let tweetCount = $("<div></div>").addClass("box").html(photo.tweetCount)
    let likeCount = $("<div></div>").addClass("box").html(photo.likeCount)
    let socialMedia = $("<div></div>").addClass("social-media")
    .append(tweet)
    .append(tweetCount)
    .append(likeCount)
    .append(like)
    $("<div></div>")
    .addClass("card")
    .append(img)
    .append(span)
    .append("<hr>")
    .append(socialMedia)
    .appendTo("#content")
    
})

})


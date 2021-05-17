$(document).ready(function() {

    getAllPhotos();

    $("#closeModal").click(function() {
        $("#myModal").css("display", "none");
    });

    $("#menuButton").click(() => {
        $("#verticalMenu").show();
    });

    $("#verticalMenu").mouseleave((event) => {
        event.stopPropagation();
        $("#verticalMenu").hide();
    });

})

function mountCards(response) {
    let photos = response.resposta;

    photos.forEach((photo) => {

        let img = $("<img></img>").attr('src', photo.src).addClass("photo").attr('data-imgId', photo.id);
        let span = $("<span></span>").html(photo.title)

        let tweet = $("<button>Tweetar</button>").addClass("tweet")
        let like = $("<button><i class='far fa-thumbs-up'></i>Curtir</button>").addClass("like")
        let tweetCount = $("<div></div>").addClass("box").html(photo.tweetcount)
        let likeCount = $("<div></div>").addClass("box").html(photo.likecount)

        let socialMediaTweet = $("<div></div>").addClass("social-media-item")
            .append(tweet)
            .append(tweetCount)
        let socialMediaLike = $("<div></div>").addClass("social-media-item")
            .append(like)
            .append(likeCount)

        let socialMedia = $("<div></div>").addClass("social-media")
            .append(socialMediaTweet)
            .append(socialMediaLike)

        $("<div></div>")
            .addClass("card")
            .append(img)
            .append(span)
            .append("<hr>")
            .append(socialMedia)
            .appendTo("#content")
    })

    $(".photo").click(function() {
        let id = $(this).attr("data-imgId");
        getPhoto(id)
    });
}

function getAllPhotos() {
    $.ajax({
        url: 'http://localhost/api/photos/listar',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer teste123');
        },
        data: {},
        success: mountCards,
        error: function(error) {
            window.alert("Erro ao listar fotos.");
        },
    });
}

function getPhoto(id) {
    $.ajax({
        url: 'http://localhost/api/photos/listar/' + id,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer teste123');
        },
        data: {},
        success: openModal,
        error: function(error) {
            window.alert("Erro ao obter foto.");
        },
    });
}

function openModal(response) {

    let photo = response.resposta;

    let title = $("<h3></h3>").addClass("modal-title").html(photo.title)
    let img = $("<img></img>").attr('src', photo.src).addClass("modal-photo");
    let description = $("<p></p>").html(photo.description).addClass("modal-description");

    let tweet = $("<button>Tweetar</button>").addClass("tweet")
    let like = $("<button><i class='far fa-thumbs-up'></i>Curtir</button>").addClass("like")
    let tweetCount = $("<div></div>").addClass("box").html(photo.tweetcount)
    let likeCount = $("<div></div>").addClass("box").html(photo.likecount)

    let socialMediaTweet = $("<div></div>").addClass("social-media-item")
        .append(tweet)
        .append(tweetCount)
    let socialMediaLike = $("<div></div>").addClass("social-media-item")
        .append(like)
        .append(likeCount)

    let socialMedia = $("<div></div>").addClass("social-media")
        .append(socialMediaTweet)
        .append(socialMediaLike)

    $("#modalBody").html("")
        .append(title)
        .append(img)
        .append(description)
        .append("<hr>")
        .append(socialMedia)

    $("#myModal").css("display", "block");
}
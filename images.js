function loadImages() {
    console.log('Load Images function fired');

    // Data retrieve -> GET
    // Data send -> POST
    // Data modify -> PUT / PATCH
    // Data delete -> DELETE

    // Make an Ajax call and 
    $.get('https://jsonplaceholder.typicode.com/photos').then(function success(data) {
        console.log('Success', data);
        var firstImage = data[0];
        // Load the image dynamically after ajax call succeed
        // display the data
        var row = $('.products .row');
        var result = '';
        // For loop on data
        for (var i = 0; i < data.length; i++) {
            var currentImage = data[i];
            var imageHtml = '<div class="card">' +
            '<img src="' + currentImage.thumbnailUrl + '" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<p class="card-text">' + currentImage.title + '</p>' +
            '</div>' +
            '</div>';
            result = result + imageHtml;
        }
        row.html(result);
    }, function error(error) {
        console.log('Success')
    });
}

$(document).ready(function () {
    loadImages();
});

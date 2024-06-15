$(document).ready(function() {
    // Animation for the envelope and card on page load
    $('.envelope').delay(500).animate({
        top: '50px'
    }, 1000);

    // Button click animation
    $('.button').click(function() {
        $(this).animate({
            opacity: 0.5,
            padding: '15px 25px'
        }, 200).animate({
            opacity: 1,
            padding: '10px 20px'
        }, 200);
    });
    function goToLoveLetter() {
    const audio = document.getElementById('background-music');
    audio.play();
    window.location.href = 'loveLetter.html';
}

$(document).ready(function() {
    // Add your custom jQuery code here
});

});

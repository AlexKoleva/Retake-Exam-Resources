let money=0.0;
let flowers=0;

function attachEvents() {
    $('.waiting').click(plantFlower);
    $('.flower-container').mouseover(function () {
        $(this).children('.collect-flower').hide();
        $(this).children('.harvest').show();
    })
    $('#sellBtn').click(sellFlowers);
    $('.buy').click(buyPlant);
}
function collectFlowers(currentPlant) {
    currentPlant.empty();
    flowers++;
    currentPlant.append($('<img src="img/waiting.png" class="img-fluid waiting">'));
    $('#flowers-value').text(flowers);
    attachEvents();
}
function waitingPlants(currentPlant) {
    setTimeout(function () {
        currentPlant.children('.in-progress').remove();
        currentPlant.append(
            '<div class="collect-flower text-center">'+
        '<img src="img/done.png" class="img-fluid done">'+
            '</div>'+
            '<img src="img/harvest.jpg" class="img-fluid harvest">'
        );
        currentPlant.children('.harvest').hide();
        currentPlant.children('.harvest').click(()=> collectFlowers(currentPlant));

    }, 5000);
}
function plantFlower() {
    let currentPlant=$(this).parent();
    currentPlant.children('.waiting').remove();

    let flower=$('<img src="img/in-progress.png" class="img-fluid in-progress">');
    currentPlant.append(flower);
    waitingPlants(currentPlant);

}
function buyPlant() {
    if (money >= 5.0) {
        let currentPlant = $(this).parent();
        currentPlant.children('.buy').remove();
        currentPlant.append('<img src="img/waiting.png" class="img-fluid waiting">');

        money -= 5.0;
        $('#money').text(money);
    }

    attachEvents();
}
function sellFlowers() {
    money += flowers * 2.50;
    $('#money').text(money);

    flowers = 0;
    $('#flowers-value').text(flowers);
}

attachEvents();
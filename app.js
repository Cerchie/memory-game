// Just like with submitting a new meme, to delete a meme you may need 
// access to the event object. When you click on delete, take a look at 
// what the e.target is. Using JavaScript, can you navigate 
// from the target to the meme, and then remove the meme from the DOM?

let topTextInput, btmTextInput, imageInput, generateBtn, canvas, ctx, form;

function generateMeme(img, topText, bottomText) {
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);


    let fontSize = canvas.width / 15;
    ctx.font = fontSize + 'px Impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 15;
    ctx.textAlign = 'center';

    ctx.textBaseline = 'top';
    ctx.fillText(topText, canvas.width / 2, 0, canvas.width);
    ctx.strokeText(topText, canvas.width / 2, 0, canvas.width);

    ctx.textBaseline = 'bottom';
    ctx.fillText(bottomText, canvas.width / 2, canvas.height, canvas.width);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height, canvas.width);

}

function init() {
    topTextInput = document.getElementById('top-text');
    btmTextInput = document.getElementById('bottom-text');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    form = document.getElementById('form');

    canvas.getContext("2d");

    canvas.width = canvas.height = 0;


    form.generateBtn.addEventListener('submit', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, btmTextInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

}
init();

//need to make multiples available using localStorage
//need to add delete btn a la the Todo list App
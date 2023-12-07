let isInfoBoxVisible = false;
let currentInfoBox = null;

document.getElementById('titleaqua').addEventListener('click', function() {
    var para = document.getElementById('para');
    var titleaquaRect = document.getElementById('titleaqua').getBoundingClientRect();
    

    // Set the position below title2
    para.style.top = (titleaquaRect.bottom + 10) + 'px'; // Adjust the spacing as needed
    para.style.left = (titleaquaRect.left + 15) + 'px';


    // Toggle the display property
    para.style.display = para.style.display === 'none' ? 'block' : 'none';

    if (isInfoBoxVisible && currentInfoBox){
        currentInfoBox.style.display = 'none';
    }
    isInfoBoxVisible = false;

});

document.getElementById('fl_ori').addEventListener('click', function() {
    showInfoBox('Flounder', 'It lives on the bottom, so both eyes are on top of its head.', 'Spring/Summer', 'Anytime', '4-17 inches','/image/fl_ori.png', '/image/flounder.png');
});

document.getElementById('puf_ori').addEventListener('click', function() {
    showInfoBox('Pufferfish', 'Inflates when threatened.', 'Summer', '12pm-4pm', '1-37 inches', '/image/puf_ori.png', '/image/puffer.png');
});

document.getElementById('seaweed_sdv').addEventListener('click', function() {
    showInfoBox('Seaweed', 'It can be used in cooking...', 'All seasons', 'Anytime','N/A', '/image/seaweed_sdv.png', '/image/seaweed.png');
});

document.getElementById('octopus_sdv').addEventListener('click', function() {
    showInfoBox('Octopus', 'A mysterious and intelligent creature.', 'Summer', '6am-1pm', '12-49 inches','/image/octopus_sdv.png', '/image/octopus.png');
});

document.getElementById('tuna_sdv').addEventListener('click', function() {
    showInfoBox('Tuna', 'A large fish that lives in the ocean.', 'Winter/Summer', '6am-7pm', '12-61 inches','/image/tuna_sdv.png', '/image/tuna.png');
});

document.getElementById('cucumber_sdv').addEventListener('click', function() {
    showInfoBox('Cucumber', 'A rare, purple variety of sea cucumber.', 'Summer/Fall;', '6pm-2am', '12-37 inches','/image/cucumber_sdv.png', '/image/cucumber.png');
});

document.getElementById('tilapia_sdv').addEventListener('click', function() {
    showInfoBox('Tilapia', 'A primarily vegetarian fish that prefers warm water.', 'Fall/Summer', '6am-1pm', '11-31 inches','/image/tipalia_ori.png', '/image/tilapia.png');
});

document.getElementById('lionfish_sdv').addEventListener('click', function() {
    showInfoBox('Lionfish', 'An aggressive, predatory fish with venomous spines.', 'All seasons', 'Anytime', '3-13 inches','/image/lionfish_sdv.png', '/image/lionfish.png');
});

document.getElementById('redmullet_sdv').addEventListener('click', function() {
    showInfoBox('Red Mullet', 'Long ago these were kept as pets.', 'Summer/Winter', '6am-7pm', '8-23 inches','/image/redmullet_sdv.png', '/image/redmullet.png');
});

document.getElementById('angler_sdv').addEventListener('click', function() {
    showInfoBox('Ms.Angler', 'Uses a bioluminescent dangler to attract prey.', 'Fall', 'Anytime', '17-19 inches','/image/angler_sdv.png', '/image/angler.png');
});

document.getElementById('shrimp_sdv').addEventListener('click', function() {
    showInfoBox('Shrimp', 'Uses a bioluminescent dangler to attract prey.', 'Fall', 'Anytime', '17-19 inches','/image/shrimp_sdv.png', '/image/shrimp.png');
});


function showInfoBox(animal, message, season, time, big, leftImageSrc, rightImageSrc)  {
    if (isInfoBoxVisible && currentInfoBox) {
        currentInfoBox.style.display = 'none';
    }
    

   
    var infoBox = document.createElement('div');
    infoBox.style.zIndex = '998';
    infoBox.style.position = 'fixed';
    infoBox.style.justifyContent = 'center';
    infoBox.style.transform = 'translateX(0) translateY(0)';
    infoBox.style.top = '60%';
    infoBox.style.left = '50%';
    infoBox.style.margin = '-300px 0 0 -300px';
    infoBox.style.width = '700px';
    infoBox.style.height = '500px';
    infoBox.style.background = 'rgba(255, 255, 255, 0.75)';
    infoBox.style.borderRadius = '10px';
    infoBox.style.display = 'block';

    infoBox.innerHTML =
        '<span id="closeIcon" style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 24px;">&times;</span>' +
        '<p style="text-align: left; margin: 40px 30px 10px 30px; font-family: Courier New; font-size: 24px; font-weight: bolder;">' +
        animal +
        ':</p>' +
        '<p style="text-align: left; margin: 5px 30px 20px 30px; font-family: Courier New; font-size: 17px;font-weight: bold;">' +
        message +
        '</p>' +
        '<p style="text-align: left; margin: 2px 30px; font-family: Courier New; font-size: 17px;font-weight: normal;">Season: ' +
        season +
        '</p>' +
        '<p style="text-align: left; margin: 1px 30px; font-family: Courier New; font-size: 17px;font-weight: normal;">Time: ' +
        time +
        '</p>' +
        '<p style="text-align: left; margin: 1px 30px; font-family: Courier New; font-size: 17px;font-weight: normal;">Size: ' +
        big +
        '</p>';;

        var leftDiv = document.createElement('div');
        leftDiv.style.width = '200px';
        leftDiv.style.height = '200px';
        leftDiv.style.marginTop = '40px';
        leftDiv.style.marginRight = '20px';
        leftDiv.style.marginLeft = '60px'; // Add margin
        leftDiv.style.float = 'left';
    
        // Create image element for Flori
        var leftImage = document.createElement('img');
        leftImage.src = leftImageSrc; // Dynamic source
        leftImage.style.width = '90%';
        leftImage.style.height = '90%';
    
        // Append image to the left div
        leftDiv.appendChild(leftImage);
    
    
        // Create right div for image
        var rightDiv = document.createElement('div');
        rightDiv.style.width = '350px';
        rightDiv.style.height = '300px';
        rightDiv.style.marginTop = '20px'; 
        rightDiv.style.marginLeft = '20px'// Add margin
        rightDiv.style.float = 'left';
    
        // Create image element for Flounder or Puffer
        var rightImage = document.createElement('img');
        rightImage.src = rightImageSrc; // Dynamic source
        rightImage.style.width = '80%';
        rightImage.style.height = '80%';
        console.log(rightImageSrc)
        if (rightImageSrc === 'tilapia') {
            rightImage.style.width = '40%';
        }

   
        // Append Flounder image to the right div
        rightDiv.appendChild(rightImage);

    // Append left and right divs to the main infoBox
    infoBox.appendChild(leftDiv);
    infoBox.appendChild(rightDiv);



    document.body.appendChild(infoBox);

    var closeIcon = document.getElementById('closeIcon');
    closeIcon.style.fontSize = '26px';
    closeIcon.addEventListener('click', function () {
        // Hide the info box when close icon is clicked
        infoBox.style.display = 'none';
        // Remove the info box from the DOM
        document.body.removeChild(infoBox);
    });

 // 设置延迟切换图片操作
 setTimeout(function () {
    // Apply a smooth transition by changing the opacity gradually
    rightImage.style.opacity = '0';
    setTimeout(function () {
        // Change the image source and reset the opacity
        rightImage.src = rightImageSrc.replace('.png', '_pix.png');
        rightImage.style.opacity = '1';
    }, 100); // Adjust the time based on the transition duration
}, 1300);

currentInfoBox = infoBox;
currentRightImage = rightImage;
    isInfoBoxVisible = true;

}




document.getElementById('fishpole').addEventListener('click', function() {
    // Array of sea creatures with their information
    var seaCreatures = [
        { name: 'Flounder', message: 'It lives on the bottom, so both eyes are on top of its head.', season: 'Spring/Summer', time: 'Anytime', size: 'Large', leftImageSrc: '/image/fl_ori.png', rightImageSrc: '/image/flounder.png' },
        { name: 'Pufferfish', message: 'Inflates when threatened.', season: 'Summer', time: '12pm-4pm', size: 'Small', leftImageSrc: '/image/puf_ori.png', rightImageSrc: '/image/puffer.png' },
        { name: 'Octopus', message: 'A mysterious and intelligent creature.', season: 'Summer', time: '6am-1pm', size: '12-49 inches', leftImageSrc: '/image/octopus_sdv.png', rightImageSrc: '/image/octopus.png' },
        { name: 'Tuna', message: 'A large fish that lives in the ocean.', season: 'Winter/Summer', time: '6am-7pm', size: '12-61 inches', leftImageSrc: '/image/tuna_sdv.png', rightImageSrc: '/image/tuna.png' },
        { name: 'Cucumber', message: 'A rare, purple variety of sea cucumber.', season: 'Summer/Fall', time: '6pm-2am', size: '12-37 inches', leftImageSrc: '/image/cucumber_sdv.png', rightImageSrc: '/image/cucumber.png' },// Add more sea creatures as needed
    ];

    // Randomly select a sea creature
    var randomIndex = Math.floor(Math.random() * seaCreatures.length);
    var selectedCreature = seaCreatures[randomIndex];

    // Show the info box for the selected sea creature
    showInfoBox(selectedCreature.name, selectedCreature.message, selectedCreature.season, selectedCreature.time, selectedCreature.size, selectedCreature.leftImageSrc, selectedCreature.rightImageSrc);
});

function printPage() {
    // Show the overlay
    document.getElementById('overlay').style.display = 'block';

    // Print the page
    window.print();

    // Remove the overlay after a short delay (adjust the delay as needed)
    setTimeout(function () {
        document.getElementById('overlay').style.display = 'none';
    }, 1000);
}



let isInfoBoxVisible = false;
let currentInfoBox = null;

document.getElementById('titleaqua').addEventListener('click', function() {
    var para = document.getElementById('para');
    var titleaquaRect = document.getElementById('titleaqua').getBoundingClientRect();
    
    para.style.top = (titleaquaRect.bottom + 10) + 'px'; 
    para.style.left = (titleaquaRect.left + 15) + 'px';


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
    showInfoBox('Sea Cucumber', 'A rare, purple variety of sea cucumber.', 'Summer/Fall;', '6pm-2am', '12-37 inches','/image/cucumber_sdv.png', '/image/cucumber.png');
});

document.getElementById('tilapia_sdv').addEventListener('click', function() {
    showInfoBox('Tilapia', 'A primarily vegetarian fish that prefers warm water.', 'Fall/Summer', '6am-1pm', '11-31 inches','/image/tilapia_ori.png', '/image/tilapia.png');
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
    showInfoBox('Shrimp', 'A scavenger that feeds off the ocean floor. Widely prized for its meat.', 'All seasons', 'Anytime', '1-5 inches','/image/shrimp_sdv.png', '/image/shrimp.png');
});

document.getElementById('discus_sdv').addEventListener('click', function() {
    showInfoBox('Discus', 'A brightly colored tropical fish that is popular in aquariums.', 'All seasons', 'Anytime', '2-10 inches','/image/discus_sdv.png', '/image/discus.png');
});


function showInfoBox(animal, message, season, time, big, leftImageSrc, rightImageSrc)  {
    if (isInfoBoxVisible && currentInfoBox) {
        currentInfoBox.style.display = 'none';
    }
    

   
    var infoBox = document.createElement('div');
    infoBox.className ="infoBox"
    infoBox.style.zIndex = '998';
    infoBox.style.position = 'fixed';
    infoBox.style.justifyContent = 'center';
    infoBox.style.transform = 'translateX(0) translateY(0)';
    infoBox.style.top = '60%';
    infoBox.style.left = '50%';
    infoBox.style.margin = '-300px 0 0 -300px';
    infoBox.style.width = '700px';
    infoBox.style.height = '500px';
    infoBox.style.background = 'rgba(255, 255, 255, 0.85)';
    infoBox.style.borderRadius = '10px';
    infoBox.style.display = 'block';

    infoBox.innerHTML =
        '<span id="closeIcon" style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 24px;z-index:999999;">&times;</span>' +
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
        leftDiv.style.marginLeft = '60px'; 
        leftDiv.style.float = 'left';
    
        // Create image element for Flori
        var leftImage = document.createElement('img');
        leftImage.src = leftImageSrc; 
        leftImage.style.width = '90%';
        leftImage.style.height = '90%';
    
        
        leftDiv.appendChild(leftImage);
    

        var rightDiv = document.createElement('div');
        rightDiv.style.width = '350px';
        rightDiv.style.height = '300px';
        rightDiv.style.marginTop = '20px'; 
        rightDiv.style.marginLeft = '20px'
        rightDiv.style.float = 'left';
    
        // Create image element for Flounder or Puffer
        var rightImage = document.createElement('img');
        rightImage.src = rightImageSrc; 
        rightImage.style.width = '80%';
        rightImage.style.height = '80%';
        console.log(rightImageSrc)
        if (rightImageSrc === 'tilapia') {
            rightImage.style.width = '40%';
        }

   
        rightDiv.appendChild(rightImage);

   
    infoBox.appendChild(leftDiv);
    infoBox.appendChild(rightDiv);
   
var infoboxes = document.getElementsByClassName("infoBox")
if (infoboxes.length > 0) {
   // 从第一个元素开始删除，直到倒数第二个元素
   for (var i = 0; i < infoboxes.length; i++) {
    infoboxes[i].parentNode.removeChild(infoboxes[i]);
}

}
    document.body.appendChild(infoBox);
    var closeIcon = document.getElementById('closeIcon');
    closeIcon.style.fontSize = '26px';
    closeIcon.addEventListener('click', function (e) {
        console.log(e)
        
        infoBox.style.display = 'none';
       

    });

 
 setTimeout(function () {
    
    rightImage.style.opacity = '0';
    setTimeout(function () {
        
        rightImage.src = rightImageSrc.replace('.png', '_pix.png');
        rightImage.style.opacity = '1';
    }, 100); 
}, 1300);

currentInfoBox = infoBox;
currentRightImage = rightImage;
    isInfoBoxVisible = true;

}




document.getElementById('fishpole').addEventListener('click', function() {
    var seaCreatures = [
        { name: 'Flounder', message: 'It lives on the bottom, so both eyes are on top of its head.', season: 'Spring/Summer', time: 'Anytime', size: 'Large', leftImageSrc: '/image/fl_ori.png', rightImageSrc: '/image/flounder.png' },
        { name: 'Pufferfish', message: 'Inflates when threatened.', season: 'Summer', time: '12pm-4pm', size: 'Small', leftImageSrc: '/image/puf_ori.png', rightImageSrc: '/image/puffer.png' },
        { name: 'Octopus', message: 'A mysterious and intelligent creature.', season: 'Summer', time: '6am-1pm', size: '12-49 inches', leftImageSrc: '/image/octopus_sdv.png', rightImageSrc: '/image/octopus.png' },
        { name: 'Tuna', message: 'A large fish that lives in the ocean.', season: 'Winter/Summer', time: '6am-7pm', size: '12-61 inches', leftImageSrc: '/image/tuna_sdv.png', rightImageSrc: '/image/tuna.png' },
        { name: 'Cucumber', message: 'A rare, purple variety of sea cucumber.', season: 'Summer/Fall', time: '6pm-2am', size: '12-37 inches', leftImageSrc: '/image/cucumber_sdv.png', rightImageSrc: '/image/cucumber.png' },
        { name: 'Tilapia', message: 'A primarily vegetarian fish that prefers warm water.', season: 'Fall/Summer', time: '6am-1pm', size: '11-31 inches', leftImageSrc: '/image/tilapia_pix.png', rightImageSrc: '/image/tilapia.png' },
        { name: 'Lionfish', message: 'An aggressive, predatory fish with venomous spines.', season: 'All seasons', time: 'Anytime', size: '3-13 inches', leftImageSrc: '/image/lionfish_sdv.png', rightImageSrc: '/image/lionfish.png' },
        { name: 'Red Mullet', message: 'Long ago these were kept as pets.', season: 'Summer/Winter', time: '6am-7pm', size: '8-23 inches', leftImageSrc: '/image/redmullet_sdv.png', rightImageSrc: '/image/redmullet.png' },
        { name: 'Ms.Angler', message: 'Uses a bioluminescent dangler to attract prey.', season: 'Fall', time: 'Anytime', size: '17-19 inches', leftImageSrc: '/image/angler_sdv.png', rightImageSrc: '/image/angler.png' },
        { name: 'Shrimp', message: 'Uses a bioluminescent dangler to attract prey.', season: 'Fall', time: 'Anytime', size: '17-19 inches', leftImageSrc: '/image/shrimp_sdv.png', rightImageSrc: '/image/shrimp.png' },
        { name: 'Discus', message: 'A brightly colored tropical fish that is popular in aquariums.', season: 'All seasons', time: 'Anytime', size: '2-10 inches', leftImageSrc: '/image/discus_sdv.png', rightImageSrc: '/image/discus.png' },
        { name: 'Seaweed', message: 'It can be used in cooking...', season: 'All seasons', time: 'Anytime', size: 'N/A', leftImageSrc: '/image/seaweed_sdv.png', rightImageSrc: '/image/seaweed.png' },
    ];

    // Randomly select a sea creature
    var randomIndex = Math.floor(Math.random() * seaCreatures.length);
    var selectedCreature = seaCreatures[randomIndex];

    showInfoBox(selectedCreature.name, selectedCreature.message, selectedCreature.season, selectedCreature.time, selectedCreature.size, selectedCreature.leftImageSrc, selectedCreature.rightImageSrc);
});

function printPage() {
    window.print();
}



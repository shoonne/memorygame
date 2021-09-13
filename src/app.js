document.addEventListener("DOMContentLoaded", () => {
  var cardArray = [
    {
      name: "image1",
      img: "https://image.shutterstock.com/z/stock-photo-cute-grey-tabby-cat-in-cardboard-box-on-floor-at-home-1526963033.jpg",
    },
    {
      name: "image1",
      img: "https://image.shutterstock.com/z/stock-photo-cute-grey-tabby-cat-in-cardboard-box-on-floor-at-home-1526963033.jpg",
    },
    {
      name: "image2",
      img: "https://pbs.twimg.com/profile_images/614752095581945857/8oo70Ja-.png",
    },
    {
      name: "image2",
      img: "https://pbs.twimg.com/profile_images/614752095581945857/8oo70Ja-.png",
    },
    {
      name: "image3",
      img: "https://cleverpetowners.com/wp-content/uploads/2020/11/can-cats-see-9-dimensions.jpg",
    },
    {
      name: "image3",
      img: "https://cleverpetowners.com/wp-content/uploads/2020/11/can-cats-see-9-dimensions.jpg",
    },
    {
      name: "image4",
      img: "https://estnn.com/wp-content/uploads/2020/09/ninja-1.jpg",
    },
    {
      name: "image4",
      img: "https://estnn.com/wp-content/uploads/2020/09/ninja-1.jpg",
    },
    {
      name: "image5",
      img: "https://pbs.twimg.com/media/ET5Y1wjWsAIO53E.jpg",
    },
    {
      name: "image5",
      img: "https://pbs.twimg.com/media/ET5Y1wjWsAIO53E.jpg",
    },
    {
      name: "image8",
      img: "https://pbs.twimg.com/profile_images/614752095581945857/8oo70Ja-.png",
    },
    {
      name: "image8",
      img: "https://pbs.twimg.com/profile_images/614752095581945857/8oo70Ja-.png",
    },
    {
      name: "image9",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/CatVibrissaeFullFace.JPG/1200px-CatVibrissaeFullFace.JPG",
    },
    {
      name: "image9",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/CatVibrissaeFullFace.JPG/1200px-CatVibrissaeFullFace.JPG",
    },
    {
      name: "image11",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8vihyg54VNz_5EqcXIAFnlklFZZKyEFicbg3Qf-9BXdNLJD2guQA39HdQ7r7M0yrVi8&usqp=CAU",
    },
    {
      name: "image11",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8vihyg54VNz_5EqcXIAFnlklFZZKyEFicbg3Qf-9BXdNLJD2guQA39HdQ7r7M0yrVi8&usqp=CAU",
    },
    {
      name: "image12",
      img: "https://marvel-b1-cdn.bc0a.com/f00000000202027/www.wellnesspetfood.com/sites/default/files/inline-images/4.jpg",
    },
    {
      name: "image12",
      img: "https://marvel-b1-cdn.bc0a.com/f00000000202027/www.wellnesspetfood.com/sites/default/files/inline-images/4.jpg",
    },
    {
      name: "image13",
      img: "https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/1c/01/2e/1c012eb8-6144-65f7-9975-1b0289e61b9e/source/512x512bb.jpg",
    },
    {
      name: "image13",
      img: "https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/1c/01/2e/1c012eb8-6144-65f7-9975-1b0289e61b9e/source/512x512bb.jpg",
    },
    {
      name: "image14",
      img: "https://m.media-amazon.com/images/I/51TYib7jKAL._AC_SY355_.jpg",
    },
    {
      name: "image14",
      img: "https://m.media-amazon.com/images/I/51TYib7jKAL._AC_SY355_.jpg",
    },
    {
      name: "image15",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1OlcKGgaRLfH9t73e4Jbu55c_HAlFeAEKw&usqp=CAU",
    },
    {
      name: "image15",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1OlcKGgaRLfH9t73e4Jbu55c_HAlFeAEKw&usqp=CAU",
    },
    {
      name: "image16",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKa8T4Br99cKpVSkWT9qDR8huAllnq9Vp13g&usqp=CAU",
    },
    {
      name: "image16",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKa8T4Br99cKpVSkWT9qDR8huAllnq9Vp13g&usqp=CAU",
    },
    {
      name: "image17",
      img: "https://thumbs.dreamstime.com/b/young-black-cat-white-whiskers-paws-real-pretty-224780630.jpg",
    },
    {
      name: "image17",
      img: "https://thumbs.dreamstime.com/b/young-black-cat-white-whiskers-paws-real-pretty-224780630.jpg",
    },
    {
      name: "image18",
      img: "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg",
    },
    {
      name: "image18",
      img: "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg",
    },
    {
      name: "image19",
      img: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    },
    {
      name: "image19",
      img: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    },
    {
      name: "image20",
      img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6082931ef598a85b055afe77%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3475%26cropY1%3D182%26cropY2%3D2137",
    },
    {
      name: "image20",
      img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6082931ef598a85b055afe77%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3475%26cropY1%3D182%26cropY2%3D2137",
    },
    {
      name: "image21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNuPWsbNS5SqKy7dmguqVyl6nj8cJwSRU4Q&usqp=CAU",
    },
    {
      name: "image21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNuPWsbNS5SqKy7dmguqVyl6nj8cJwSRU4Q&usqp=CAU",
    },
    {
      name: "image22",
      img: "https://images.theconversation.com/files/168121/original/file-20170505-1693-ymh4bc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    },
    {
      name: "image22",
      img: "https://images.theconversation.com/files/168121/original/file-20170505-1693-ymh4bc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    },
    {
      name: "image23",
      img: "https://freepikpsd.com/media/2020/04/cartoon-ninja-png-1-Images-Free-Transparent.png",
    },
    {
      name: "image23",
      img: "https://freepikpsd.com/media/2020/04/cartoon-ninja-png-1-Images-Free-Transparent.png",
    },
    {
      name: "image24",
      img: "https://illustoon.com/photo/3531.png",
    },
    {
      name: "image24",
      img: "https://illustoon.com/photo/3531.png",
    },
    {
      name: "image25",
      img: "https://e5ter.files.wordpress.com/2010/04/cartoon-ninja-8.gif",
    },
    {
      name: "image25",
      img: "https://e5ter.files.wordpress.com/2010/04/cartoon-ninja-8.gif",
    },
    {
      name: "image26",
      img: "https://www.pngkey.com/png/detail/297-2971111_ninjacat-ninja-cat-cartoon.png",
    },
    {
      name: "image26",
      img: "https://www.pngkey.com/png/detail/297-2971111_ninjacat-ninja-cat-cartoon.png",
    },
    {
      name: "image27",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNGpH1wObIkqMawogJ_xVpDgQANMs-fD_jcmpkM408O6IdixrGp-z33o4B9nqOiolVT4&usqp=CAU",
    },
    {
      name: "image27",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNGpH1wObIkqMawogJ_xVpDgQANMs-fD_jcmpkM408O6IdixrGp-z33o4B9nqOiolVT4&usqp=CAU",
    },
    {
      name: "image28",
      img: "https://previews.123rf.com/images/vikatomas/vikatomas1902/vikatomas190200060/120808953-japan-red-sun-cat-ninja-illustration-vector-a-cat-with-a-bandage-martial-arts.jpg",
    },
    {
      name: "image28",
      img: "https://previews.123rf.com/images/vikatomas/vikatomas1902/vikatomas190200060/120808953-japan-red-sun-cat-ninja-illustration-vector-a-cat-with-a-bandage-martial-arts.jpg",
    },
    {
      name: "image29",
      img: "https://i.kym-cdn.com/entries/icons/facebook/000/001/316/ninjacat.jpg",
    },
    {
      name: "image29",
      img: "https://i.kym-cdn.com/entries/icons/facebook/000/001/316/ninjacat.jpg",
    },
  ];
  const BLANK_IMG =
    "https://www.runo.se/folkhogskola/wp-content/uploads/sites/3/2015/09/blank.jpg";

  // Access DOM elements
  const grid = document.querySelector(".grid");
  const points = document.querySelector(".points");
  const twelveBtn = document.getElementById("twelve");
  const twentyFourBtn = document.getElementById("twentyFour");
  const fiftyTwoBtn = document.getElementById("fiftyTwo");

  // Points and cards
  let currentPoints = 0;
  var cardsChosen = []; // One for checking if the pair is a match
  var cardsChosenId = []; // One for updating the correct DOM elements through the id
  var cardsWon = [];

  // Multiplayer
  var playerOneTurn = true;
  var playerOnePoints = 0;
  var playerTwoPoints = 0;

  // Create board
  function createBoard(amountOfCards) {
    grid.innerHTML = "";
    points.innerHTML = currentPoints;
    for (
      let index = 0;
      index < cardArray.slice(0, amountOfCards).length;
      index++
    ) {
      var card = document.createElement("img");
      card.setAttribute("src", BLANK_IMG);
      card.setAttribute("data-id", index);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    // Get all the cards
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      // If match, set the image
      cards[optionOneId].setAttribute("src", cardArray[optionOneId].img);
      cards[optionTwoId].setAttribute("src", cardArray[optionTwoId].img);
      cardsWon.push(cardsChosen[0]);
      cardsWon.push(cardsChosen[1]);
      // Increment points and update DOM
      currentPoints++;
      points.innerHTML = currentPoints + 1;
      // Check which player turn it is and increment points
      if (playerOneTurn) {
        playerOnePoints++;
        playerOneTurn = true;
      } else {
        playerTwoPoints++;
        playerOneTurn = false;
      }
    } else {
      // If no match, set
      cards[optionOneId].setAttribute("src", BLANK_IMG);
      cards[optionTwoId].setAttribute("src", BLANK_IMG);
      // currentPoints = 0;
      // points.innerHTML = 0;
    }
    cardsChosen = [];
    cardsChosenId = [];
    console.log("playerOnePoints:", playerOnePoints);
    console.log("playerTwoPoints:", playerTwoPoints);
  }

  function flipCard() {
    console.log("PlayerOneTurns", playerOneTurn);
    // Get id of the current selected card
    var cardId = this.getAttribute("data-id");
    // Check if the card already is chosen
    if (!cardsChosenId.includes(cardId)) {
      // Push the name of the card to cardsChosen array
      cardsChosen.push(cardArray[cardId].name);
      // Push the id of the card to the cardsChosenId array
      cardsChosenId.push(cardId);
      // Sets the image of the chosed card
      this.setAttribute("src", cardArray[cardId].img);
      // User has selected two cards, check for match
      if (cardsChosen.length === 2) {
        playerOneTurn = !playerOneTurn;
        console.log("Checking for match...");
        setTimeout(() => {
          checkForMatch();
        }, 500);
      }
    }
  }

  // Shuffle arrays
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  // Add event listener to buttons
  twelveBtn.addEventListener("click", function () {
    createBoard(12);
  });
  twentyFourBtn.addEventListener("click", function () {
    createBoard(24);
  });
  fiftyTwoBtn.addEventListener("click", function () {
    createBoard(52);
  });

  // Shuffle the deck
  shuffle(cardArray);
});

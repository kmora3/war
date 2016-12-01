
//card array
var cardDeck = [{name:'d2',suit: 'diamond',faceValue:'2',value: 2, imgPath:'./img/d_2.png'},
                {name:'d3',suit: 'diamond',faceValue:'3',value: 3, imgPath:'./img/d_3.png'},
                {name:'d4',suit: 'diamond',faceValue:'4',value: 4, imgPath:'./img/d_4.png'},
                {name:'d5',suit: 'diamond',faceValue:'5',value: 5, imgPath:'./img/d_5.png'},
                {name:'d6',suit: 'diamond',faceValue:'6',value: 6, imgPath:'./img/d_6.png'},
                {name:'d7',suit: 'diamond',faceValue:'7',value: 7, imgPath:'./img/d_7.png'},
                {name:'d8',suit: 'diamond',faceValue:'8',value: 8, imgPath:'./img/d_8.png'},
                {name:'d9',suit: 'diamond',faceValue:'9',value: 9, imgPath:'./img/d_9.png'},
                {name:'d10',suit: 'diamond',faceValue:'10',value: 10, imgPath:'./img/d_10.png'},
                {name:'dj',suit: 'diamond',faceValue:'j',value: 11, imgPath:'./img/d_11.png'},
                {name:'dq',suit: 'diamond',faceValue:'q',value: 12, imgPath:'./img/d_12.png'},
                {name:'dk',suit: 'diamond',faceValue:'k',value: 13, imgPath:'./img/d_13.png'},
                {name:'da',suit: 'diamond',faceValue:'a',value: 14, imgPath:'./img/d_14.png'},
                {name:'h2',suit: 'club',faceValue:'2',value: 2, imgPath:'./img/h_2.png'},
                {name:'h3',suit: 'heart',faceValue:'3',value: 3, imgPath:'./img/h_3.png'},
                {name:'h4',suit: 'heart',faceValue:'4',value: 4, imgPath:'./img/h_4.png'},
                {name:'h5',suit: 'heart',faceValue:'5',value: 5, imgPath:'./img/h_5.png'},
                {name:'h6',suit: 'heart',faceValue:'6',value: 6, imgPath:'./img/h_6.png'},
                {name:'h7',suit: 'heart',faceValue:'7',value: 7, imgPath:'./img/h_7.png'},
                {name:'h8',suit: 'heart',faceValue:'8',value: 8, imgPath:'./img/h_8.png'},
                {name:'h9',suit: 'heart',faceValue:'9',value: 9, imgPath:'./img/h_9.png'},
                {name:'h10',suit: 'heart',faceValue:'10',value: 10, imgPath:'./img/h_10.png'},
                {name:'hj',suit: 'heart',faceValue:'j',value: 11, imgPath:'./img/h_11.png'},
                {name:'hq',suit: 'heart',faceValue:'q',value: 12, imgPath:'./img/h_12.png'},
                {name:'hk',suit: 'heart',faceValue:'k',value: 13, imgPath:'./img/h_13.png'},
                {name:'ha',suit: 'heart',faceValue:'a',value: 14, imgPath:'./img/h_14.png'},
                {name:'c2',suit: 'club',faceValue:'2',value: 2, imgPath:'./img/c_2.png'},
                {name:'c3',suit: 'club',faceValue:'3',value: 3, imgPath:'./img/c_3.png'},
                {name:'c4',suit: 'club',faceValue:'4',value: 4, imgPath:'./img/c_4.png'},
                {name:'c5',suit: 'club',faceValue:'5',value: 5, imgPath:'./img/c_5.png'},
                {name:'c6',suit: 'club',faceValue:'6',value: 6, imgPath:'./img/c_6.png'},
                {name:'c7',suit: 'club',faceValue:'7',value: 7, imgPath:'./img/c_7.png'},
                {name:'c8',suit: 'club',faceValue:'8',value: 8, imgPath:'./img/c_8.png'},
                {name:'c9',suit: 'club',faceValue:'9',value: 9, imgPath:'./img/c_9.png'},
                {name:'c10',suit: 'club',faceValue:'10',value: 10, imgPath:'./img/c_10.png'},
                {name:'cj',suit: 'club',faceValue:'j',value: 11, imgPath:'./img/c_11.png'},
                {name:'cq',suit: 'club',faceValue:'q',value: 12, imgPath:'./img/c_12.png'},
                {name:'ck',suit: 'club',faceValue:'k',value: 13, imgPath:'./img/c_13.png'},
                {name:'ca',suit: 'club',faceValue:'a',value: 14, imgPath:'./img/c_14.png'},
                {name:'s2',suit: 'spades',faceValue:'2',value: 2, imgPath:'./img/s_2.png'},
                {name:'s3',suit: 'spades',faceValue:'3',value: 3, imgPath:'./img/s_3.png'},
                {name:'s4',suit: 'spades',faceValue:'4',value: 4, imgPath:'./img/s_4.png'},
                {name:'s5',suit: 'spades',faceValue:'5',value: 5, imgPath:'./img/s_5.png'},
                {name:'s6',suit: 'spades',faceValue:'6',value: 6, imgPath:'./img/s_6.png'},
                {name:'s7',suit: 'spades',faceValue:'7',value: 7, imgPath:'./img/s_7.png'},
                {name:'s8',suit: 'spades',faceValue:'8',value: 8, imgPath:'./img/s_8.png'},
                {name:'s9',suit: 'spades',faceValue:'9',value: 9, imgPath:'./img/s_9.png'},
                {name:'s10',suit: 'spades',faceValue:'10',value: 10, imgPath:'./img/s_10.png'},
                {name:'sj',suit: 'spades',faceValue:'j',value: 11, imgPath:'./img/s_11.png'},
                {name:'sq',suit: 'spades',faceValue:'q',value: 12, imgPath:'./img/s_12.png'},
                {name:'sk',suit: 'spades',faceValue:'k',value: 13, imgPath:'./img/s_13.png'},
                {name:'sa',suit: 'spades',faceValue:'a',value: 14, imgPath:'./img/s_14.png'}
              ]

              //shufling function
              function shuffle(cardDeck) {
                    var m = cardDeck.length, t, i;

                    // While there remain elements to shuffle…
                    while (m) {

                      // Pick a remaining element…
                      i = Math.floor(Math.random() * m--);

                      // And swap it with the current element.
                      t = cardDeck[m];
                      cardDeck[m] = cardDeck[i];
                      cardDeck[i] = t;
                    }

                    return cardDeck;
                    }


                    //modal testing below
                    // Get the modal
                    var modal = document.getElementById('myModal');

                    function showModal() {

                      modal.style.display = "block";
                    }
                    function hideModal(){
                      modal.style.display = "none";
                    }

                    // Get the button that opens the modal
                    var btn = document.getElementById("myBtn");
                    // var btn = document.getElementById("myBtnP1Wins");
                    // var btn = document.getElementById("myBtnP2Wins")


                    // close modal on click outside of modal
                    window.onclick = function(event) {
                      if (event.target == modal) {
                          modal.style.display = "none";
                      }
                    }

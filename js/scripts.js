
//card array
var cardDeck = [{name:'d2',suit: 'diamond',faceValue:'2',value: 2, imgPath:'./img/d_02.png'},
                {name:'d3',suit: 'diamond',faceValue:'3',value: 3, imgPath:'./img/d_03.png'},
                {name:'d4',suit: 'diamond',faceValue:'4',value: 4, imgPath:'./img/d_04.png'},
                {name:'d5',suit: 'diamond',faceValue:'5',value: 5, imgPath:'./img/d_05.png'},
                {name:'d6',suit: 'diamond',faceValue:'6',value: 6, imgPath:'./img/d_06.png'},
                {name:'d7',suit: 'diamond',faceValue:'7',value: 7, imgPath:'./img/d_07.png'},
                {name:'d8',suit: 'diamond',faceValue:'8',value: 8, imgPath:'./img/d_08.png'},
                {name:'d9',suit: 'diamond',faceValue:'9',value: 9, imgPath:'./img/d_09.png'},
                {name:'d10',suit: 'diamond',faceValue:'10',value: 10, imgPath:'./img/d_10.png'},
                {name:'dj',suit: 'diamond',faceValue:'j',value: 11, imgPath:'./img/d_11.png'},
                {name:'dq',suit: 'diamond',faceValue:'q',value: 12, imgPath:'./img/d_12.png'},
                {name:'dk',suit: 'diamond',faceValue:'k',value: 13, imgPath:'./img/d_13.png'},
                {name:'da',suit: 'diamond',faceValue:'a',value: 14, imgPath:'./img/d_14.png'},
                {name:'h2',suit: 'club',faceValue:'2',value: 2, imgPath:'./img/h_02.png'},
                {name:'h3',suit: 'heart',faceValue:'3',value: 3, imgPath:'./img/h_03.png'},
                {name:'h4',suit: 'heart',faceValue:'4',value: 4, imgPath:'./img/h_04.png'},
                {name:'h5',suit: 'heart',faceValue:'5',value: 5, imgPath:'./img/h_05.png'},
                {name:'h6',suit: 'heart',faceValue:'6',value: 6, imgPath:'./img/h_06.png'},
                {name:'h7',suit: 'heart',faceValue:'7',value: 7, imgPath:'./img/h_07.png'},
                {name:'h8',suit: 'heart',faceValue:'8',value: 8, imgPath:'./img/h_08.png'},
                {name:'h9',suit: 'heart',faceValue:'9',value: 9, imgPath:'./img/h_09.png'},
                {name:'h10',suit: 'heart',faceValue:'10',value: 10, imgPath:'./img/h_10.png'},
                {name:'hj',suit: 'heart',faceValue:'j',value: 11, imgPath:'./img/h_11.png'},
                {name:'hq',suit: 'heart',faceValue:'q',value: 12, imgPath:'./img/h_12.png'},
                {name:'hk',suit: 'heart',faceValue:'k',value: 13, imgPath:'./img/h_13.png'},
                {name:'ha',suit: 'heart',faceValue:'a',value: 14, imgPath:'./img/h_14.png'},
                {name:'c2',suit: 'club',faceValue:'2',value: 2, imgPath:'./img/c_02.png'},
                {name:'c3',suit: 'club',faceValue:'3',value: 3, imgPath:'./img/c_03.png'},
                {name:'c4',suit: 'club',faceValue:'4',value: 4, imgPath:'./img/c_04.png'},
                {name:'c5',suit: 'club',faceValue:'5',value: 5, imgPath:'./img/c_05.png'},
                {name:'c6',suit: 'club',faceValue:'6',value: 6, imgPath:'./img/c_06.png'},
                {name:'c7',suit: 'club',faceValue:'7',value: 7, imgPath:'./img/c_07.png'},
                {name:'c8',suit: 'club',faceValue:'8',value: 8, imgPath:'./img/c_08.png'},
                {name:'c9',suit: 'club',faceValue:'9',value: 9, imgPath:'./img/c_09.png'},
                {name:'c10',suit: 'club',faceValue:'10',value: 10, imgPath:'./img/c_10.png'},
                {name:'cj',suit: 'club',faceValue:'j',value: 11, imgPath:'./img/c_11.png'},
                {name:'cq',suit: 'club',faceValue:'q',value: 12, imgPath:'./img/c_12.png'},
                {name:'ck',suit: 'club',faceValue:'k',value: 13, imgPath:'./img/c_13.png'},
                {name:'ca',suit: 'club',faceValue:'a',value: 14, imgPath:'./img/c_14.png'},
                {name:'s2',suit: 'spades',faceValue:'2',value: 2, imgPath:'./img/s_02.png'},
                {name:'s3',suit: 'spades',faceValue:'3',value: 3, imgPath:'./img/s_03.png'},
                {name:'s4',suit: 'spades',faceValue:'4',value: 4, imgPath:'./img/s_04.png'},
                {name:'s5',suit: 'spades',faceValue:'5',value: 5, imgPath:'./img/s_05.png'},
                {name:'s6',suit: 'spades',faceValue:'6',value: 6, imgPath:'./img/s_06.png'},
                {name:'s7',suit: 'spades',faceValue:'7',value: 7, imgPath:'./img/s_07.png'},
                {name:'s8',suit: 'spades',faceValue:'8',value: 8, imgPath:'./img/s_08.png'},
                {name:'s9',suit: 'spades',faceValue:'9',value: 9, imgPath:'./img/s_09.png'},
                {name:'s10',suit: 'spades',faceValue:'10',value: 10, imgPath:'./img/s_10.png'},
                {name:'sj',suit: 'spades',faceValue:'j',value: 11, imgPath:'./img/s_11.png'},
                {name:'sq',suit: 'spades',faceValue:'q',value: 12, imgPath:'./img/s_12.png'},
                {name:'sk',suit: 'spades',faceValue:'k',value: 13, imgPath:'./img/s_13.png'},
                {name:'sa',suit: 'spades',faceValue:'a',value: 14, imgPath:'./img/s_14.png'}
              ]





  //Modal array
  var modalContent = [ {name: 'winner1ModalHand', text:'Player 1 Wins Hand!'},
                {name: 'winner2ModalHand', text:'Player 2 Wins Hand!'},
                {name: 'pushModalHand', text:'Push - No Winner'},
                {name: 'winner1ModalGAme', text:'Player 1 Wins Game!'},
                {name: 'winner2ModalGAme', text:'Player 2 Wins Game!'}
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

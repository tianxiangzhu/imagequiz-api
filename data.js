import daffodil from './image/daffodil.png';
import cherryblossom from './image/cherryblossom.png';
import daisy from './image/daisy.png';
import lily from './image/lily.png';
import rose from './image/rose.png';
import sunflower from './image/sunflower.png';
import tulip from './image/tulip.png';
import waterlily from './image/waterlily.png';
import bear from './image/bear.jpg';
import butter from './image/butter.jpg';
import cat from './image/cat.jpg';
import croissant from './image/croissant.jpg';
import elephant from './image/elephant.jpg';
import fruit from './image/fruit.jpg';
import lion from './image/lion.jpg';
import milkshake from './image/milkshake.jpg';
import pie from './image/pie.jpg';
import rat from './image/rat.jpg';

var quizzes = [
    ['Quiz1',daffodil,"1"],
    ['Quiz2',cherryblossom,"2"],
    ['Quiz3',daisy,"3"]
]   

var questions = {
    Quiz1: 
        [
            [daffodil,["daffodil", "cherryblossom", "sunflower", "waterlily"],"daffodil"],
            [cherryblossom,["daisy", "sunflower", "lily", "cherryblossom"],"cherryblossom"],
            [daisy,["waterlily", "cherryblossom", "daisy", "rose"],"daisy"],
            [lily,["rose", "lily", "rose", "waterlily"],"lily"],
            [rose,["tulip", "sunflower", "waterlily", "rose"],"rose"],
            [sunflower,["sunflower", "tulip", "rose", "daisy"],"sunflower"],
        ],
    Quiz2:
        [
            [tulip,["daisy", "waterlily", "lily", "tulip"],"tulip"],
            [waterlily,["daffodil", "waterlily", "tulip", "cherryblossom"],"waterlily"],
            [bear,["bear", "rat", "lion", "elephant"],"bear"],
            [butter,["croissant", "butter", "milkshake", "fruit"],"butter"],
            [cat,["rat", "lion", "cat", "bear"],"cat"],
            [croissant,["bread", "butter", "milkshake", "croissant"],"croissant"],
        ],
    Quiz3:
        [
            [elephant,["elephant", "cat", "rat", "bear"],"elephant"],
            [fruit,["nut", "fruit", "wheat", "rice"],"fruit"],
            [lion,["pardus", "cat", "lion", "tiger"],"lion"],
            [milkshake,["egg", "soup", "milk", "milkshake"],"milkshake"],
            [pie,["pie", "cake", "mooncake", "ice cream"],"pie"],
            [rat,["cat", "rat", "lion", "tiger"],"rat"],
        ]
}

module.exports.quizzes = quizzes
module.exports.questions = questions
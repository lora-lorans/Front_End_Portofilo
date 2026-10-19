let container= document.createElement('div');
document.body.appendChild(container);
container.style.textAlign= 'center';


//elements
let card= document.createElement('div');
let head= document.createElement('h2');
let paragraph= document.createElement('p');
let img= document.createElement('img');
let button= document.createElement('button');
 

//create contents for elements
let title= document.createTextNode('Arman Andis');
let text= document.createTextNode('Front-End WEB Developer');
let btn_name= document.createTextNode('Visit My Potfolio');


//add contetnts to elements
head.appendChild(title);
paragraph.appendChild(text);
img.src='img/studentka2.png';
button.appendChild(btn_name)

card.appendChild(head); 
card.appendChild(paragraph);
card.appendChild(img);
card.appendChild(button);

container.appendChild(card);

//style
card.style.width= '400px';
img.style.width = '100%';
//******************************************* */
//ليكون الكارد واضح فوق الخلفية
card.style.background = 'rgba(255, 255, 255, 0.12)';
card.style.backdropFilter = 'blur(10px)';
card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
card.style.borderRadius = '16px';
card.style.color = '#fff';
//****************************************** */
card.style.padding = '15px';
card.style.margin = '20px auto';
card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';

//animated background code

document.body.style.margin = '0';
document.body.style.minHeight = '100vh';

// الخلفية المتحركة
document.body.style.background =
  'linear-gradient(-45deg, #0f172a, #312e81, #1d4ed8, #581c87)';

document.body.style.backgroundSize = '400% 400%';
document.body.style.animation = 'gradientMove 12s ease infinite';

// إضافة حركة الخلفية باستخدام CSS
let style = document.createElement('style');

style.textContent = `
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

document.head.appendChild(style);


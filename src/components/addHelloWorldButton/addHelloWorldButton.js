import './addHelloWorldButton.scss';

class AddButton {
     render = () => {
          const buttonTag = document.createElement('button');
          buttonTag.innerHTML = "Click to show hello world";
          buttonTag.classList.add('button')
          const body = document.querySelector('body');
          body.appendChild(buttonTag);
          buttonTag.onclick = this.buttonClick
     }

     buttonClick = () => {
          const pTag = document.createElement('p');
          pTag.innerHTML = "Hello world";
          pTag.classList.add('desc')
          const body = document.querySelector('body');
          body.appendChild(pTag);
     }
}

export default AddButton;
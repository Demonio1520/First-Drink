import '../css/functions.css';
import webpackImg from '../assets/img/webpack-logo.png';

export const body = (name) => {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    h1.innerText = `Hola ${name}.`;
    img.src = webpackImg;
    document.body.append(h1);
    document.body.append(img);
}
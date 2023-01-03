import './index.scss'
import './style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <header class="main-header">
        <div class="layers">
            <div class="layer__header">
                <div class="layers__caption">Welcome to Parallax</div>
                <div class="layers__title">Fairy Forest</div>            
            </div>  
            <div class="layer layers__base"  style="backgroung-image: url(./public/img/layer-base.png);"></div>
            <div class="layer layers__title" style="backgroung-image: url(./public/img/layer-middle.png);"></div>
            <div class="layer layers__front" style="backgroung-image: url(./public/img/layer-front.png);"></div>  
        </div>
    </header>
    
    <article class="main-artice" style="background-image: url(/img/dungeon.jpg)">
        <div class="main-article__content">
            <h2 class="main-article__header">To be continued</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor earum id incidunt magnam mollitia nihil, officiis velit? Cumque delectus, dolore esse fugit hic in iure laudantium mollitia natus odio veniam, vero.</p>
        </div>
        <div class="copy">© Parallax</div>
    </article>
  </div>
`
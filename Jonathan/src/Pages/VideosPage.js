import React from 'react';
import './Videos.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VideosPage() {
  return (
    <body>
      <div class="e30_7">
        <div  class="e30_8"></div>
        <div  class="e30_9"></div>
          <span  class="e30_20">Videos</span>
        <div  class="e30_21"></div>
        <div  class="e30_22"></div>
        <div  class="e30_31"></div>
        <div  class="e30_32"></div>
          <span  class="e30_33">Fantasmas</span>
          <span  class="e30_34">Urbano</span>
          <span  class="e30_35">Monstruos</span>
          <span  class="e30_36">Ovnis</span>
        <div  class="e38_189"></div>
        <div class="e40_44">
          <div  class="e38_190"></div>
          <div  class="e38_191"></div>
            <a href='Inicio' class="e38_192">The lost in the dark</a>
          </div>
          <div  class="e38_193"></div>
          <div  class="e38_194"></div>
            <a href='Imagenes' class="e38_195">Imágenes</a>
            <a href='Videos' class="e38_196">Videos</a>
            <a href='Historias' class="e38_197">Historias</a>
            <a href='Audios' class="e38_198">Audios</a>
            <a href='About' class="e38_199">Acerca de</a>
            <Container>
              <div className="ratio1 ratio-16x9" style={{"--bs-aspect-ratio": "100%"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uY2rJYxCNAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="ratio2 ratio-16x9" style={{"--bs-aspect-ratio": "100%"}}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wg26p73qjR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="ratio3 ratio-16x9" style={{"--bs-aspect-ratio": "100%"}}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YwB2wWcb1tU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="ratio4 ratio-16x9" style={{"--bs-aspect-ratio": "100%"}}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hrm4yhDAKKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Container>
            
      </div>
          </body>
  );
}

export default VideosPage;
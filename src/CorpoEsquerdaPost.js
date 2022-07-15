export default function CorpoEsquerdaPost(props){
    return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imgUsuario} />
                        {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imgConteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imgCurtida} />
                        <div class="texto">
                            Curtido por <strong>{props.curtidoPor}</strong> e <strong>{props.quantidadeCurtidas}</strong>
                        </div>
                    </div>
                </div>
            </div>
    );
}
import React from "react";

export default function CorpoEsquerdaPost(props){
    const [curtida,setCurtida] = React.useState("md hydrated");
    const [icone,setIcone] = React.useState("heart-outline");
    const [quantidadeCurtidas,setQuantidadeCurtidas] = React.useState(props.quantidadeCurtidas);
    console.log(quantidadeCurtidas);

    function curtirPublicacao(){
        if(curtida==="md hydrated") {
            setCurtida("md hydrated vermelho");
            setIcone("heart");
            setQuantidadeCurtidas(props.quantidadeCurtidas+1)
        }
        if(curtida==="md hydrated vermelho") {
            setCurtida("md hydrated");
            setIcone("heart-outline");
            setQuantidadeCurtidas(props.quantidadeCurtidas)
        }
    }
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
                            <ion-icon name={icone} class={curtida} onClick={curtirPublicacao}></ion-icon>
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
                            Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {(quantidadeCurtidas).toLocaleString('pt-BR')} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    );
}
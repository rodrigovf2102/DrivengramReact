import CorpoEsquerdaPost from "./CorpoEsquerdaPost";
export default function CorpoEsquerdaPosts() {
    const posts = [
        {
            imgUsuario: "./img/meowed.svg",
            nomeUsuario: "meowed",
            imgConteudo: "./img/gato-telefone.svg",
            imgCurtida: "./img/respondeai.svg",
            curtidoPor: "respondeai",
            quantidadeCurtidas: "outras 101.523 pessoas"
        },
        {
            imgUsuario: "./img/barked.svg",
            nomeUsuario: "barked",
            imgConteudo: "./img/dog.svg",
            imgCurtida: "./img/adorable_animals.svg",
            curtidoPor: "adorable_animals",
            quantidadeCurtidas: "outras 99.159 pessoas"
        }
    ]
    return (
        <div class="posts">
            {posts.map(post => <CorpoEsquerdaPost imgUsuario={post.imgUsuario} nomeUsuario={post.nomeUsuario} imgConteudo={post.imgConteudo} 
            imgCurtida={post.imgCurtida} curtidoPor={post.curtidoPor} quantidadeCurtidas={post.quantidadeCurtidas} />)}
        </div>
    );
}
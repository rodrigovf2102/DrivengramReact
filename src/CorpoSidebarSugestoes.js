import CorpoSidebarSugestoesTitulo from './CorpoSidebarSugestoesTitulo'
import CorpoSidebarSugestao from './CorpoSidebarSugestao'

export default function CorpoSidebarSugestoes() {
    const sugestoes = [
        {
            img : "./img/bad.vibes.memes.svg",
            nome : "bad.vibes.memes",
            razao : "Segue você"
        },
        {
            img : "./img/chibirdart.svg",
            nome : "chibirdart",
            razao : "Segue você"
        },
        {
            img : "./img/razoesparaacreditar.svg",
            nome : "razoesparaacreditar",
            razao : "Novo no Instagram"
        },
        {
            img : "./img/adorable_animals.svg",
            nome : "dorable_animals",
            razao : "Segue você"
        },
        {
            img : "./img/smallcutecats.svg",
            nome : "smallcutecats",
            razao : "Segue você"
        }
    ]
    return (
        <div class="sugestoes">
            <CorpoSidebarSugestoesTitulo/>
            {sugestoes.map(sugestao => <CorpoSidebarSugestao img={sugestao.img} nome={sugestao.nome} razao={sugestao.razao}/>)}
        </div>
    );
}
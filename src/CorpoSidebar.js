import CorpoSidebarUsuario from './CorpoSidebarUsuario';
import CorpoSidebarSugestoes from './CorpoSidebarSugestoes';
import CorpoSidebarLinksCopyright from './CorpoSidebarLinksCopyright';

export default function CorpoSidebar(){
    const usuario = {
        título : "catanacomics",
        subtítulo : "Catana"
    }
    return(
        <div class="sidebar">
            <CorpoSidebarUsuario título={usuario.título} subtítulo={usuario.subtítulo}/>
            <CorpoSidebarSugestoes/>
            <CorpoSidebarLinksCopyright/>
        </div>
    );
}
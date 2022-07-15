export default function CorpoSidebarUsuario(props) {
    return (
        <div class="usuario">
            <img src="./img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.título}</strong>
                {props.subtítulo}
            </div>
        </div>
    );
}
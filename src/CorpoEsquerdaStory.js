export default function CorpoEsquerdaStory(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.storyImg} />
            </div>
            <div class="usuario">
                {props.storyName}
            </div>
        </div>
    );
}
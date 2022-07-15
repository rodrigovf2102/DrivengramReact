import CorpoEsquerdaStory from "./CorpoEsquerdaStory";

export default function CorpoEsquerdaStories() {

    const stories = [
        {
            storyImg : "./img/9gag.svg",
            storyName : "9gag"
        },
        {
            storyImg : "./img/meowed.svg",
            storyName : "meowed"
        },
        {
            storyImg : "./img/barked.svg",
            storyName : "barked"
        },
        {
            storyImg : "./img/nathanwpylestrangeplanet.svg",
            storyName : "nathanwpylestrangeplanet"
        },
        {
            storyImg : "./img/wawawicomics.svg",
            storyName : "wawawicomics"
        },
        {
            storyImg : "./img/respondeai.svg",
            storyName : "respondeai"
        },
        {
            storyImg : "./img/filomoderna.svg",
            storyName : "filomoderna"
        },
        {
            storyImg : "./img/memeriagourmet.svg",
            storyName : "memeriagourmet"
        }
    ]

    return (
        <div class="stories">
            {stories.map(story => <CorpoEsquerdaStory storyImg={story.storyImg} storyName={story.storyName}/> )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
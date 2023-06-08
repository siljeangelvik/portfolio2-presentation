import React, {useEffect} from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Reveal from 'reveal.js';
import 'reveal.js/plugin/markdown/markdown.js';

function Presentation() {
    useEffect(() => {
        Reveal.initialize({
            plugins: [RevealMarkdown],
            title: 'Presentation',
            description: 'Presentation',
            transition: 'fade',
            backgroundTransition: 'fade',
            // The "normal" size of the presentation, aspect ratio will
            // be preserved when the presentation is scaled to fit different
            // resolutions. Can be specified using percentage units.
            width: 960,
            height: 700,
            // Factor of the display size that should remain empty around the content
            margin: 0.04,
            // Bounds for smallest/largest possible scale to apply to content
            minScale: 0.2,
            maxScale: 2.0,
            // Display controls in the bottom right corner
            controls: true,
            // Display a presentation progress bar
            progress: true,
            // Display the page number of the current slide
            slideNumber: true,
            // Push each slide change to the browser history
            touch: true,
            // Loop the presentation
            showNotes: true,
            pdfMaxPagesPerSlide: 1,
            history: true,
            keyboard: true,
            keyCodes: {
                38: 'prev', // up arrow
                40: 'next', // down arrow
                37: 'prev', // left arrow
                39: 'next', // right arrow
                32: null, // space - do not step through fragments with space
                13: null, // enter - do not step through fragments with enter
                36: 'first', // home
                35: 'last', // end
                33: 'prev', // pg up
                34: 'next', // pg down
                9: null, // tab
                191: null // ?
            },
            // Enable slide navigation via mouse wheel
            mouseWheel: true,
            // Apply a 3D roll to links on hover
            rollingLinks: true,
            dependencies: [
                {src: 'plugin/markdown/marked.js'},
                {src: 'plugin/markdown/markdown.js'},
                {src: 'plugin/notes/notes.js', async: true},
            ]
        });
    }, []);

    return (
        <div className="reveal">
            <div className="slides">
                <section data-markdown="%PUBLIC_URL%/slideshow.md" data-separator="^\n---\n$"
                         data-separator-vertical="^\n--\n$"></section>
            </div>
        </div>
    );
}

export default Presentation;

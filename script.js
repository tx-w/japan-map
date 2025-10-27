document.addEventListener('DOMContentLoaded', async () => {
    //load the raw svg txt
    const res = await fetch('assets/jp.svg');
    const svgText = await res.text();

    //inline it into the page so it becomes part of the dom
    const mapEl= document.getElementById('map');
    mapEl.innerHTML = svgText;

    //grab prefecture paths and add minimal interactivity
    const paths = mapEl.querySelectorAll('svg path');

    paths.forEach (p => {
        p.setAttribute('tabindex', '0');
        p.addEventListener('mouseenter', () => p.classList.add('hover'));
        p.addEventListener('mouseleave', () => p.classList,renmove('hover'));
        p.addEventListener('click', () => {
            const label = p.getAttribute('name') || p.id || 'Unknown';
            alert(label);
        });
    });
});
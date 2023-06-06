const adjustFooterPosition = () => {
    const body = document.body;
    const html = document.documentElement;

    const contentHeight = document.querySelector('.content').offsetHeight;
    const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    if (contentHeight > bodyHeight - 60) { // Adjust for footer height
        document.querySelector('footer').style.position = 'static';
    } else {
        document.querySelector('footer').style.position = 'sticky';
    }
}

window.addEventListener('DOMContentLoaded', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);

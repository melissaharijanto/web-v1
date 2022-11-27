export const vh = (percent) => {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

export const vw = (percent) => {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}

export const vmin = (percent) => {
    var h = vh(percent);
    var w = vw(percent);
    return Math.min(h, w);
}

export const vmax = (percent) => {
    var h = vh(percent);
    var w = vw(percent);
    return Math.max(h, w);
}
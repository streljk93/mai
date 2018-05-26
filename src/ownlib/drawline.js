function getOffset( el ) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
    };
}

export default function drawline(line, div1, div2, color, thickness) {
    var off1 = getOffset(div1);
    var off2 = getOffset(div2);
    // bottom right
    var x1 = off1.left + (off1.width / 2);
    var y1 = off1.top + (off1.height);
    // top right
    var x2 = off2.left + (off2.width / 2);
    var y2 = off2.top;
    // distance
    var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    // center
    var cx = ((x1 + x2) / 2) - (length / 2);
    var cy = ((y1 + y2) / 2) - (thickness / 2);
    // angle
    var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
    // make hr

    line.style.visibility = 'visible';
    line.style.padding = '0px';
    line.style.margin = '0px';
    line.style.height = thickness + 'px';
    line.style.backgroundColor = color;
    line.style.lineHeight = '1px';
    line.style.position = 'fixed';
    line.style.left = cx + 'px';
    line.style.top = cy + 'px';
    line.style.width = length + 'px';
    line.style.transform = 'rotate(' + angle + 'deg)';
    line.style.zIndex = '-999';
}
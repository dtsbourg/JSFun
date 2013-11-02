var scrollDiv = function(dir, px) {
        var scroller = document.getElementById('scroller');
        if (dir == 'l') {
            scroller.scrollLeft -= px;
        }
        else if (dir == 'r') {
            scroller.scrollLeft += px;
        }
    }
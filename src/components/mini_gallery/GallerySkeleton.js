import { Skeleton } from '@mui/material';
const GallerySkeleton = () => {

    // taken from https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height
    function vh(percent) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
    }
      
    function vw(percent) {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (percent * w) / 100;
    }

    var skeletonWidth = Math.min(parseFloat('200px'), vh(10) + vw(10));
    var skeletonHeight = 5/4 * skeletonWidth;

    return (
        <div>

        </div>
    );
}

export default GallerySkeleton;
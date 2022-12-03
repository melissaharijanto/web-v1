import { Skeleton, Box } from '@mui/material';
import { vh, vw } from '../../functions/UnitConverter.js'
const GallerySkeleton = () => {
    
    var skeletonWidth = Math.min(parseFloat('200px'), vh(9) + vw(9));
    var skeletonHeight = 5/4 * skeletonWidth;

    return (
        <div>
            <Box sx={{ margin: '5px' }}>
                <Skeleton variant="rectangular" width={skeletonWidth} height={skeletonHeight}/>
            </Box>
        </div>
    );
}

export default GallerySkeleton;
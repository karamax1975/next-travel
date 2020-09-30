export default function resizeContainer(width){
    let container=0;
    if (width > 1400) {
        container = 1320;
    }
    if (width > 1200 && width < 1400) {
        container = 1140;
    }
    if(width>992 &&width<1200){
        container = 960;
    }
    return container;
}
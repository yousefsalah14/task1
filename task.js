// -------------------------problem1----------------------------------
function calc_bounces(n) {
    let c = 0;
    let no=n;
    while(no>2){
        c++;
        no= no /2 ;
    }
    return c ;
}
console.log(calc_bounces(3));
// ************************************************************
// --------------------problem2-----------------------------------
function inc_ver(ver){
    let sp=ver.split(".");
    let la=sp.length-1;
    sp[la]=(Number(sp[la])+1);
    return sp.join('.');

}
console.log((inc_ver("1.8.2")));
// DOM 요소에 대한 참조를 HTMLElement로 타입을 명시합니다.
const x: HTMLElement | null = document.getElementById("login");
const y: HTMLElement | null = document.getElementById("register");
const z: HTMLElement | null = document.getElementById("btn");

// matchMedia의 반환값을 MediaQueryList로 타입을 명시합니다.
const isDesktop: MediaQueryList = matchMedia("screen and (min-width:1024px)");
const isMobile: MediaQueryList = matchMedia("screen and (max-width:757px)");

if(isDesktop.matches){
    console.log("desktop");   

    function login(){
        if(x && y && z) {
            x.style.left = "550px";
            y.style.left = "-300px";
            z.style.left = "0";
        }
    }

    function register(){
        if(x && y && z) {
            x.style.left = "-550px";
            y.style.left = "545px";
            z.style.left = "105px";
        }
    }
}else if(isMobile.matches){
    console.log("moblie");    
    
    function login(){
        if(x && y && z) {
            x.style.left = "20px";
            y.style.left = "-500px";
            z.style.left = "0";
        }
    }

    function register(){
        if(x && y && z) {
            x.style.left = "-500px";
            y.style.left = "20px";
            z.style.left = "70px";
        }
    }
}

window.onresize = function(ev: UIEvent): void {
    document.location.reload();
};

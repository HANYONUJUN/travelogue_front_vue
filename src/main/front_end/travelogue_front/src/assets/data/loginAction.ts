const isDesktop: MediaQueryList = matchMedia("screen and (min-width:1024px)");
const isMobile: MediaQueryList = matchMedia("screen and (max-width:757px)");

export function login() {
  const x: HTMLElement | null = document.getElementById("login");
  const y: HTMLElement | null = document.getElementById("register");
  const z: HTMLElement | null = document.getElementById("btn");
  
  if (x && y && z) {
    
    if (isDesktop.matches) {
      x.style.left = "550px";
      y.style.left = "-300px";
      z.style.left = "0";
    } else if (isMobile.matches) {
      x.style.left = "20px";
      y.style.left = "-500px";
      z.style.left = "0";
    }
  }
}


export function register() {
  const x: HTMLElement | null = document.getElementById("login");
  const y: HTMLElement | null = document.getElementById("register");
  const z: HTMLElement | null = document.getElementById("btn");

  if (x && y && z) {
    if (isDesktop.matches) {
      x.style.left = "-550px";
      y.style.left = "545px";
      z.style.left = "105px";
    } else if (isMobile.matches) {
      x.style.left = "-500px";
      y.style.left = "20px";
      z.style.left = "70px";
    }
  }
}

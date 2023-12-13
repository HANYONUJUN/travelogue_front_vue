const currentDate: HTMLElement | null = document.querySelector('.current-date');
const daysTag: HTMLElement | null = document.querySelector('.days');
const prevNextIcon: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.nav button');

let date: Date = new Date();
let currYear: number = date.getFullYear();
let currMonth: number = date.getMonth(); 

const months: string[] = [
    'January','February','March','April','May',
    'June','July','August','September','October','November','December',];

const renderCalendar = (): void => {
    let firstDayofMonth: number = new Date(currYear, currMonth, 1).getDay();   
    const lastDateofMonth: number = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth: number = new Date(currYear, currMonth ,lastDateofMonth).getDay();
    const lastDateofLastMonth: number = new Date(currYear, currMonth, 0).getDate();

    let liTag: string = "";

    for(let i =firstDayofMonth; i >0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth -i + 1}</li>`;
    }

    for(let i =1; i<= lastDateofMonth; i++){
        liTag += `<li>${i}</li>`;
    }

    for(let i = lastDayofMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    if(daysTag) {
        daysTag.innerHTML = liTag;
    }
    if(currentDate) {
        currentDate.innerHTML =`${months[currMonth]} ${currYear}`;
    }
};

renderCalendar();

prevNextIcon.forEach((icon: HTMLButtonElement) => {
    icon.addEventListener('click', () => {
      currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
      if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear(); 
        currMonth = date.getMonth(); 
      } else {
        date = new Date();
      }
      renderCalendar();
    });
});

const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
}, options);

const titleList: NodeListOf<HTMLElement> = document.querySelectorAll('h2');

// 반복문을 돌려 모든 DOM에 적용
titleList.forEach((el: HTMLElement) => observer.observe(el));


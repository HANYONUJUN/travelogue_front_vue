// observer.ts
export const options = {
  root: null,
  rootMargin: "0px",
  threshold: .5,
}

export const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

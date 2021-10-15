// callback function to be run whenever threshold is crossed in one direction or the other
const callback = (entries, observer) => {
    const entry = entries[0];
    
    // toggle class depending on if content div intersects with viewport
    const navBar = document.querySelector('.navi');
    navBar.classList.toggle('navi-fixed-top--scrolled', !entry.isIntersecting);
  }
  
  // options controls circumstances under which the observer's callback is invoked
  const options = {
    // no root provided - by default browser viewport used to check target visibility
    // only detect if target element is fully visible or not
    threshold: [1]
  };
  
  const io = new IntersectionObserver(callback, options);
  
  // observe content div 
  const target = document.querySelector('.content');
  io.observe(target);
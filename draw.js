
  // code...


  const addPerformer = document.querySelector('.add-performer');
  const doDraw = document.querySelector('.draw');
  const performerList = document.querySelector('.performerList');


  const performers = JSON.parse(localStorage.getItem('performers')) || [];

  function populateList(performers=[], performerList) {
      performerList.innerHTML = performers.map((performer, i) => {
        return `
        <li class="bb dotted pv3 b--light-silver">${i +1}.  ${performer} </li>        
        `
      }).join('');
    
    
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  function createOrder() {

    performerList.innerHTML = performers.map((performer, i) => {
      return `
      <li class=" dotted pv3 tc"> &nbsp;</li>
      
      `
    }).join('');

    console.log('fired');
    const shuffled = shuffle(performers);
    setTimeout(() => { 
      
      populateList(shuffled, performerList);  
     }, 2000);
    
  }

  function addPerf(e) {
    e.preventDefault();

    const name = (this.querySelector('[name=perf]')).value;
    performers.push(name);

    populateList(performers, performerList);
    console.log(this);

    // console.log(perfomers);

    this.reset();
  }

  addPerformer.addEventListener('submit', addPerf);

  doDraw.addEventListener('click', createOrder);


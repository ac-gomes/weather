
const App = document.getElementById('App-weather');
const detailCard = document.getElementById('detail-card');
const btnCloseCard = document.getElementById('btn-close');
const capitaisTable1 = document.getElementById('capitais-body');
const capitaisTable2 = document.getElementById('capitais-body2');

const header = document.getElementById('header-id');
const title = document.getElementById('title-id');


capitaisTable1.addEventListener('click', td =>{
  let trValue = td.target
  console.log(trValue)

  detailCard.style.display="block";

  cssReset(header,title);

})

const cssReset = (header, title) => {
  if (detailCard.style.display="block") {
    header.style.alignItems='center';
    header.style.width='100vw';
    header.style.height='70px';
    header.style.paddingLeft ='30px';
    title.style.fontSize='30px';
  }
}

const toggleDetailCard = () =>{
  if (detailCard.style.display = 'none' ) {
    detailCard.style.display = 'none';

    header.removeAttribute('style')
    title.removeAttribute('style');

  } else {
      detailCard.style.display = 'block';
  }
};

btnCloseCard.addEventListener('click',toggleDetailCard);


// capitaisTable2.addEventListener('click', td =>{
//   let trValue = td.target
//   console.log(trValue)
//   detailCard.style.display="block";
// })


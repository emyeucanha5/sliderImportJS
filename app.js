import persons from './data.js'
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const container = document.querySelector('.slide-container');


persons.forEach(function(person, index) {
	const article = document.createElement("article");
	article.classList.add("slide");
	if(index === 0){
		article.classList.add("active");
	}
	if(index === 1){
		article.classList.add("next");
	}
	if(index === 2){
		article.classList.add("last");
	}
	article.innerHTML = `
	<img src=${person.img} alt="image" class="img">
        <h4>${person.name}</h4>
        <p class="title">${person.job}</p>
        <p class="text">
         ${person.text}
        </p>
      <div class="quote-icon">
        <i class="fas fa-quote-right"></i>
      </div>
    `;
    container.append(article);
});

function next(){
	pers.forEach(function(per) {
		if(per.classList.contains("active")){
			per.classList.remove('active');
			per.classList.add('last');
		}else if(per.classList.contains("last")){
			per.classList.remove('last');
			per.classList.add('next');
		}else{
			per.classList.remove('next');
			per.classList.add('active');
		}
	});
}
function prev(){
	pers.forEach(function(per) {
		if(per.classList.contains("active")){
			per.classList.remove('active');
			per.classList.add('next');
		}else if(per.classList.contains("last")){
			per.classList.remove('last');
			per.classList.add('active');
		}else{
			per.classList.remove('next');
			per.classList.add('last');
		}
	});
}
const pers = document.querySelectorAll('.slide');
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);


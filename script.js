const recipes = [{
        title: 'Eggs',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: 'first_recipe',
    },
    {
        title: 'Eggs',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: "second_recipe",
    },
    {
        title: 'My recipe',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: "third_recipe",
    },
];


const cotainer = document.querySelector('.container');
const renderCard = () => {
    // check the recipes collection
    for (let i = 0; i < recipes.length; i++) {
        // generate the html
        const myHtml = `
			<div class="container" data-id = ${recipes[i].id}>
              <ol class ="container_recipe">
				<li>${recipes[i].title}</li>
				<li><img src="${recipes[i].picture}" alt=""></li>
				<li>
					<ul class = "recipe_time_diffuculty">
						<li class="timing">
						<a href="">Timing : ${recipes[i].timing}</a>
						</li>
						<li>
						<a href=""> Difficulty : ${recipes[i].difficulty}</a>
						</li>
					</ul>
				</li>
				<li><button class = "button-detail">More information</button> </li>
			   </ol>
		    </div>
			`
        cotainer.insertAdjacentHTML("beforebegin", myHtml);
    }
};
// Grab the modal
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const closeModal = () => {
    outerModal.classList.remove('open');
};
// function for  modal

const handleClick = event => {
    // check if there is button-detail
    if (event.target.matches('.button-detail')) {
        const parent = event.target.closest('.container');
        const id = parent.dataset.id;
        const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
        // creat  an  html of the modal 
        const detailHTML = ` 
        <div class="recipe">
            <h1 class="recipe-heading">${recipe.title} by ${recipe.author}</h1>
            <p><img src="${recipe.picture}" alt=""></p>
            <ol class="about-recipe">
                <li class="recipe_information">
                    <ul class="iformation_time_difficulty">
                        <li> Timing : ${recipe.timing}</li>
                        <li> difficulty : ${recipe.difficulty}</li>
                    </ul>
                    <ul class = "detail">
                        <li class="ingrediends"> ingredients : <br> ${recipe.ingredients}</li>
                        <li class="steps"> Steps : <br> ${recipe.steps}</li>
                    </ul>
                </li>
            </ol>
        </div>
      `
        modalInner.innerHTML = detailHTML;
        modalOuter.classList.add('open');
        closeModal();
    }
    console.log(handleClick());
}

const generateButton = document.querySelector('button.generate');
// event delegation

window.addEventListener('click', handleClick);
generateButton.addEventListener('click', renderCard);
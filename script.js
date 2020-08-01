console.log('HELLO');
var w = "hello"
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
        id: 'fine',
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
        id: "good",
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
        id: "hello",
    },
];

recipes.getObjectFromID = (id) => recipes.find(t => t.id === id);

var returnedObject = recipes.getObjectFromID(w);

console.log(returnedObject);
const values = Object.values(recipes)
console.log(values);

const cotainer = document.querySelector('.container');

const renderCard = () => {
    // check the recipes collection
    for (let i = 0; i < recipes.length; i++) {
        const myHtml = `
			<div class="container" data-id = ${recipes[i].id}>
              <ol class ="container_recipe">
				<li>${recipes[i].title}</li>
				<li><img src="${recipes[i].picture}" alt=""></li>
				<li>
					<ul class = "recipe_time_diffuculty">
						<li class="timing">
						<a href="">${recipes[i].timing}</a>
						</li>
						<li>
						<a href="">${recipes[i].difficulty}</a>
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
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const closeModal = () => {
    outerModal.classList.remove('open');
};

const handleClick = event => {
    if (event.target.matches('.button-detail')) {
        const parent = event.target.closest('.container');
        const id = parent.dataset.id;
        const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
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


window.addEventListener('click', handleClick);



const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
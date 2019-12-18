import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})


export class MainCardComponent implements OnInit {

    image = '';
    altTxt = 'this is an image of fruit and vegetables in a bowl';
    recipeName = 'A Cacophony of Delectable Colombian Delights';
    ingredients = 'food, food, more food';
    recipeLink = 'This is a link to the recipe';
  constructor() { }
  ngOnInit() {
    this.getData();
  }

  populateCard = (data) => {
    console.log(data);
    // data.recipes.forEach(element => {

    // });
  };

  getData = () => {
    const url = 'https://www.food2fork.com/api/search?key=e607207c15383ae5817a77658f8beb28&q=chicken%20breast&page=2';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.populateCard(data);
    })
    .catch((error) => {
      throw new SyntaxError("MAX TYPED SOMETHING WRONG.")
    });
  };
}

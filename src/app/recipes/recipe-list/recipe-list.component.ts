import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  Recipes: Recipe[] = [
    new Recipe(
      'Test Title',
      'Test Description',
      // tslint:disable-next-line:max-line-length
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg/800px-Dosai_Chutney_Hotel_Saravana_Bhavan.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}

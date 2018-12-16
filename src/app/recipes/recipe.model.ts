export  class Recipe {
  public name: string;
  public description: string;i
  public imagePage: string;

  constructor(name: string, description: string, imagePath: string){
    this.name = name;
    this.description = description;
    this.imagePage = imagePath;
  }

}

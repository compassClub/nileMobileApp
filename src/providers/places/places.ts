import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlacesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlacesProvider {
  // Creates a new instance of the AutocompleteService
  public autocompleteService;
  public placeResultService;

  public predictionIds: Object[];
  public placeObjects: Object[];

  constructor() {
    this.autocompleteService = new google.maps.places.AutocompleteService();
    this.placeResultService = new google.maps.places.PlacesService(document.createElement('div'))

    this.predictionIds = [];
    this.placeObjects = [];
  }

  // Returns an array of Place ids based off of what getPlacePredictions returns.
  autocompleteSearch(search: string): Object[]{
    this.predictionIds = [];
    let me = this;
    this.autocompleteService.getPlacePredictions({input: search},
      function(predictions, status) {
      if(predictions == null){
      } else {
        predictions.forEach( function (prediction) {
          me.predictionIds.push({placeId: prediction.place_id, description: prediction.description})
        })
      }
    })
    // console.log(this.predictionIds)
    return this.predictionIds;
  }

  // Takes in an array of place ids and returns their respictive place results.
  placeIdsToObjects(placePredictions: String[]): Object[]{
    console.log("We got this far.")
    let me = this;
    console.log("Place Predictions are: " + placePredictions);
    placePredictions.forEach( function (prediction) {
      console.log("The placePredictions returned: " + prediction)
    },
    // placePredictions.forEach( function (placePredictionId){
    //   console.log("Hey searchForLocation ran.");
    //     me.placeResultService.getDetails({placeId: placePredictionId}, function(place, status){
    //       me.placeObjects.push({placeId: placePredictionId, address: place.formatted_address, name: place.name})
    //     })
    // })
    // console.log(this.placeObjects)
  )
    return this.placeObjects;
  }

}

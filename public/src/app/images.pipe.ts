import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log("ooooooooo",value)
    // for(let i=0;i<value.length;i++){
      // console.log("rrrrr",value)
      // console.log("ttttt",value[i])
      // if (value[i].indexOf("https") == -1) {
      //   image = image.replace("http", "https");
      // }
        
      // console.log("ssssssss" )
    // }
    // 
    // let value_modify= value.split('/');
    // console.log(value_modify.length);
    // // return null
    // let after_path = value_modify[value_modify.length-1];
    // debugger
    // console.log("gggggg",require(value)) 
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDom'
})
export class ParseDomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('vvv',value)
    // var oParser = new DOMParser();
    // console.log(oParser)
    // var oDOM = oParser.parseFromString(value, "text/html");
    // var text = oDOM.body.innerText;
    return null
  }

}

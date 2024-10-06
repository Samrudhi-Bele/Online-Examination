import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe',
  standalone: true
})
export class TitlePipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender=='male'){
      return "Mr." + value;
    }
    else
    return "Mrs." +value;
  }

}

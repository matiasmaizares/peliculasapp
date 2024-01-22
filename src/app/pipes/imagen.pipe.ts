import { Pipe, PipeTransform } from '@angular/core';

const URL ='https://image.tmdb.org/t/p'

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size:string='w500'): string {

    if(!img){
      return;
    }
    
    const imgUrl= `${URL}/${size}/${img}`;
    console.log(imgUrl);
    // https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg


    return imgUrl;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getFeature() {
    return this.http.get<RespuestaMDB>(
      `https://api.themoviedb.org/3/movie/popular?api_key=32fdeefa9736cafd907266f9150e1ad9&append_to_response=videos,images&language=es`
    );
  }
}

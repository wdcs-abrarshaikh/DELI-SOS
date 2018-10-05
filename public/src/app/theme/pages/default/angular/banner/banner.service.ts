import { Subject } from 'rxjs/Subject';
// import { URL } from './../../../../../app.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

const URL: string = "http://66.70.179.133:4009/solow/v2/api/admin/";
const URLS: string = "http://66.70.179.133:4009/solow/v2/api/";

@Injectable({
    providedIn: 'root'
})

export class BannerService {
    private bannersList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setBanners(data: any) {
        this.bannersList.next({ bannersList: data });
    }
    getBanners(): Observable<any>{
        return this.bannersList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))
        headers = headers.set('Content-Type', 'application/json')
    
        return headers;
    }
    addBanner(banner: any){
        var admin_id=JSON.parse(localStorage.getItem('currentUser'))
        
        return this.http.post<any>(URL + 'createBanner/'+admin_id, banner, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );

    }
    getAllBanner() {
        return this.http.get(URL + 'getBannerList', { headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        );
    }


    editBanner(banner:any,id: any) {
        var admin_id=JSON.parse(localStorage.getItem('currentUser'));
       
        return this.http.put<any>(URL + 'editBanner/' + id +'/'+admin_id, banner,{ headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }
    deleteBanner(id:any){
        
        var user_id=JSON.parse(localStorage.getItem('currentUser'));
       

        return this.http.put<any>(URL + 'deleteBanner/' + id +'/'+ user_id,{}, { headers: this.getHeaderWithToken() }).map((res: Response) => {
       
            return res });
           

    }
    uploadPic(pic:any){
       
        
        return this.http.post<any>(URLS + 'user/uploadPicture',pic, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => {
                   
                    return res }),
            );

    }
    resurrectBanner(id:any){
        var admin_id=JSON.parse(localStorage.getItem('currentUser'));
       

        return this.http.put<any>(URL + 'resurrectBanner/' + id +'/'+ admin_id,{}, { headers: this.getHeaderWithToken() }).map((res: Response) => {
       
            return res });

    }
  
   
}

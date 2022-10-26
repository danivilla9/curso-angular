import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { AppComponent } from '../app.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]

})
export class ContadorModule {

}
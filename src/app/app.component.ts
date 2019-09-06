import { Component } from '@angular/core'       // need component decorator on a class to make it an Angular component

@Component({                                    // metadata object with known properties to configure the class you are decorating.  You need AT LEAST selector and template (or template URL)
    selector: 'mw-app',                         // The selelctor is what angular will use to locate a custom html elment and apply the component (There will be an element in index.html called app-root)
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {}
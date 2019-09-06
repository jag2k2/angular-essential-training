//  Begin by creating the root module class.  We need to use a decorator (@NgModule) so Angular will know that the class code is intended to be an Angular module.  

import { NgModule } from '@angular/core';   //@NgModule decorator is exported from a module included in Angular's "core-scoped" package
import { BrowserModule } from '@angular/platform-browser';  //contains core directives and pipes for working with the DOM
import { AppComponent } from './app.component';

@NgModule({                             // meta-data properties: configure the object you are trying to decorate
    imports: [                          // brings in other needed angular modules
        BrowserModule
    ],                        
    declarations: [                     // makes other components, directives and pipes available to your module that don't come from another module
        AppComponent
    ],                   
    bootstrap: [                        // used in the root module and lets Angular know which components(s) are starting point for the bootstrap process (entry point for app code)
        AppComponent
    ]                       
})                                      // no semi because this is not a statement.  It is a piece of code that will be applied to another object

export class AppModule {}               // this is our app root module.  Export is part of the module loading syntax so it can be used in other files.
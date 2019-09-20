import { Component } from '@angular/core';

@Component({
    selector: 'pm-root',
    template: ` 
        <div>
            <div>My first angular component!</div>
        </div>
    `
})
export class AppComponent{
    pageTitle: string = 'Hey there';
}

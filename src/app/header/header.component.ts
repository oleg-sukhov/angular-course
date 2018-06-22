import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output('contentEvent') contentEventEmmiter = new EventEmitter<{type: 'recipe'|'shopping-list'}>();
    
    fireRecipeShow() {
        this.contentEventEmmiter.emit({type: 'recipe'});
    }

    fireShoppingListShow() {
        this.contentEventEmmiter.emit({type: 'shopping-list'});
    }
}
import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') inDropdwonOpen = false; 

    @HostListener("click") onButtonClick() {
        this.inDropdwonOpen = !this.inDropdwonOpen;
    } 
}
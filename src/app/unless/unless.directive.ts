import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {

    @Input() set appUnless(condition: boolean) {
        if (condition) {
            this.viewContainerRef.clear();
        } else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
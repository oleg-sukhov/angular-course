import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ReactiveDrivenComponent } from "./reactive-driven/reactive-driven.component";

const appRoutes: Routes = [
    {
        path: 'template', component: TemplateDrivenComponent
    },
    {
        path: 'reactive', component: ReactiveDrivenComponent
    },
    {
        path: '', pathMatch: 'full', redirectTo: "template"
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent},
    { path: '', pathMatch: 'full', redirectTo: '/home'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
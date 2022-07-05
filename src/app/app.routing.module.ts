import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { DemoCaseComponent } from "./demo/demo.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "demo", component: DemoCaseComponent },
            { path: "", component: HomeComponent },
            { path: "**", redirectTo: "home" },
        ]),
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}

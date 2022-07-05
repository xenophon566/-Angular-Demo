import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbThemeModule } from "@nebular/theme";
import { NEBULAR_ROOT, NEBULAR_ALL } from "./_define/nebular/nebular.module";
import { MatNativeDateModule } from "@angular/material/core";
import { MaterialModule } from "./_define/material/material.module";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DemoCaseComponent } from "./demo/demo.component";

const firebaseConfig = {
    apiKey: "AIzaSyB5UegVWFft7JgMm-_x1OcCWSqyae86RBk",
    authDomain: "my-demo-45d3d.firebaseapp.com",
    projectId: "my-demo-45d3d",
    storageBucket: "my-demo-45d3d.appspot.com",
    messagingSenderId: "777760611121",
    appId: "1:777760611121:web:1a757fd2b3c79bbee62e10",
    measurementId: "G-SJSJSZC08Q",
};

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MaterialModule,
        NbThemeModule.forRoot({ name: "default" }),
        ...NEBULAR_ROOT,
        ...NEBULAR_ALL,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    declarations: [AppComponent, HomeComponent, DemoCaseComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

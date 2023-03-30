import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { FivethComponentComponent } from "./components/fiveth-component/fiveth-component.component";
import { FourthComponentComponent } from "./components/fourth-component/fourth-component.component";
import { SecondComponentComponent } from "./components/second-component/second-component.component";
import { SeventhComponentComponent } from "./components/seventh-component/seventh-component.component";
import { SixthComponentComponent } from "./components/sixth-component/sixth-component.component";
import { ThirdComponentComponent } from "./components/third-component/third-component.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'um', component: FirstComponentComponent},
    {path: 'dois', component: SecondComponentComponent},
    {path: 'tres', component: ThirdComponentComponent},
    {path: 'quatro', component: FourthComponentComponent},
    {path: 'cinco', component: FivethComponentComponent},
    {path: 'seis', component: SixthComponentComponent},
    {path: 'cinco/:id', component: SeventhComponentComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}


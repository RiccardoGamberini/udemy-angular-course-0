/*
* Notes:
* - This branch shows what to do before starting to add routes.
* - In order to add routes i have to:
*   - Import the components to which the routes will points.
*   - Import Routes from @angular/router in order to create the routes.
*   - Import RouterModule from @angular/router in order to register the created routes.
*   - Add to imports array the returned value of forRoot function of RouterModule. The constant containing the routes must be passed to forRoot
*   function when called.
*   - Insert router-outlet tag where you want Angular diplay new pages when URL in browser URL addresses bar changes.*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'sub-route'
  },
  {
    path: 'sub-route',
    loadChildren: () =>
      import('./routes/sub-level/sub-level.module').then(
        (m) => m.SubLevelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

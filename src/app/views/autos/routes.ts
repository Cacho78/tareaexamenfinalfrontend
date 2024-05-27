import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Base'
        },
        children: [
          {
            path: '',
            redirectTo: 'cards',
            pathMatch: 'full'
          },
          {
            path: 'placas',
            loadComponent: () => import('./placas/placas.component').then(m => m.PlacasComponent),
            data: {
              title: 'placas'
            }
          },
                    {
            path: 'reportes',
            loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
            data: {
              title: 'Reportes'
            }
          },
          {
            path: 'usuarios',
            loadComponent: () => import('./usuarios/usuarios.component').then(m => m.UsuariosComponent),
            data: {
              title: 'usuarios'
            }
          },
        ]
    
      }
]